import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  CheckCircle,
  RefreshCw,
  Sparkles,
  UserCheck,
  Smartphone,
  Eye,
  FileText,
  AlertOctagon,
  CheckSquare,
  Database,
  ArrowRight,
  ShieldAlert,
  MapPin,
  Clock,
  Camera,
  Layers,
  Map
} from "lucide-react";
import { getMarketingTranslation } from "../utils/marketingTranslations";
import { getSheetTranslation } from "../utils/sheetMockupTranslations";
import { getAiTranslation } from "../utils/aiMockupTranslations";

interface MockupProps {
  type: "timer" | "sheets" | "ai" | "photos" | "pdf" | "sos";
  language?: string;
  layout?: "wide" | "default";
  size?: "default" | "compact";
}

export default function InteractiveMockup({ type, language = "en", layout = "default", size = "default" }: MockupProps) {
  const isCompact = size === "compact";
  const getStatusText = () => {
    if (type === "timer" || type === "sos") {
      if (language === "pt") return "OFFLINE OK";
      if (language === "es") return "SIN CONEXIÓN OK";
      if (language === "cn") return "支持离线工作";
      if (language === "de") return "OFFLINE OK";
      if (language === "fr") return "OFFLINE OK";
      if (language === "ar") return "غير متصل - موافق";
      return "OFFLINE OK";
    } else {
      if (language === "pt") return "SINC. NUVEM";
      if (language === "es") return "SINC. NUBE";
      if (language === "cn") return "云端已同步";
      if (language === "de") return "CLOUD-SYNCHRONISIERT";
      if (language === "fr") return "SYNCHRONISÉ NUAGE";
      if (language === "ar") return "تمت المزامنة سحابياً";
      return "CLOUD SYNCED";
    }
  };

  // Common container wrapper with device outline style
  return (
    <div className={`w-full bg-slate-900 text-slate-100 overflow-hidden border border-slate-800 shadow-2xl relative ${isCompact ? "rounded-xl" : "rounded-2xl"}`}>
      {/* Chrome window frame */}
      <div className={`bg-slate-950 flex items-center justify-between border-b border-slate-800 ${isCompact ? "px-3 py-1.5 text-[9px]" : "px-4 py-2.5 text-xs"}`}>
        <div className="flex items-center gap-1.5 min-w-0">
          <span className={`rounded-full bg-rose-500/80 inline-block shrink-0 ${isCompact ? "w-2 h-2" : "w-3 h-3"}`}></span>
          <span className={`rounded-full bg-amber-500/80 inline-block shrink-0 ${isCompact ? "w-2 h-2" : "w-3 h-3"}`}></span>
          <span className={`rounded-full bg-emerald-500/80 inline-block shrink-0 ${isCompact ? "w-2 h-2" : "w-3 h-3"}`}></span>
          <span className={`ml-1.5 font-mono text-slate-400 font-medium select-none truncate ${isCompact ? "text-[8px]" : "text-[10px]"}`}>
            {type === "timer" || type === "sos" ? "tidyflow://cleaner-mobile-app" : `https://admin.tidyflowapp.com/dashboard/${type}`}
          </span>
        </div>
        <div className="px-2 py-0.5 bg-slate-800/60 rounded text-slate-400 text-[9px] font-mono select-none">
          {getStatusText()}
        </div>
      </div>

      <div
        className={`bg-gradient-to-b from-slate-900 to-slate-950 ${
          type === "sheets"
            ? `min-h-0 ${isCompact ? "p-2.5 sm:p-3" : "p-4 sm:p-5"}`
            : `${isCompact ? "p-2.5 sm:p-3 min-h-[260px] md:min-h-[280px]" : "p-4 sm:p-5 min-h-[360px] md:min-h-[380px]"} flex flex-col justify-between`
        }`}
      >
        <MockupContent type={type} language={language} layout={layout} size={size} />
      </div>
    </div>
  );
}

function MockupContent({ type, language = "en", layout = "default", size = "default" }: MockupProps) {
  const isCompact = size === "compact";
  switch (type) {
    case "timer":
      return <TimerMockup language={language} compact={isCompact} />;
    case "sheets":
      return <SheetsMockup language={language} layout={layout} compact={isCompact} />;
    case "ai":
      return <AiMockup language={language} />;
    case "photos":
      return <PhotosMockup language={language} />;
    case "pdf":
      return <PdfMockup language={language} />;
    case "sos":
      return <SosMockup language={language} />;
    default:
      return <div className="text-slate-400">Placeholder Mockup</div>;
  }
}

