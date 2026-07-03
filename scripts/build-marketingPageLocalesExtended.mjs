/**
 * One-shot builder for marketingPageLocalesExtended.ts
 * Run: node scripts/build-marketingPageLocalesExtended.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const src = fs.readFileSync(
  path.join(root, "src/utils/marketingPageLocales.ts"),
  "utf8"
);
const frMatch = src.match(/const fr: Record<string, string> = \{([\s\S]*?)\n\};/);
const frKeys = [];
for (const m of frMatch[1].matchAll(/^\s+(\w+):/gm)) frKeys.push(m[1]);

const mt = fs.readFileSync(
  path.join(root, "src/utils/marketingTranslations.ts"),
  "utf8"
);

function extractTopLevel(lang) {
  const start = mt.indexOf(`\n  ${lang}: {`);
  const begin = mt.indexOf("{", start);
  let depth = 0,
    i;
  for (i = begin; i < mt.length; i++) {
    if (mt[i] === "{") depth++;
    else if (mt[i] === "}") {
      depth--;
      if (depth === 0) break;
    }
  }
  const block = mt.slice(begin + 1, i);
  const obj = {};
  for (const mm of block.matchAll(/^\s+(\w+):\s*"((?:\\.|[^"\\])*)"/gm)) {
    obj[mm[1]] = mm[2].replace(/\\"/g, '"').replace(/\\n/g, "\n");
  }
  return obj;
}

const ldStart = mt.indexOf("const langData");
const ld = mt.slice(ldStart);
const cnStart = ld.indexOf("\n  cn: {");
const cnBegin = ld.indexOf("{", cnStart);
let depth = 0,
  cnEnd;
for (cnEnd = cnBegin; cnEnd < ld.length; cnEnd++) {
  if (ld[cnEnd] === "{") depth++;
  else if (ld[cnEnd] === "}") {
    depth--;
    if (depth === 0) break;
  }
}
const cnBlock = ld.slice(cnBegin + 1, cnEnd);
const cnExisting = {};
for (const mm of cnBlock.matchAll(/^\s+(\w+):\s*"((?:\\.|[^"\\])*)"/gm)) {
  cnExisting[mm[1]] = mm[2].replace(/\\"/g, '"').replace(/\\n/g, "\n");
}

const existing = {
  pt: extractTopLevel("pt"),
  es: extractTopLevel("es"),
  ar: extractTopLevel("ar"),
  cn: cnExisting,
};

// Native page-level translations (246 keys each). Existing langData values reused where present.
const native = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "marketingPageLocalesExtended.data.json"),
    "utf8"
  )
);

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function buildLang(code) {
  const out = {};
  for (const k of frKeys) {
    const v = native[code]?.[k] ?? existing[code]?.[k];
    if (!v) throw new Error(`Missing translation: ${code}.${k}`);
    out[k] = v;
  }
  return out;
}

const langs = {
  pt: buildLang("pt"),
  es: buildLang("es"),
  ar: buildLang("ar"),
  cn: buildLang("cn"),
};

let out =
  "// Page-level marketing strings for pt, es, ar, cn (extended locales).\n\n";
for (const [code, obj] of Object.entries(langs)) {
  out += `const ${code}: Record<string, string> = {\n`;
  for (const k of frKeys) {
    out += `  ${k}: "${esc(obj[k])}",\n`;
  }
  out += "};\n\n";
}
out +=
  "export const marketingPageLocalesExtended: Record<string, Record<string, string>> = {\n  pt,\n  es,\n  ar,\n  cn,\n};\n";

const dest = path.join(root, "src/utils/marketingPageLocalesExtended.ts");
fs.writeFileSync(dest, out);
for (const [code, obj] of Object.entries(langs)) {
  console.log(`${code}: ${Object.keys(obj).length} keys`);
}
