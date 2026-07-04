import React, { useState, useRef, useEffect } from "react";
import { Sparkles, X, MessageSquare, Send, Book } from "lucide-react";
import { portalTranslations } from "../utils/docTranslations";
import { getDocSuggestQuestion } from "../utils/docTableTranslations";
import { getTidyBotOfflineReply } from "../utils/tidyBotKnowledge";
import BotMessageContent from "./BotMessageContent";

export interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  time: string;
  chapterLink?: string;
}

interface TidyBotWidgetProps {
  language: string;
  /** e.g. "marketing:home", "marketing:pricing", "documentation" */
  pageContext?: string;
  onChapterLink?: (chapterId: string) => void;
}

export default function TidyBotWidget({ language, pageContext, onChapterLink }: TidyBotWidgetProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const t = (key: keyof (typeof portalTranslations)["en"]) =>
    portalTranslations[language]?.[key] || portalTranslations.en[key];

  useEffect(() => {
    setChatMessages([
      {
        sender: "bot",
        text: t("botGreeting"),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  }, [language]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, chatOpen, isBotTyping]);

  // Lock page scroll while chat is open on small screens
  useEffect(() => {
    if (!chatOpen) return;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (!isMobile) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [chatOpen]);

  // Focus input when panel opens (desktop only — mobile keyboard can cover UI)
  useEffect(() => {
    if (!chatOpen) return;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) return;
    const id = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => window.clearTimeout(id);
  }, [chatOpen]);

  const handleSendChatMessage = (textToSend?: string) => {
    const queryText = textToSend || chatInput;
    if (!queryText.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const currentHistory = [...chatMessages];

    setChatMessages((prev) => [...prev, { sender: "user", text: queryText, time: timestamp }]);
    if (!textToSend) setChatInput("");

    const offlineReply = getTidyBotOfflineReply(queryText, language);
    if (offlineReply) {
      setIsBotTyping(true);
      window.setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          { sender: "bot", text: offlineReply, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
        ]);
        setIsBotTyping(false);
      }, 350);
      return;
    }

    setIsBotTyping(true);

    fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: queryText,
        history: currentHistory.slice(-10),
        language,
        pageContext: pageContext || "website"
      })
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.error || "Failed to contact TidyBot.");
          });
        }
        return res.json();
      })
      .then((data) => {
        setChatMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: data.answer,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            chapterLink: data.chapterLink || undefined
          }
        ]);
      })
      .catch((err) => {
        const offlineFallback = getTidyBotOfflineReply(queryText, language);
        if (offlineFallback) {
          setChatMessages((prev) => [
            ...prev,
            { sender: "bot", text: offlineFallback, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
          ]);
          return;
        }
        const errorMsg = t("botConnectionError").replace("{error}", err.message);
        setChatMessages((prev) => [
          ...prev,
          { sender: "bot", text: errorMsg, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }
        ]);
      })
      .finally(() => setIsBotTyping(false));
  };

  return (
    <div
      className={`fixed z-[60] pointer-events-none ${
        chatOpen
          ? "inset-0 sm:inset-auto sm:bottom-6 sm:end-6 sm:top-auto sm:start-auto flex flex-col"
          : "bottom-[max(1rem,env(safe-area-inset-bottom))] end-[max(1rem,env(safe-area-inset-right))] flex flex-col items-end"
      }`}
    >
      {/* Mobile backdrop */}
      {chatOpen && (
        <button
          type="button"
          aria-label="Close chat"
          onClick={() => setChatOpen(false)}
          className="pointer-events-auto absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] sm:hidden"
        />
      )}

      <div
        className={`pointer-events-auto flex flex-col ${
          chatOpen
            ? "relative h-full w-full sm:h-auto sm:w-auto sm:items-end sm:ms-auto sm:me-0"
            : "items-end"
        }`}
      >
        {chatOpen && (
          <div
            className="
              flex flex-col overflow-hidden bg-slate-950 border-slate-800 shadow-2xl
              w-full h-full max-h-[100dvh] rounded-none border-0
              sm:w-[390px] sm:h-[min(560px,calc(100dvh-5.5rem))] sm:max-h-[calc(100dvh-5.5rem)]
              sm:rounded-2xl sm:border sm:mb-4
              transition-all duration-300
            "
            role="dialog"
            aria-modal="true"
            aria-label={t("botName")}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-navy-light to-slate-900 px-4 py-3.5 sm:p-4 border-b border-slate-800/80 flex justify-between items-center shrink-0 pt-[max(0.875rem,env(safe-area-inset-top))]">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-brand-amber/15 border border-brand-amber/20 flex items-center justify-center text-brand-amber shrink-0">
                  <Sparkles size={16} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-sm sm:text-xs text-white leading-tight truncate">
                    {t("botName")}
                  </h4>
                  <span className="text-[10px] sm:text-[9px] text-slate-400 font-mono truncate block">
                    {t("botSubtitle")}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="p-2.5 sm:p-1 -me-1 text-slate-400 hover:text-white rounded-xl hover:bg-slate-900 cursor-pointer transition-colors shrink-0"
                aria-label="Close chat"
              >
                <X size={18} className="sm:w-[15px] sm:h-[15px]" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-4 space-y-4 bg-slate-950 min-h-0">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col max-w-[92%] sm:max-w-[85%] ${
                    msg.sender === "user" ? "ms-auto items-end" : "me-auto items-start"
                  }`}
                >
                  <div
                    className={`p-3 sm:p-3 rounded-2xl text-sm sm:text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-brand-amber text-slate-950 rounded-tr-none font-medium shadow"
                        : "bg-slate-900 text-slate-200 rounded-tl-none border border-slate-850"
                    }`}
                  >
                    <BotMessageContent text={msg.text} variant={msg.sender} />
                    {msg.chapterLink && onChapterLink && (
                      <button
                        type="button"
                        onClick={() => onChapterLink(msg.chapterLink!)}
                        className="mt-2.5 w-full py-2 sm:py-1.5 px-2.5 bg-brand-amber/15 border border-brand-amber/20 hover:bg-brand-amber text-brand-amber hover:text-slate-950 font-bold text-[11px] sm:text-[10px] rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Book size={12} /> {t("openRefChapter")}
                      </button>
                    )}
                  </div>
                  <span className="text-[9px] sm:text-[8px] text-slate-500 font-mono mt-1 px-1">{msg.time}</span>
                </div>
              ))}

              {isBotTyping && (
                <div className="flex flex-col items-start max-w-[92%] sm:max-w-[85%]">
                  <div className="p-3 bg-slate-900 text-slate-400 rounded-2xl rounded-tl-none border border-slate-850 flex items-center gap-2">
                    <span className="text-sm sm:text-xs">{t("botSearching")}</span>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-brand-amber rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-brand-amber rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 bg-brand-amber rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestion chips */}
            <div className="px-3 sm:px-4 py-2 border-t border-slate-900 bg-slate-950 flex gap-2 overflow-x-auto shrink-0 scrollbar-none [-webkit-overflow-scrolling:touch]">
              {(
                [
                  ["sheets", t("suggestSheets")],
                  ["offline", t("suggestOffline")],
                  ["about", t("suggestAbout")],
                  ["pricing", t("suggestPricing")],
                  ["demo", t("suggestDemo")]
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSendChatMessage(getDocSuggestQuestion(key, language))}
                  className="shrink-0 py-2 sm:py-1 px-3 sm:px-2 bg-slate-900 hover:bg-slate-850 active:bg-slate-850 border border-slate-850 text-slate-300 hover:text-brand-amber text-[11px] sm:text-[10px] rounded-lg transition-all cursor-pointer"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendChatMessage();
              }}
              className="p-3 sm:p-3 bg-slate-900/60 border-t border-slate-900/80 flex gap-2 shrink-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
            >
              <input
                ref={inputRef}
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={t("askPlaceholder")}
                enterKeyHint="send"
                autoComplete="off"
                className="flex-1 min-w-0 bg-slate-950 border border-slate-800 text-base sm:text-xs text-white rounded-xl px-3.5 py-3 sm:py-2.5 focus:outline-none focus:border-brand-amber placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={!chatInput.trim() || isBotTyping}
                className="p-3 sm:p-2.5 bg-brand-amber hover:bg-brand-amber-dark disabled:bg-slate-800 disabled:text-slate-600 text-slate-950 rounded-xl transition-all cursor-pointer shrink-0 flex items-center justify-center shadow active:scale-95"
                aria-label="Send message"
              >
                <Send size={16} className="sm:w-[13px] sm:h-[13px]" />
              </button>
            </form>
          </div>
        )}

        {/* Floating action button — hidden on mobile while chat is open (header close is enough) */}
        <button
          type="button"
          onClick={() => setChatOpen(!chatOpen)}
          className={`
            w-14 h-14 sm:w-14 sm:h-14 bg-gradient-to-r from-brand-amber to-amber-500
            hover:from-amber-400 hover:to-brand-amber text-slate-950 rounded-full shadow-2xl
            flex items-center justify-center transition-all duration-300 transform
            hover:scale-105 active:scale-95 cursor-pointer relative group
            ${chatOpen ? "hidden sm:flex" : "flex"}
          `}
          title="Open TidyBot assistant"
          aria-label={chatOpen ? "Close TidyBot assistant" : "Open TidyBot assistant"}
          aria-expanded={chatOpen}
        >
          {!chatOpen && (
            <span className="absolute inset-0 rounded-full bg-brand-amber/25 animate-ping group-hover:hidden" />
          )}
          {chatOpen ? <X size={22} /> : <MessageSquare size={22} />}
        </button>
      </div>
    </div>
  );
}