// 1. MOBILE WORK TIMER MOCKUP
function TimerMockup({ language = "en", compact = false }: { language?: string; compact?: boolean }) {
  const [status, setStatus] = useState<"READY" | "RUNNING" | "PAUSED" | "DONE">("READY");
  const [seconds, setSeconds] = useState(0);

  const getLocalizedChecklist = () => {
    if (language === "pt") {
      return [
        { id: 1, text: "Desinfetar balcões da cozinha e fogão", done: false },
        { id: 2, text: "Aspirar tapete e limpar área de estar", done: false },
        { id: 3, text: "Repor produtos de higiene e limpar banheiro", done: false },
        { id: 4, text: "Esvaziar lixo e desinfetar lixeiras", done: false }
      ];
    }
    if (language === "es") {
      return [
        { id: 1, text: "Desinfectar mostradores de cocina y estufa", done: false },
        { id: 2, text: "Aspirar alfombra y fregar sala de estar", done: false },
        { id: 3, text: "Reponer artículos de tocador y limpiar baño", done: false },
        { id: 4, text: "Vaciar basura y desinfectar contenedores", done: false }
      ];
    }
    if (language === "cn") {
      return [
        { id: 1, text: "消毒厨房台面和炉灶", done: false },
        { id: 2, text: "吸尘地毯并拖洗起居室", done: false },
        { id: 3, text: "补充洗漱用品并清洁卫生间", done: false },
        { id: 4, text: "倒垃圾并消毒垃圾桶", done: false }
      ];
    }
    if (language === "ar") {
      return [
        { id: 1, text: "تطهير أسطح المطبخ والموقد", done: false },
        { id: 2, text: "كنس السجاد ومسح منطقة المعيشة", done: false },
        { id: 3, text: "تجديد مستلزمات النظافة وتنظيف الحمام", done: false },
        { id: 4, text: "تفريغ القمامة وتطهير الحاويات", done: false }
      ];
    }
    return [
      { id: 1, text: "Sanitize kitchen counters & stovetop", done: false },
      { id: 2, text: "Vacuum carpet and mop living area", done: false },
      { id: 3, text: "Replenish toiletries & clean restroom", done: false },
      { id: 4, text: "Empty trash & disinfect bins", done: false }
    ];
  };

  const [checklist, setChecklist] = useState(getLocalizedChecklist());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Re-initialize when language changes
  useEffect(() => {
    setChecklist(getLocalizedChecklist());
  }, [language]);

  useEffect(() => {
    if (status === "RUNNING") {
      timerRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [status]);

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `00:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleCheck = (id: number) => {
    setChecklist(
      checklist.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const handleStart = () => setStatus("RUNNING");
  const handlePause = () => setStatus("PAUSED");
  const handleResume = () => setStatus("RUNNING");
  const handleSubmit = () => {
    setStatus("DONE");
  };
  const handleReset = () => {
    setStatus("READY");
    setSeconds(0);
    setChecklist(getLocalizedChecklist().map((item) => ({ ...item, done: false })));
  };

  const checkedCount = checklist.filter((i) => i.done).length;

  return (
    <div className={`flex items-center w-full ${compact ? "flex-col gap-3" : "flex-col md:flex-row gap-5"}`}>
      {/* Left: Mobile App Screen */}
      <div className={`shrink-0 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl ${compact ? "w-full max-w-[200px] mx-auto p-3" : "w-full md:w-56 p-4"}`}>
        <div className="text-[10px] text-brand-amber font-semibold tracking-wide uppercase mb-1">
          {getMarketingTranslation("mockupActiveClean", language)}
        </div>
        <h4 className="font-display font-bold text-sm text-white">Office #4B - Weekly</h4>
        <div className="text-[10px] text-slate-400 mb-3 flex items-center gap-1">
          <MapPin size={10} className="text-rose-500" /> {getMarketingTranslation("mockupGpsVerified", language)}
        </div>

        {/* Timer Dial Display */}
        <div className="my-3 bg-slate-900 rounded-xl p-3 border border-slate-800 text-center relative overflow-hidden">
          {status === "RUNNING" && (
            <div className="absolute top-0 inset-x-0 h-0.5 bg-brand-amber animate-pulse" />
          )}
          <span className={`block font-mono font-bold text-brand-amber tracking-wider ${compact ? "text-xl" : "text-2xl"}`}>
            {formatTime(seconds)}
          </span>
          <span className="text-[9px] text-slate-400 uppercase tracking-widest mt-0.5 block leading-normal">
            {status === "READY" && getMarketingTranslation("mockupReady", language)}
            {status === "RUNNING" && getMarketingTranslation("mockupRunning", language)}
            {status === "PAUSED" && getMarketingTranslation("mockupPaused", language)}
            {status === "DONE" && getMarketingTranslation("mockupDone", language)}
          </span>
        </div>

        {/* Action Controls */}
        <div className="grid grid-cols-2 gap-2 my-3">
          {status === "READY" && (
            <button
              onClick={handleStart}
              className="col-span-2 py-2 px-3 bg-brand-amber hover:bg-brand-amber-dark text-slate-950 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all"
            >
              <Play size={12} fill="currentColor" /> {getMarketingTranslation("mockupBtnStart", language)}
            </button>
          )}

          {status === "RUNNING" && (
            <>
              <button
                onClick={handlePause}
                className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg flex items-center justify-center gap-1 transition-all animate-fade-in"
              >
                <Pause size={12} /> {getMarketingTranslation("mockupBtnBreak", language)}
              </button>
              <button
                onClick={handleSubmit}
                disabled={checkedCount < checklist.length}
                className={`py-1.5 px-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all ${
                  checkedCount === checklist.length
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-slate-800 text-slate-500 cursor-not-allowed"
                }`}
              >
                <CheckCircle size={12} /> {getMarketingTranslation("mockupBtnSubmit", language)}
              </button>
            </>
          )}

          {status === "PAUSED" && (
            <>
              <button
                onClick={handleResume}
                className="py-1.5 px-2 bg-brand-amber text-slate-950 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all"
              >
                <Play size={12} fill="currentColor" /> {getMarketingTranslation("mockupBtnResume", language)}
              </button>
              <button
                onClick={handleSubmit}
                disabled={checkedCount < checklist.length}
                className={`py-1.5 px-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all ${
                  checkedCount === checklist.length
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-slate-800 text-slate-500 cursor-not-allowed"
                }`}
              >
                <CheckCircle size={12} /> {getMarketingTranslation("mockupBtnSubmit", language)}
              </button>
            </>
          )}

          {status === "DONE" && (
            <button
              onClick={handleReset}
              className="col-span-2 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all"
            >
              <RefreshCw size={12} /> {getMarketingTranslation("mockupBtnReset", language)}
            </button>
          )}
        </div>

        {/* Small checklist tracking */}
        <div className="border-t border-slate-800/80 pt-2 text-[10px]">
          <div className="flex justify-between text-slate-400 mb-1">
            <span>{language === "pt" ? "Progresso" : language === "es" ? "Progreso" : language === "cn" ? "当前进度" : language === "ar" ? "التقدم" : "Progress"}</span>
            <span>{checkedCount}/{checklist.length} {language === "pt" ? "Concluído" : language === "es" ? "Completado" : language === "cn" ? "已完成" : language === "ar" ? "مكتمل" : "Completed"}</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-1">
            <div
              className="bg-emerald-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${(checkedCount / checklist.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Right: Live Explanation */}
      <div className="flex-1 space-y-4 text-left">
        <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
          <Smartphone className="text-brand-amber" size={20} /> {language === "pt" ? "Motor Móvel do Trabalhador de Campo" : language === "es" ? "Motor Móvil para Personal de Campo" : language === "cn" ? "外勤保洁移动端引擎" : language === "ar" ? "محرك الهاتف المحمول للعامل الميداني" : "Field Worker Mobile Engine"}
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          {language === "pt" ? "Os limpadores acessam seus trabalhos diários com um layout simplificado e sem distrações. O cronômetro local salva os detalhes da sessão e sincroniza perfeitamente mesmo offline." : language === "es" ? "El personal de limpieza accede a sus trabajos diarios con un diseño simplificado y sin distracciones. El temporizador local guarda los detalles de la sesión y se sincroniza sin problemas incluso sin conexión." : language === "cn" ? "保洁员以精简、零干扰的布局访问其日常工作。本地计时器保存会话细节，即使离线或在地下也能无缝同步。" : language === "ar" ? "يصل عمال النظافة إلى وظائفهم اليومية بتخطيط مبسط وخالٍ من التشتيت. يحفظ المؤقت المحلي تفاصيل الجلسة ويتزامن بسلاسة حتى في حالة عدم الاتصال بالإنترنت." : "Cleaners access their daily jobs with a streamlined, zero-distraction layout. The local timer saves session details and syncs seamlessly even if underground or offline."}
        </p>
        <div className="space-y-2.5">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-medium">
            {language === "pt" ? "Instruções Interativas" : language === "es" ? "Instrucciones Interactivas" : language === "cn" ? "交互式操作指南" : language === "ar" ? "تعليمات تفاعلية" : "Interactive Instructions"}
          </span>
          <div className="space-y-1.5">
            {checklist.map((item) => (
              <label
                key={item.id}
                className="flex items-center gap-2.5 p-2 bg-slate-900/60 rounded-lg hover:bg-slate-800/50 cursor-pointer select-none border border-slate-800/40 text-xs transition-colors"
              >
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => toggleCheck(item.id)}
                  className="w-4 h-4 rounded text-brand-amber border-slate-700 bg-slate-950 focus:ring-brand-amber focus:ring-offset-slate-900"
                />
                <span className={item.done ? "line-through text-slate-500 transition-colors" : "text-slate-200 transition-colors"}>
                  {item.text}
                </span>
              </label>
            ))}
          </div>
        </div>
        {checkedCount < checklist.length && status === "RUNNING" && (
          <p className="text-[10px] text-brand-amber flex items-center gap-1 bg-brand-amber/10 p-2 rounded border border-brand-amber/20">
            <AlertOctagon size={12} /> {language === "pt" ? "Os limpadores devem marcar todas as tarefas antes de enviar o trabalho!" : language === "es" ? "¡El personal de limpieza debe marcar todas las tareas antes de enviar su trabajo!" : language === "cn" ? "保洁员在提交工作前必须勾选所有任务！" : language === "ar" ? "يجب على عمال النظافة التحقق من جميع المهام قبل تقديم عملهم!" : "Cleaners must check off all tasks before submitting their work!"}
          </p>
        )}
      </div>
    </div>
  );
}

// 2. TWO-WAY GOOGLE SHEETS SYNC MOCKUP
function SheetsMockup({ language = "en", layout = "default", compact = false }: { language?: string; layout?: "wide" | "default"; compact?: boolean }) {
  const t = (key: Parameters<typeof getSheetTranslation>[0]) => getSheetTranslation(key, language);
  const isWide = layout === "wide" && !compact;

  const [sheetData, setSheetData] = useState([
    { id: "PROP-001", address: "88 Kings Road, SW3", rate: "£65", active: "yes", lastSynced: "Synced" },
    { id: "PROP-002", address: "12 Abbey Gardens, NW8", rate: "£110", active: "yes", lastSynced: "Synced" },
    { id: "PROP-003", address: "40 Park Lane, W1", rate: "£150", active: "no", lastSynced: "Paused" },
    { id: "PROP-004", address: "102 Kensington High St", rate: "£95", active: "yes", lastSynced: "Synced" },
    { id: "PROP-005", address: "15 Belgrave Square, SW1", rate: "£180", active: "no", lastSynced: "Paused" },
    { id: "PROP-006", address: "24 Cheyne Walk, SW3", rate: "£135", active: "yes", lastSynced: "Synced" }
  ]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: string }>({ row: 0, col: "B" });

  const getInitialLogs = () => [t("syncLogInitial1"), t("syncLogInitial2")];

  const [syncHistory, setSyncHistory] = useState<string[]>(getInitialLogs());

  useEffect(() => {
    setSyncHistory(getInitialLogs());
  }, [language]);

  const togglePropertyStatus = (id: string) => {
    setSheetData(
      sheetData.map((prop) => {
        if (prop.id === id) {
          const newStatus = prop.active === "yes" ? "no" : "yes";
          const syncStatus = newStatus === "yes" ? "Synced" : "Paused";
          return { ...prop, active: newStatus, lastSynced: syncStatus };
        }
        return prop;
      })
    );
  };

  const handleManualSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      const now = new Date().toLocaleTimeString();
      const activeCount = sheetData.filter((p) => p.active === "yes").length;
      const logText = t("syncLogManual")
        .replace("{time}", now)
        .replace("{count}", String(activeCount));
      setSyncHistory((h) => [logText, ...h.slice(0, 3)]);
    }, 1500);
  };

  // Generate formula based on selected cell
  const getFormulaText = () => {
    const rowObj = sheetData[selectedCell.row];
    if (!rowObj) return `=TIDYFLOW_SYNC("https://tidyflowapp.com")`;
    switch (selectedCell.col) {
      case "A":
        return `=PROPERTY_ID("${rowObj.id}")`;
      case "B":
        return `=ADDRESS_LOOKUP("${rowObj.address}")`;
      case "C":
        return `=RATE_VALUE("${rowObj.rate}")`;
      case "D":
        return `=SYNC_TRIGGER("${rowObj.active === "yes" ? "TRUE" : "FALSE"}")`;
      case "E":
        return `=GET_SYNC_STATUS("${rowObj.lastSynced}")`;
      default:
        return `=TIDYFLOW_SYNC("https://docs.google.com/spreadsheets/d/1TwpA0He...")`;
    }
  };

  const visibleRows = compact ? sheetData.slice(0, 4) : sheetData;

  return (
    <div
      className={`flex gap-3 items-stretch w-full relative ${
        isWide ? "flex-col lg:flex-row lg:items-stretch" : "flex-col"
      }`}
    >
      {/* Left Column: Simulated Google Sheets UI */}
      <div className={`flex-1 min-w-0 w-full bg-white text-slate-800 rounded-xl shadow-xl border border-slate-200 flex flex-col justify-between transition-all relative ${
        isWide ? "lg:min-w-0" : ""
      } ${compact ? "p-2.5 sm:p-3" : "p-4 sm:p-5"}`}>
        {/* Syncing Sweep Laser Animation */}
        {isSyncing && (
          <div className="absolute left-0 right-0 h-2 bg-emerald-500/90 shadow-[0_0_16px_#10b981] z-20 animate-laser-sweep pointer-events-none" />
        )}

        <div>
          {/* Faux Google Sheets Brand Header */}
          <div className={`flex items-center justify-between border-b border-slate-200 ${compact ? "pb-2 mb-2" : "pb-3 mb-3"}`}>
            <div className="flex items-center gap-2">
              <div className={`bg-emerald-600 rounded flex items-center justify-center text-white font-extrabold shadow-sm ${compact ? "w-6 h-6 text-xs" : "w-8 h-8 text-sm"}`}>
                田
              </div>
              <div>
                <h4 className={`font-bold text-slate-800 leading-tight ${compact ? "text-xs" : "text-sm"}`}>{t("sheetTitle")}</h4>
                <p className={`text-slate-500 font-medium ${compact ? "text-[10px]" : "text-xs"}`}>{t("sheetSubtitle")}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className={`hidden sm:inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 rounded font-mono font-semibold ${compact ? "text-[8px] px-1.5 py-0.5" : "text-[10px] px-2 py-0.5"}`}>
                v1.2 Live
              </span>
              <span className={`text-slate-400 font-mono ${compact ? "text-[9px]" : "text-xs"}`}>{t("sheetRealTimeView")}</span>
            </div>
          </div>

          {/* Faux Sheets Toolbar */}
          <div className={`flex flex-wrap items-center gap-1 bg-slate-50 rounded-lg border border-slate-200 mb-2 text-slate-500 select-none ${compact ? "p-1 text-[9px]" : "p-2 gap-1.5 mb-3 text-xs"}`}>
            <span className="text-xs px-1 font-semibold border-r border-slate-200 text-slate-400">100%</span>
            <button className="p-1 hover:bg-slate-200 rounded text-slate-600 transition-colors" title="Undo">↶</button>
            <button className="p-1 hover:bg-slate-200 rounded text-slate-600 transition-colors mr-1" title="Redo">↷</button>
            <span className="h-4 w-[1px] bg-slate-200 inline-block" />
            <button className="px-1.5 py-0.5 hover:bg-slate-200 rounded text-xs font-bold text-slate-700" title="Bold">B</button>
            <button className="px-1.5 py-0.5 hover:bg-slate-200 rounded text-xs italic text-slate-700" title="Italic">I</button>
            <button className="px-1.5 py-0.5 hover:bg-slate-200 rounded text-xs line-through text-slate-700" title="Strikethrough">S</button>
            <span className="h-4 w-[1px] bg-slate-200 inline-block" />
            <div className="flex items-center gap-0.5 px-1 hover:bg-slate-200 rounded cursor-pointer">
              <span className="text-xs font-bold text-emerald-600">A</span>
              <span className="text-[8px] text-slate-400">▼</span>
            </div>
            <div className="flex items-center gap-0.5 px-1 hover:bg-slate-200 rounded cursor-pointer mr-1">
              <span className="text-sm text-amber-500">🪣</span>
              <span className="text-[8px] text-slate-400">▼</span>
            </div>
            <span className="h-4 w-[1px] bg-slate-200 inline-block" />
            <span className="text-xs px-1">≡</span>
            <span className="text-xs px-1">↕</span>
            <span className="text-xs text-emerald-600 font-bold ml-auto flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              {t("sheetConnected")}
            </span>
          </div>

          {/* Formula Bar */}
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-2 mb-3 text-sm shadow-inner">
            <div className="bg-slate-100 text-slate-600 font-mono font-bold px-2.5 py-1 rounded border border-slate-200 min-w-[40px] text-center select-none uppercase">
              {selectedCell.col}{selectedCell.row + 1}
            </div>
            <span className="text-slate-400 font-serif italic select-none font-semibold px-0.5">fx</span>
            <div className="h-5 w-[1px] bg-slate-200" />
            <input
              type="text"
              readOnly
              value={getFormulaText()}
              className="flex-1 bg-transparent font-mono text-emerald-800 text-xs select-all outline-none"
            />
          </div>

          {/* Spreadsheet Grid */}
          <div className={`overflow-x-auto border border-slate-200 rounded-lg shadow-sm ${compact ? "text-[9px]" : "text-xs"}`}>
            <table className={`w-full text-left border-collapse bg-white ${compact ? "min-w-[380px]" : "min-w-[520px]"}`}>
              <thead>
                <tr className="bg-slate-100 text-slate-500 font-mono text-xs border-b border-slate-200 select-none">
                  <th className="p-2 border-r border-slate-200 bg-slate-200/60 w-10 text-center"></th>
                  <th className="p-2 border-r border-slate-200 text-center w-28">A</th>
                  <th className="p-2 border-r border-slate-200 text-center">B</th>
                  <th className="p-2 border-r border-slate-200 text-center w-24">C</th>
                  <th className="p-2 border-r border-slate-200 text-center w-24">D</th>
                  <th className="p-2 text-center w-32">E</th>
                </tr>
                <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs">
                  <th className="p-1.5 border-r border-slate-200 bg-slate-100 text-center"></th>
                  <th className="p-2 border-r border-slate-200 font-medium">{t("colPropertyId")}</th>
                  <th className="p-2 border-r border-slate-200 font-medium">{t("colAddress")}</th>
                  <th className="p-2 border-r border-slate-200 font-medium text-center">{t("colRate")}</th>
                  <th className="p-2 border-r border-slate-200 font-medium text-center">{t("colActive")}</th>
                  <th className="p-2 font-medium text-center">{t("colSyncStatus")}</th>
                </tr>
              </thead>
              <tbody>
                {visibleRows.map((row, index) => {
                  const isRowSelected = selectedCell.row === index;
                  return (
                    <tr
                      key={row.id}
                      className={`border-b border-slate-100 hover:bg-slate-50/80 transition-colors ${
                        isRowSelected ? "bg-emerald-50/30" : ""
                      }`}
                    >
                      <td className="p-1.5 border-r border-slate-200 bg-slate-100/60 font-mono text-center text-slate-400 font-medium text-[10px] select-none">
                        {index + 1}
                      </td>
                      <td
                        onClick={() => setSelectedCell({ row: index, col: "A" })}
                        className={`p-2 border-r border-slate-100 font-mono text-emerald-800 font-bold text-xs cursor-pointer relative ${
                          isRowSelected && selectedCell.col === "A"
                            ? "ring-2 ring-emerald-500 ring-inset bg-emerald-50/40"
                            : ""
                        }`}
                      >
                        {row.id}
                      </td>
                      <td
                        onClick={() => setSelectedCell({ row: index, col: "B" })}
                        className={`p-2 border-r border-slate-100 font-medium text-slate-800 cursor-pointer relative ${
                          isRowSelected && selectedCell.col === "B"
                            ? "ring-2 ring-emerald-500 ring-inset bg-emerald-50/40"
                            : ""
                        }`}
                      >
                        {row.address}
                      </td>
                      <td
                        onClick={() => setSelectedCell({ row: index, col: "C" })}
                        className={`p-2 border-r border-slate-100 text-center text-slate-600 font-mono cursor-pointer relative ${
                          isRowSelected && selectedCell.col === "C"
                            ? "ring-2 ring-emerald-500 ring-inset bg-emerald-50/40"
                            : ""
                        }`}
                      >
                        {row.rate}
                      </td>
                      <td
                        onClick={() => setSelectedCell({ row: index, col: "D" })}
                        className={`p-2 border-r border-slate-100 text-center cursor-pointer relative ${
                          isRowSelected && selectedCell.col === "D"
                            ? "ring-2 ring-emerald-500 ring-inset bg-emerald-50/40"
                            : ""
                        }`}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePropertyStatus(row.id);
                            setSelectedCell({ row: index, col: "D" });
                          }}
                          className={`text-[10px] px-2.5 py-1 rounded font-mono font-bold uppercase transition-all shadow-sm ${
                            row.active === "yes"
                              ? "bg-emerald-100 text-emerald-800 hover:bg-rose-100 hover:text-rose-800 border border-emerald-300"
                              : "bg-slate-200 text-slate-500 hover:bg-emerald-100 hover:text-emerald-800 border border-slate-300"
                          }`}
                          title="Click to toggle status in Sheets"
                        >
                          {row.active}
                        </button>
                      </td>
                      <td
                        onClick={() => setSelectedCell({ row: index, col: "E" })}
                        className={`p-2 text-center cursor-pointer relative ${
                          isRowSelected && selectedCell.col === "E"
                            ? "ring-2 ring-emerald-500 ring-inset bg-emerald-50/40"
                            : ""
                        }`}
                      >
                        <span
                          className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-1 rounded-full ${
                            row.active === "yes"
                              ? "bg-sky-50 text-sky-700 border border-sky-100"
                              : "bg-slate-100 text-slate-400 border border-slate-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              row.active === "yes" ? "bg-sky-500 animate-pulse" : "bg-slate-400"
                            }`}
                          />
                          {row.lastSynced === "Synced" ? t("statusSynced") : t("statusPaused")}
                        </span>
                      </td>
                    </tr>
                  );
                })}
                {!compact && [7, 8].map((fillerIndex) => (
                  <tr key={fillerIndex} className="border-b border-slate-100 select-none">
                    <td className="p-1.5 border-r border-slate-200 bg-slate-100/40 font-mono text-center text-slate-300 text-[10px]">
                      {fillerIndex}
                    </td>
                    <td className="p-2 border-r border-slate-100 text-slate-300"></td>
                    <td className="p-2 border-r border-slate-100 text-slate-300"></td>
                    <td className="p-2 border-r border-slate-100 text-slate-300"></td>
                    <td className="p-2 border-r border-slate-100 text-slate-300"></td>
                    <td className="p-2 text-slate-300"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!compact && <p className="text-xs text-slate-400 mt-3 italic leading-relaxed font-medium">{t("sheetTip")}</p>}
        </div>

        {/* Real-time sync connection bar */}
        <div className={`border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between text-slate-500 font-mono gap-1.5 ${compact ? "pt-2 mt-2 text-[9px]" : "pt-3 mt-4 text-xs gap-2"}`}>
          <span>{t("sheetServiceConnected")}</span>
          <span className="text-emerald-600 flex items-center gap-1.5 font-semibold bg-emerald-50 px-2.5 py-1 rounded">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            ● {t("sheetApiHandshake")}
          </span>
        </div>
      </div>

      {/* Dynamic Sync Connection Bridge */}
      <div
        className={`flex items-center justify-center shrink-0 relative select-none ${
          isWide
            ? `flex-row w-full px-2 lg:flex-col lg:w-[56px] lg:py-3 ${compact ? "h-12 lg:min-h-[160px]" : "h-16 lg:min-h-[240px] lg:py-4"}`
            : `flex-row w-full px-2 ${compact ? "h-12" : "h-16"}`
        }`}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none ${
            isWide ? "px-4 lg:px-0 lg:py-4" : "px-4"
          }`}
        >
          <div
            className={`relative overflow-hidden rounded-full bg-slate-800/80 ${
              isWide ? "w-full max-w-2xl h-2.5 lg:w-2.5 lg:max-w-none lg:h-full lg:min-h-[200px]" : "w-full max-w-2xl h-2.5"
            }`}
          >
            <div
              className={`absolute transition-all duration-300 ${
                isWide
                  ? `inset-x-0 top-0 h-full w-full bg-gradient-to-r lg:bg-gradient-to-b from-emerald-400 via-brand-amber to-sky-400 ${
                      isSyncing ? "shadow-[0_0_16px_#f59e0b]" : ""
                    }`
                  : `h-full bg-gradient-to-r from-emerald-400 via-brand-amber to-sky-400 ${
                      isSyncing ? "w-full shadow-[0_0_16px_#f59e0b]" : "w-2/3"
                    }`
              }`}
            />
            <div
              className={`absolute bg-white rounded-full shadow-[0_0_12px_#fff] ${
                isWide
                  ? `w-5 h-full top-0 ${isSyncing ? "animate-flow-x-fast lg:animate-flow-y-fast" : "animate-flow-x-normal lg:animate-flow-y-normal"}`
                  : `top-0 w-5 h-full ${isSyncing ? "animate-flow-x-fast" : "animate-flow-x-normal"}`
              }`}
            />
          </div>
        </div>

        <div
          className={`relative z-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 cursor-pointer ${
            compact ? "w-11 h-11" : "w-14 h-14"
          } ${
            isSyncing
              ? "bg-brand-amber text-slate-950 border-brand-amber shadow-[0_0_20px_rgba(245,158,11,0.9)] scale-110"
              : "bg-slate-950 text-slate-300 border-slate-700 hover:text-brand-amber hover:border-brand-amber/60"
          }`}
          onClick={handleManualSync}
          title="Trigger Synchronization Connection"
        >
          <RefreshCw size={compact ? 18 : 22} className={isSyncing ? "animate-spin" : "hover:scale-110 transition-transform"} />
        </div>
      </div>

      {/* Right Column: TidyFlow Sync Center */}
      <div
        className={`w-full flex flex-col text-left bg-slate-950/60 rounded-xl border border-slate-800 shadow-lg ${
          isWide ? `lg:shrink-0 ${compact ? "lg:w-56 gap-3 p-3" : "lg:w-72 gap-5 p-5"}` : compact ? "gap-3 p-3" : "gap-5 p-5"
        }`}
      >
        <div>
          <h3 className={`font-display font-bold text-white flex items-center gap-2 ${compact ? "text-sm" : "text-lg sm:text-xl gap-2.5"}`}>
            <Database className="text-brand-amber shrink-0" size={compact ? 16 : 22} />
            <span>{t("syncPanelTitle")}</span>
          </h3>
          <p className={`text-slate-300 leading-relaxed ${compact ? "text-[10px] mt-1" : "text-sm mt-2"}`}>{t("syncPanelDesc")}</p>
        </div>

        <button
          onClick={handleManualSync}
          disabled={isSyncing}
          className={`w-full bg-brand-amber hover:bg-brand-amber-dark text-slate-950 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-md disabled:bg-slate-800 disabled:text-slate-400 disabled:cursor-not-allowed cursor-pointer ${
            compact ? "py-2 px-3 text-[10px]" : "py-3 px-4 text-sm"
          }`}
        >
          <RefreshCw size={compact ? 14 : 16} className={isSyncing ? "animate-spin" : ""} />
          {isSyncing ? t("syncBtnProcessing") : t("syncBtnNow")}
        </button>

        <div className={`bg-slate-950 rounded-lg border border-slate-800 flex-1 ${compact ? "p-2.5" : "p-3.5"}`}>
          <span className={`uppercase font-mono text-slate-400 tracking-wider font-semibold block mb-1.5 ${compact ? "text-[8px]" : "text-[10px] mb-2"}`}>
            {t("syncActivityLog")}
          </span>
          <div className={`space-y-1.5 overflow-y-auto pr-1 ${compact ? "max-h-[100px]" : "max-h-[160px]"}`}>
            {syncHistory.map((log, index) => (
              <div key={index} className={`font-mono text-slate-300 flex items-start gap-1.5 ${compact ? "text-[9px]" : "text-xs"}`}>
                <span className="text-brand-amber select-none mt-0.5">›</span>
                <span className="leading-relaxed">{log}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. AI RECOMMENDER MOCKUP
function AiMockup({ language = "en" }: { language?: string }) {
  const [running, setRunning] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const t = getAiTranslation(language);
  const candidates = t.candidates;

  const handleRunAi = () => {
    setRunning(true);
    setSelected(null);
    setTimeout(() => {
      setRunning(false);
      setSelected(1);
    }, 1200);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 items-center w-full">
      {/* Left Column: Candidates list */}
      <div className="w-full md:w-64 shrink-0 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>{t.assigneeSearch}</span>
          <span>3 {t.cleanersCount}</span>
        </div>

        {candidates.map((c) => (
          <div
            key={c.id}
            onClick={() => {
              if (!c.onLeave) setSelected(c.id);
            }}
            className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
              selected === c.id
                ? "bg-slate-900 border-brand-amber ring-1 ring-brand-amber"
                : c.onLeave
                ? "bg-slate-950/40 border-slate-900 opacity-50 cursor-not-allowed"
                : "bg-slate-950 border-slate-800 hover:border-slate-700"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-xs text-white">{c.name}</h4>
                <div className="flex gap-1.5 items-center text-[10px] text-slate-400 mt-0.5">
                  <span>{c.rating}</span>
                  <span>•</span>
                  <span>{c.distance}</span>
                </div>
              </div>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                  c.onLeave
                    ? "bg-rose-950/80 text-rose-300"
                    : c.id === 1
                    ? "bg-brand-amber/10 text-brand-amber"
                    : "bg-slate-800 text-slate-300"
                }`}
              >
                {c.id === 1 && selected === 1 ? t.statusRec : c.status}
              </span>
            </div>

            {selected === c.id && (
              <div className="mt-2 pt-2 border-t border-slate-800 text-[10px] text-brand-amber flex items-center gap-1.5 animate-fade-in">
                <Sparkles size={11} /> {c.reason}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Column: AI Console controls */}
      <div className="flex-1 space-y-4 text-left">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-brand-amber/10 text-brand-amber text-[10px] font-mono font-bold rounded">
            <Sparkles size={11} /> {t.engineBadge}
          </div>
          <h3 className="font-display font-bold text-lg text-white">{t.title}</h3>
          <p className="text-xs text-slate-300 leading-relaxed">{t.desc}</p>
        </div>

        <button
          onClick={handleRunAi}
          disabled={running}
          className="w-full py-2.5 px-4 bg-gradient-to-r from-brand-amber to-amber-600 text-slate-950 hover:from-amber-400 hover:to-brand-amber text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-lg"
        >
          <Sparkles size={13} className={running ? "animate-spin" : ""} />
          {running ? t.btnRunning : t.btnRun}
        </button>

        {selected === 1 && (
          <div className="bg-emerald-950/40 border border-emerald-800/40 p-3 rounded-lg text-xs space-y-1 animate-fade-in">
            <h5 className="font-semibold text-emerald-400 flex items-center gap-1">
              <UserCheck size={14} /> {t.recTitle}
            </h5>
            <p className="text-slate-300 text-[11px] leading-relaxed">{t.recDesc}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// 4. BEFORE/AFTER PHOTOS SLIDER MOCKUP
function PhotosMockup({ language = "en" }: { language?: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [photoScore, setPhotoScore] = useState<"analyze" | "loading" | "complete">("analyze");
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  };

  const handleTriggerScore = () => {
    setPhotoScore("loading");
    setTimeout(() => {
      setPhotoScore("complete");
    }, 1500);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 items-stretch w-full">
      {/* Left Column: Sliding Before/After Container */}
      <div className="flex-1 flex flex-col justify-between">
        <div
          ref={sliderRef}
          onMouseMove={(e) => {
            if (e.buttons === 1) handleMove(e.clientX);
          }}
          onTouchMove={(e) => {
            if (e.touches[0]) handleMove(e.touches[0].clientX);
          }}
          className="relative w-full h-48 bg-slate-800 rounded-xl overflow-hidden cursor-ew-resize select-none border border-slate-700"
        >
          {/* After View (Bottom layer) */}
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
            {/* Simulation representation of glistening clean kitchen */}
            <div className="text-center">
              <span className="text-3xl">✨</span>
              <h5 className="font-bold text-sm mt-1 text-white uppercase tracking-wider">
                {language === "pt" ? "DEPOIS DA LIMPEZA" : language === "es" ? "DESPUÉS DE LA LIMPIEZA" : language === "cn" ? "保洁后验收" : language === "ar" ? "بعد التنظيف" : "AFTER CLEAN"}
              </h5>
              <p className="text-[10px] text-slate-400">
                {language === "pt" ? "Superfícies brilhantes e higienizadas" : language === "es" ? "Superficies brillantes y desinfectadas" : language === "cn" ? "表面光洁无痕，已进行全面消毒" : language === "ar" ? "أسطح خالية من الخطوط وتجهيزات معقمة" : "Streak-free surfaces & sanitized fixtures"}
              </p>
            </div>
          </div>

          {/* Before View (Top sliding layer) */}
          <div
            className="absolute inset-y-0 left-0 bg-slate-950 flex items-center justify-center overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* Simulation of messy kitchen */}
            <div className="text-center w-full min-w-[280px]">
              <span className="text-3xl">⚠️</span>
              <h5 className="font-bold text-sm mt-1 text-rose-400 uppercase tracking-wider">
                {language === "pt" ? "ANTES DA LIMPEZA" : language === "es" ? "ANTES DE LA LIMPIEZA" : language === "cn" ? "保洁前状况" : language === "ar" ? "قبل التنظيف" : "BEFORE CLEAN"}
              </h5>
              <p className="text-[10px] text-slate-500">
                {language === "pt" ? "Pratos sujos e poeira presentes" : language === "es" ? "Platos sucios y polvo presentes" : language === "cn" ? "现场存在未洗餐具与积攒浮尘" : language === "ar" ? "وجود أطباق غير مغسولة وجزيئات غبار" : "Unwashed dishes & dust particles present"}
              </p>
            </div>
          </div>

          {/* Squeegee handle separator line */}
          <div
            className="absolute inset-y-0 w-1 bg-brand-amber cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-amber text-slate-950 flex items-center justify-center text-xs font-bold shadow-md border border-white">
              ⇄
            </div>
          </div>
        </div>

        <div className="text-center text-[10px] text-slate-400 mt-2 leading-normal">
          {language === "pt" ? "Arraste a barra laranja para ver o Antes e o Depois!" : language === "es" ? "¡Arrastre el control deslizante naranja para ver el Antes y el Después!" : language === "cn" ? "左右滑动拖动橙色中心滑杆，可实景对比作业前后清洁状态！" : language === "ar" ? "اسحب الشريط البرتقالي للتنقل بين حالتي قبل وبعد التنظيف!" : "Drag the orange center slider to swipe between the **Before** and **After** conditions!"}
        </div>
      </div>

      {/* Right Column: AI Photo QC Scoring */}
      <div className="w-full md:w-60 shrink-0 text-left flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-display font-bold text-base text-white flex items-center gap-1.5">
            <Camera className="text-brand-amber" size={18} /> {language === "pt" ? "Prova Visual e Análise de Qualidade" : language === "es" ? "Prueba Visual y Análisis de Calidad" : language === "cn" ? "现场完工拍照 QA 存证" : language === "ar" ? "إثبات مرئي وتحليل الجودة" : "Visual Proof & Quality Analysis"}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed mt-1">
            {language === "pt" ? "Gere confiança com evidências inquestionáveis de clientes. O pessoal de campo envia fotos com marcação geográfica para comprovar a qualidade. Nossa IA analisa tudo na hora." : language === "es" ? "Genere confianza con pruebas irrefutables de sus clientes. El personal sube fotos geoetiquetadas para probar la calidad, analizadas de inmediato con IA." : language === "cn" ? "用真凭实据消除信任缝隙。外勤人员上传带 GPS 定位的完工照，公司后台服务器和 AI 机制秒级完成分析审核。" : language === "ar" ? "بناء الثقة بأدلة عملاء قوية. يرفع العمال صورًا مع علامات جغرافية ويحللها الذكاء الاصطناعي." : "Build trust with bulletproof client evidence. Cleaners upload geo-tagged before/after photos to prove quality. Our server-side AI analyzes them instantly."}
          </p>
        </div>

        {photoScore === "analyze" && (
          <button
            onClick={handleTriggerScore}
            className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all"
          >
            <Sparkles size={12} className="text-brand-amber" /> {language === "pt" ? "Executar Análise de Foto" : language === "es" ? "Iniciar Análisis de Foto con IA" : language === "cn" ? "运行 AI 照片质检验收分析" : language === "ar" ? "تشغيل تحليل الصور بالذكاء الاصطناعي" : "Run AI Photo Analysis"}
          </button>
        )}

        {photoScore === "loading" && (
          <div className="w-full py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-center flex items-center justify-center gap-1.5 text-slate-400">
            <RefreshCw size={12} className="animate-spin text-brand-amber" /> {language === "pt" ? "Analisando camadas visuais..." : language === "es" ? "Analizando capas visuales..." : language === "cn" ? "正在像素级智能识别画面元素..." : language === "ar" ? "جاري تحليل الطبقات المرئية..." : "Analyzing visual layers..."}
          </div>
        )}

        {photoScore === "complete" && (
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2 animate-fade-in">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-slate-400">{language === "pt" ? "PONTUAÇÃO DE QUALIDADE IA" : language === "es" ? "PUNTUACIÓN DE CALIDAD DE IA" : language === "cn" ? "AI 智能综合质检评分" : language === "ar" ? "درجة جودة الذكاء الاصطناعي" : "AI QUALITY SCORE"}</span>
              <span className="text-emerald-400 font-mono font-bold">98% PASS</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5">
              <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: "98%" }} />
            </div>
            <div className="text-[10px] text-slate-300 flex items-start gap-1 leading-normal">
              <CheckCircle size={10} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>
                {language === "pt" ? "Brilho verificado em aço e porcelana. Detecção de poeira insignificante." : language === "es" ? "Brillo verificado en acero y porcelana. Detección de polvo insignificante." : language === "cn" ? "已智能核验并验证不锈钢与陶瓷器具表面的反光清洁度。积灰率评级：极佳/可忽略不计。" : language === "ar" ? "تم التحقق من اللمعان البراق على الفولاذ والخزف. تقييم الغبار: ضئيل للغاية." : "Glistening shine verified on steel and porcelain fixtures. Dust rating: negligible."}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 5. CLIENT PDF EXPORTER MOCKUP
function PdfMockup({ language = "en" }: { language?: string }) {
  const [compName, setCompName] = useState("ProClean Specialists");
  const [currency, setCurrency] = useState("£");
  const [downloadState, setDownloadState] = useState<"idle" | "generating" | "finished">("idle");

  const handleDownload = () => {
    setDownloadState("generating");
    setTimeout(() => {
      setDownloadState("finished");
    }, 1500);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 items-stretch w-full">
      {/* Left Column: Interactive Form & Controls */}
      <div className="w-full md:w-56 shrink-0 space-y-3 text-left">
        <h4 className="font-display font-bold text-xs text-slate-300 uppercase tracking-wider">
          {language === "pt" ? "PERSONALIZADOR DE PDF" : language === "es" ? "PERSONALIZADOR DE PDF" : language === "cn" ? "PDF 报表配置选项" : language === "ar" ? "مخصص PDF" : "PDF CUSTOMIZER"}
        </h4>
        
        <div>
          <label className="block text-[10px] text-slate-400 mb-1">
            {language === "pt" ? "Nome da Empresa" : language === "es" ? "Nombre de la Empresa" : language === "cn" ? "保洁公司名称" : language === "ar" ? "اسم الشركة" : "Company Name"}
          </label>
          <input
            type="text"
            value={compName}
            onChange={(e) => setCompName(e.target.value)}
            className="w-full p-1.5 bg-slate-950 border border-slate-800 rounded text-xs text-white focus:border-brand-amber focus:ring-1 focus:ring-brand-amber"
          />
        </div>

        <div>
          <label className="block text-[10px] text-slate-400 mb-1">
            {language === "pt" ? "Símbolo Monetário" : language === "es" ? "Moneda" : language === "cn" ? "结算货币设置" : language === "ar" ? "إعداد العملة" : "Currency Setting"}
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-1.5 bg-slate-950 border border-slate-800 rounded text-xs text-white focus:border-brand-amber"
          >
            <option value="£">£ (GBP)</option>
            <option value="$">$ (USD)</option>
            <option value="€">€ (EUR)</option>
          </select>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloadState === "generating"}
          className="w-full py-2 px-3 bg-brand-amber hover:bg-brand-amber-dark text-slate-950 text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-all shadow-md"
        >
          <FileText size={12} /> {language === "pt" ? "Gerar Relatório do Cliente" : language === "es" ? "Generar Informe de Cliente" : language === "cn" ? "一键生成 PDF 客户报告" : language === "ar" ? "إنشاء تقرير العميل" : "Generate Client Report"}
        </button>
      </div>

      {/* Right Column: Simulated Printable Document Proof */}
      <div className="flex-1 bg-white text-slate-800 rounded-xl p-4 shadow-xl text-left font-sans flex flex-col justify-between border border-slate-200">
        <div>
          <div className="flex justify-between items-start border-b border-slate-100 pb-2 mb-3">
            <div>
              <h4 className="font-bold text-sm text-brand-navy">{compName}</h4>
              <p className="text-[8px] text-slate-400">
                {language === "pt" ? "Relatórios Profissionais de Instalações e Zeladoria" : language === "es" ? "Informes Profesionales de Instalaciones y Conserjería" : language === "cn" ? "专业级现场后勤质检验收报告表" : language === "ar" ? "تقارير المرافق والخدمات المهنية" : "Professional Facilities & Janitorial reports"}
              </p>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded uppercase">
                {language === "pt" ? "APROVADO PELO CQ" : language === "es" ? "APROBADO POR CC" : language === "cn" ? "已通过质量检验" : language === "ar" ? "معتمد من الجودة" : "APPROVED BY QA"}
              </span>
              <p className="text-[8px] text-slate-400 mt-1">Ref: #INV-00892</p>
            </div>
          </div>

          <div className="space-y-1.5">
            <h5 className="font-semibold text-[10px] text-slate-700">
              {language === "pt" ? "Resumo Verificado de Operações de Limpeza" : language === "es" ? "Resumen Verificado de Operaciones de Limpieza" : language === "cn" ? "已通过线上核验的保洁综合作业报告" : language === "ar" ? "ملخص عمليات التنظيف التي تم التحقق منها" : "Verified Cleaning Operations Summary"}
            </h5>
            <div className="grid grid-cols-2 gap-2 text-[9px] bg-slate-50 p-2 rounded border border-slate-100 font-mono">
              <div>
                <span className="text-slate-400 block text-[7px] uppercase">
                  {language === "pt" ? "Endereço do imóvel" : language === "es" ? "Dirección de la propiedad" : language === "cn" ? "受托物业地址" : language === "ar" ? "عنوان العقار" : "Property address"}
                </span>
                <span className="text-slate-700 font-semibold truncate block">12 Abbey Gardens, NW8</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[7px] uppercase">
                  {language === "pt" ? "Valor do serviço" : language === "es" ? "Valor del servicio" : language === "cn" ? "本单作业金额" : language === "ar" ? "قيمة الخدمة" : "Service value"}
                </span>
                <span className="text-slate-700 font-semibold block">{currency}110.00</span>
              </div>
            </div>
          </div>

          {/* Checklist preview */}
          <div className="mt-3">
            <span className="text-[8px] uppercase text-slate-400 block font-semibold mb-1">
              {language === "pt" ? "Assinatura do Checklist" : language === "es" ? "Firma de la Lista" : language === "cn" ? "清洁任务明细清单与签字盖章" : language === "ar" ? "التوقيع على قائمة المهام" : "Checklist Sign-off"}
            </span>
            <div className="grid grid-cols-2 gap-1 text-[8px] text-slate-600">
              <div className="flex items-center gap-1">
                <span className="text-emerald-600">✓</span>{" "}
                {language === "pt" ? "Higienização da cozinha" : language === "es" ? "Desinfección de la cocina" : language === "cn" ? "厨房高标准去油污及消毒" : language === "ar" ? "تعقيم المطبخ" : "Kitchen sanitization"}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-600">✓</span>{" "}
                {language === "pt" ? "Banheiro desinfetado" : language === "es" ? "Baño desinfectado" : language === "cn" ? "洗手间死角消毒杀菌" : language === "ar" ? "تطهير دورة المياه" : "Restroom disinfected"}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-600">✓</span>{" "}
                {language === "pt" ? "Lixo esvaziado" : language === "es" ? "Basura vaciada" : language === "cn" ? "生活垃圾清空及塑料袋更换" : language === "ar" ? "إفراغ النفايات" : "Trash emptied"}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-600">✓</span>{" "}
                {language === "pt" ? "Aprovado na inspeção" : language === "es" ? "Pasó inspección de polvo" : language === "cn" ? "全屋积灰目测检查合格" : language === "ar" ? "اجتياز فحص الغبار" : "Dust inspection passed"}
              </div>
            </div>
          </div>
        </div>

        {/* Footer simulation */}
        <div className="border-t border-slate-100 pt-2 mt-4 flex justify-between items-center text-[7px] text-slate-400">
          <span>{language === "pt" ? "Relatório gerado pelo TidyFlow" : language === "es" ? "Informe generado por TidyFlow" : language === "cn" ? "本报告由 TidyFlow 自动化系统云端生成导出" : language === "ar" ? "تم إنشاء التقرير بواسطة برنامج TidyFlow" : "Report Generated by TidyFlow Software"}</span>
          {downloadState === "generating" && <span className="text-brand-amber font-mono">{language === "pt" ? "Compilando dados..." : language === "es" ? "Compilando datos..." : language === "cn" ? "正在动态渲染 PDF 数据..." : language === "ar" ? "جاري تجميع بيانات التقرير..." : "Compiling report data..."}</span>}
          {downloadState === "finished" && <span className="text-emerald-600 font-semibold">{language === "pt" ? "✓ Pronto para Exportar" : language === "es" ? "✓ Listo para Exportar" : language === "cn" ? "✓ PDF 导出就绪" : language === "ar" ? "✓ جاهز للتصدير" : "✓ Ready to Export"}</span>}
          {downloadState === "idle" && <span>{language === "pt" ? "Status: Ocioso" : language === "es" ? "Estado: Inactivo" : language === "cn" ? "状态：就绪待命" : language === "ar" ? "الحالة: خامل" : "Status: Idle"}</span>}
        </div>
      </div>
    </div>
  );
}

// 6. SOS EMERGENCY SAFETY MOCKUP
function SosMockup({ language = "en" }: { language?: string }) {
  const [sosActive, setSosActive] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getSosEvents = () => {
    if (language === "pt") {
      return [
        "Posição GPS fixada: Latitude 51.5074, Longitude -0.1278",
        "Gerente de Operações (Mark) alertado via notificação push urgente",
        "Retorno de chamada de emergência solicitado para o telefone do limpador",
        "Incidente registrado de forma segura no servidor corporativo"
      ];
    }
    if (language === "es") {
      return [
        "Posición GPS fijada: Latitud 51.5074, Longitud -0.1278",
        "Gerente de Operaciones (Mark) alertado por notificación push urgente",
        "Llamada de retorno de emergencia solicitada al teléfono del limpiador",
        "Incidente registrado de forma segura en el servidor de la empresa"
      ];
    }
    if (language === "cn") {
      return [
        "🛰️ GPS 定位已成功锁定：纬度 51.5074, 经度 -0.1278",
        "📣 区域运营主管 (Mark) 的所有移动设备上已强行弹出加急警报",
        "📞 自动安保呼叫已经启动，正在连续拨打保洁员的电话",
        "💾 呼救与派遣事件已被安全审计并存入企业合规数据库"
      ];
    }
    if (language === "ar") {
      return [
        "تم قفل موقع GPS: خط العرض 51.5074، خط الطول -0.1278",
        "تم تنبيه مدير العمليات (مارك) عبر إشعار دفع عاجل",
        "تم طلب إعادة الاتصال في حالات الطوارئ بخط هاتف عامل النظافة",
        "تم تسجيل حادث الإرسال بشكل آمن على خادم الشركة"
      ];
    }
    return [
      "GPS Position locked: Latitude 51.5074, Longitude -0.1278",
      "Operations Manager (Mark) alerted via urgent push notify",
      "Emergency callback requested to cleaner phone line",
      "Dispatch incident logged securely on company server"
    ];
  };

  const triggerSos = () => {
    if (sosActive) {
      setSosActive(false);
      setLogs([]);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    setSosActive(true);
    
    let firstLog = "SOS Emergency trigger received from cleaner app!";
    if (language === "pt") firstLog = "Alerta de emergência SOS recebido do aplicativo de limpeza!";
    if (language === "es") firstLog = "¡Alerta de emergencia SOS recibida desde la aplicación!";
    if (language === "cn") firstLog = "🔔 警告：接收到来自外勤保洁端 APP 的一键 SOS 红色紧急呼救请求！";
    if (language === "ar") firstLog = "تم استلام تشغيل طوارئ SOS من تطبيق عامل النظافة!";

    setLogs([firstLog]);

    const events = getSosEvents();

    let step = 0;
    intervalRef.current = setInterval(() => {
      if (step < events.length) {
        setLogs((prev) => [...prev, events[step]]);
        step++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-5 items-center w-full">
      {/* Left Column: SOS Trigger device */}
      <div className="w-full md:w-52 shrink-0 bg-slate-950 rounded-2xl border border-slate-800 p-5 text-center relative overflow-hidden flex flex-col justify-between min-h-[220px]">
        {sosActive && (
          <div className="absolute inset-0 bg-red-950/20 animate-pulse border-2 border-red-500 rounded-2xl pointer-events-none" />
        )}

        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-slate-400 block font-semibold">
            {language === "pt" ? "EMERGÊNCIA NO APP" : language === "es" ? "EMERGENCIA EN LA APP" : language === "cn" ? "APP 内置 SOS 一键呼救" : language === "ar" ? "طوارئ في التطبيق" : "IN-APP EMERGENCY"}
          </span>
          <p className="text-[10px] text-slate-400 mt-1">
            {language === "pt" ? "Conexão de segurança de um toque" : language === "es" ? "Conexión de seguridad de un toque" : language === "cn" ? "单次点击即可与总机建立联系" : language === "ar" ? "اتصال أمان بنقرة واحدة" : "Single-tap safety connection"}
          </p>
        </div>

        {/* SOS Button */}
        <div className="my-4 flex justify-center">
          <button
            onClick={triggerSos}
            className={`w-20 h-20 rounded-full font-bold flex flex-col items-center justify-center transition-all duration-300 relative ${
              sosActive
                ? "bg-red-500 text-white animate-bounce shadow-lg shadow-red-500/50"
                : "bg-gradient-to-br from-red-600 to-rose-800 hover:from-red-500 text-slate-100 shadow-md shadow-red-900/40 hover:scale-105"
            }`}
          >
            <ShieldAlert size={28} />
            <span className="text-[11px] font-extrabold uppercase mt-0.5 tracking-wider">
              {sosActive ? (language === "cn" ? "已激活" : "ACTIVE") : "SOS"}
            </span>
          </button>
        </div>

        <span className="text-[9px] text-slate-500 italic leading-normal">
          {sosActive 
            ? (language === "pt" ? "Toque para desarmar" : language === "es" ? "Toque para desactivar" : language === "cn" ? "再次点击解除红色警报" : language === "ar" ? "انقر لإلغاء التنشيط" : "Tap again to disarm alarm") 
            : (language === "pt" ? "Pressione em caso de emergência" : language === "es" ? "Presione en caso de emergencia" : language === "cn" ? "在发生突发人身或财物险情时按此键" : language === "ar" ? "اضغط في حالة حدوث مشكلة فورية" : "Press in event of immediate site issue")}
        </span>
      </div>

      {/* Right Column: Security Operations Center Dispatch Log */}
      <div className="flex-1 space-y-4 text-left">
        <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
          <ShieldAlert className="text-red-500" size={20} /> {language === "pt" ? "Despacho de Segurança SOS" : language === "es" ? "Despacho de Seguridad SOS de Limpieza" : language === "cn" ? "TidyFlow 外勤安防紧急调度中心" : language === "ar" ? "إرسال سلامة عامل النظافة SOS" : "Cleaner SOS Safety Dispatch"}
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          {language === "pt" ? "A segurança do trabalhador é primordial. Quando o pessoal de campo aciona o SOS, o alerta georreferenciado é enviado na hora aos gerentes." : language === "es" ? "La seguridad del trabajador es primordial. Cuando el personal de campo activa el SOS, el incidente se envía de inmediato a todos los gerentes." : language === "cn" ? "外勤工作人员的生命财产安全至上。当外勤保洁员触发 SOS 按钮，系统会自动携带高精度的地理定位信息，立即向所有运营经理推送最高等级的警报消息。" : language === "ar" ? "سلامة العمال هي الأهم. عندما يضغط عامل على زر SOS، يتم إرسال تنبيه فوري بالموقع لمديري العمليات." : "Worker safety is paramount. When a field worker hits the SOS button in low signal environments, the incident queues with geolocation information and pushes alerts immediately to all operations managers."}
        </p>

        {/* Dispatch timeline */}
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80">
          <span className="text-[9px] uppercase font-mono text-slate-400 tracking-wider font-semibold block mb-2">
            {language === "pt" ? "Log de Despacho em Tempo Real" : language === "es" ? "Registro de Despacho en Tiempo Real" : language === "cn" ? "实时安防调度与一键呼救响应流水日志" : language === "ar" ? "سجل إرسال السلامة في الوقت الفعلي" : "Real-Time Safety Dispatch Log"}
          </span>

          {!sosActive ? (
            <div className="text-xs text-slate-500 italic py-4 text-center">
              {language === "pt" ? "Toque no botão SOS para ver os logs" : language === "es" ? "Presione el botón SOS para ver los registros" : language === "cn" ? "请点击左侧红色 SOS 按钮触发安防呼救日志" : language === "ar" ? "انقر فوق زر SOS الأحمر لتشغيل السجلات" : "Tap the red SOS button to trigger safety logs"}
            </div>
          ) : (
            <div className="space-y-1.5 max-h-24 overflow-y-auto font-mono text-[10px] text-slate-300">
              {logs.map((log, index) => (
                <div key={index} className="flex gap-2 items-start leading-relaxed animate-fade-in">
                  <span className="text-red-500">▶</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
