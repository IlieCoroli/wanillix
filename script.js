// ===== Wanillix config =====
const CONFIG = {
  serverAddress: "65.21.9.222:25842",
  discordInvite: "https://discord.gg/dtgyTaDq",
  officialDownload: "https://www.minecraft.net/en-us/download",
  legacyDownload: "https://legacy-launcher.org/",
};

// Donation conversion rules:
// 1 ₽ = 1 ар
// 10 💎 = 1 ар
const DONATE_RULES = {
  rubToAr: 1,
  diamondsPerAr: 10,
};

const $ = (id) => document.getElementById(id);

const I18N = {
  ru: {
    tagline: "Minecraft Server • Java 1.21.8",
    navJoin: "Как зайти",
    navDownload: "Скачать",
    navDonate: "Донат",
    navRules: "Правила",
    navDiscord: "Discord",

    badgeText: "Survival • Комьюнити • Ивенты",
    lead: "Уютный выживач с настоящим Minecraft вайбом. Строй, торгуй и играй с дружным комьюнити.",

    serverAddressLabel: "IP сервера",
    copyIpBtn: "Скопировать IP",
    liveStatusLabel: "Статус",
    checking: "Проверяем…",
    howToJoinBtn: "Как зайти",
    downloadBtn: "Скачать",
    donateBtn: "Донат",
    versionText: "Версия:",
    ipText: "IP:",

    todayTitle: "Сундук плюшек",
    p1: "✅ Дружное комьюнити",
    p2: "✅ Ивенты и челленджи",
    p3: "✅ Vanilla + QoL",
    p4: "✅ Активный Discord",
    footerNote: "Увидимся на сервере.",

    joinTitle: "Как зайти",
    joinStepsTitle: "Шаги",
    step1: "Открой <b>Minecraft Java Edition</b>",
    step2: "Зайди в <b>Multiplayer</b> → <b>Add Server</b>",
    step3a: "Server Address:",
    step4: "Зайди и напиши привет 👋",
    versionReminder: "Убедись, что у тебя версия <b>1.21.8</b>.",

    quickTipsTitle: "Быстрые советы",
    tip1: "Если не пускает — проверь версию Minecraft.",
    tip2: "Если всё равно не работает — напиши в Discord (поможем быстро).",
    tip3: "Жми Copy IP, чтобы не ошибиться.",

    downloadTitle: "Скачать Minecraft",
    downloadText: "Выбери способ установки. Официальный вариант рекомендуется.",
    officialTitle: "Официальный лаунчер (Рекомендуется)",
    officialDesc: "Безопасная официальная загрузка с Minecraft.net.",
    officialBtn: "Открыть официальный сайт",
    legacyTitle: "Legacy Launcher",
    legacyDesc: "Альтернативный лаунчер (не официальный). Используй на свой риск.",
    legacyBtn: "Открыть Legacy Launcher",
    serverInfoTitle: "Информация",
    serverInfoDesc: "Версия сервера: Java 1.21.8",
    ipLabel: "IP:",
    noteTitle: "Заметка",
    noteText: "Если Windows показывает предупреждение для сторонних лаунчеров — устанавливай только то, чему доверяешь.",

    donateTitle: "Донат",
    donateTextNick: "Введи ник в Minecraft, выбери пакет, скопируй заявку и отправь в Discord.",
    rate1: "1 ₽ = 1 ар (алмазная руда)",
    rate2: "10 💎 (алмаз) = 1 ар",
    youGet: "Ты получаешь:",
    diamonds: "Алмазы:",
    nickLabel: "Ник в Minecraft",
    openDiscord: "Открыть Discord",
    chooseBtn: "Выбрать",
    howItWorksTitle: "Как это работает",
    howItWorksText: "Выбираешь пакет → копируешь сообщение → отправляешь в Discord. Стафф выдаёт донат на этот ник.",

    modalTitleNick: "Заявка на донат",
    modalNick: "Ник",
    modalTier: "Пакет",
    modalPrice: "Цена",
    modalAr: "АР",
    modalDiamonds: "💎",
    copyMsgTitle: "Сообщение для Discord",
    copyMsgBtn: "Скопировать сообщение",
    closeBtn: "Закрыть",

    nickEmpty: "Введи ник (3–16 символов).",
    nickBad: "Ник должен быть 3–16 символов: A-Z 0-9 _",
    nickOk: "Ок ✅ можно выбирать пакет",
    copied: "Скопировано!",
    copyFail: "Не получилось скопировать. Скопируй вручную.",

    online: "Онлайн",
    offline: "Оффлайн",
    unavailable: "Недоступно"
  },

  ua: {
    tagline: "Minecraft Server • Java 1.21.8",
    navJoin: "Як зайти",
    navDownload: "Завантажити",
    navDonate: "Донат",
    navRules: "Правила",
    navDiscord: "Discord",

    badgeText: "Survival • Спільнота • Івенти",
    lead: "Затишне виживання з справжнім Minecraft вайбом. Будуй, торгуй та грай з дружньою спільнотою.",

    serverAddressLabel: "IP сервера",
    copyIpBtn: "Скопіювати IP",
    liveStatusLabel: "Статус",
    checking: "Перевіряємо…",
    howToJoinBtn: "Як зайти",
    downloadBtn: "Завантажити",
    donateBtn: "Донат",
    versionText: "Версія:",
    ipText: "IP:",

    todayTitle: "Скриня плюшок",
    p1: "✅ Дружня спільнота",
    p2: "✅ Івенти та челенджі",
    p3: "✅ Vanilla + QoL",
    p4: "✅ Активний Discord",
    footerNote: "Побачимось у грі.",

    joinTitle: "Як зайти",
    joinStepsTitle: "Кроки",
    step1: "Відкрий <b>Minecraft Java Edition</b>",
    step2: "Зайди в <b>Multiplayer</b> → <b>Add Server</b>",
    step3a: "Server Address:",
    step4: "Зайди та напиши привіт 👋",
    versionReminder: "Переконайся, що у тебе версія <b>1.21.8</b>.",

    quickTipsTitle: "Швидкі поради",
    tip1: "Не заходить — перевір версію Minecraft.",
    tip2: "Якщо не працює — напиши в Discord (допоможемо швидко).",
    tip3: "Натисни Copy IP, щоб не помилитись.",

    downloadTitle: "Завантажити Minecraft",
    downloadText: "Обери спосіб встановлення. Офіційний варіант рекомендований.",
    officialTitle: "Офіційний лаунчер (Рекомендується)",
    officialDesc: "Безпечне офіційне завантаження з Minecraft.net.",
    officialBtn: "Відкрити офіційний сайт",
    legacyTitle: "Legacy Launcher",
    legacyDesc: "Альтернативний лаунчер (не офіційний). Використовуй на свій ризик.",
    legacyBtn: "Відкрити Legacy Launcher",
    serverInfoTitle: "Інформація",
    serverInfoDesc: "Версія сервера: Java 1.21.8",
    ipLabel: "IP:",
    noteTitle: "Нотатка",
    noteText: "Якщо Windows показує попередження для сторонніх лаунчерів — встановлюй лише те, чому довіряєш.",

    donateTitle: "Донат",
    donateTextNick: "Введи нік в Minecraft, обери пакет, скопіюй заявку та надішли в Discord.",
    rate1: "1 ₽ = 1 ар (алмазна руда)",
    rate2: "10 💎 (алмаз) = 1 ар",
    youGet: "Ти отримуєш:",
    diamonds: "Алмази:",
    nickLabel: "Нік в Minecraft",
    openDiscord: "Відкрити Discord",
    chooseBtn: "Обрати",
    howItWorksTitle: "Як це працює",
    howItWorksText: "Обираєш пакет → копіюєш повідомлення → надсилаєш в Discord. Стафф видає донат на цей нік.",

    modalTitleNick: "Заявка на донат",
    modalNick: "Нік",
    modalTier: "Пакет",
    modalPrice: "Ціна",
    modalAr: "АР",
    modalDiamonds: "💎",
    copyMsgTitle: "Повідомлення для Discord",
    copyMsgBtn: "Скопіювати повідомлення",
    closeBtn: "Закрити",

    nickEmpty: "Введи нік (3–16 символів).",
    nickBad: "Нік має бути 3–16 символів: A-Z 0-9 _",
    nickOk: "Ок ✅ можна обирати пакет",
    copied: "Скопійовано!",
    copyFail: "Не вдалося скопіювати. Скопіюй вручну.",

    online: "Онлайн",
    offline: "Оффлайн",
    unavailable: "Недоступно"
  }
};

let currentLang = "ru";
let currentNick = "";

function rubToAr(rub) {
  return Math.floor(Number(rub) * DONATE_RULES.rubToAr);
}
function arToDiamonds(ar) {
  return Math.floor(Number(ar) * DONATE_RULES.diamondsPerAr);
}

function setActiveLangButtons() {
  const ru = $("langRU");
  const ua = $("langUA");
  if (ru) ru.classList.toggle("isActive", currentLang === "ru");
  if (ua) ua.classList.toggle("isActive", currentLang === "ua");
}

function applyI18n() {
  const dict = I18N[currentLang];
  document.documentElement.lang = currentLang === "ua" ? "uk" : "ru";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!dict[key]) return;
    el.innerHTML = dict[key];
  });

  setActiveLangButtons();
  validateNick(); // refresh hints in current language
}

function pickDefaultLang() {
  const saved = localStorage.getItem("wanillix_lang");
  if (saved === "ru" || saved === "ua") return saved;

  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("uk") || nav.includes("ua")) return "ua";
  return "ru";
}

function setLinksAndIP() {
  if ($("serverAddress")) $("serverAddress").textContent = CONFIG.serverAddress;
  if ($("serverAddress2")) $("serverAddress2").textContent = CONFIG.serverAddress;

  if ($("discordLink")) $("discordLink").href = CONFIG.discordInvite;
  if ($("discordDonateBtn")) $("discordDonateBtn").href = CONFIG.discordInvite;
  if ($("openDiscordBtn")) $("openDiscordBtn").href = CONFIG.discordInvite;

  if ($("officialLink")) $("officialLink").href = CONFIG.officialDownload;
  if ($("legacyLink")) $("legacyLink").href = CONFIG.legacyDownload;
}

async function copyIP() {
  const dict = I18N[currentLang];
  const hint = $("copyHint");
  try {
    await navigator.clipboard.writeText(CONFIG.serverAddress);
    if (hint) hint.textContent = dict.copied;
  } catch {
    if (hint) hint.textContent = dict.copyFail;
  }
  setTimeout(() => { if (hint) hint.textContent = ""; }, 1600);
}

function setStatus(online, text, playersText) {
  if ($("statusText")) $("statusText").textContent = text;
  if ($("playersText")) $("playersText").textContent = playersText || "—";

  const dot = $("statusDot");
  if (dot) {
    dot.style.background = online ? "var(--ok)" : "var(--bad)";
    dot.style.boxShadow = online
      ? "0 0 0 4px rgba(52,211,153,.12)"
      : "0 0 0 4px rgba(251,113,133,.12)";
  }
}

async function fetchStatus() {
  const dict = I18N[currentLang];
  const url = `https://api.mcsrvstat.us/2/${encodeURIComponent(CONFIG.serverAddress)}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();

    if (!data || data.online !== true) {
      setStatus(false, dict.offline, "No response / offline");
      return;
    }

    const onlinePlayers = data.players?.online ?? 0;
    const maxPlayers = data.players?.max ?? "?";
    const version = data.version ?? "Unknown";

    setStatus(true, dict.online, `${onlinePlayers}/${maxPlayers} players • ${version}`);
  } catch {
    setStatus(false, dict.unavailable, "Status API error");
  }
}

function refreshDonateCards() {
  document.querySelectorAll("button[data-rub][data-tier]").forEach((btn) => {
    const rub = Number(btn.dataset.rub || 0);
    const ar = rubToAr(rub);
    const diamonds = arToDiamonds(ar);

    const card = btn.closest(".tier");
    if (!card) return;

    const priceLabel = card.querySelector("[data-price-label]");
    const arsEl = card.querySelector("[data-ars]");
    const coinsEl = card.querySelector("[data-coins]");

    if (priceLabel) priceLabel.textContent = String(rub);
    if (arsEl) arsEl.textContent = String(ar);
    if (coinsEl) coinsEl.textContent = String(diamonds);
  });
}

function isValidNick(nick) {
  // Minecraft nickname rules (simple): 3-16 chars, letters/numbers/underscore
  return /^[A-Za-z0-9_]{3,16}$/.test(nick);
}

function setDonateButtonsEnabled(enabled) {
  document.querySelectorAll("button[data-rub][data-tier]").forEach((btn) => {
    btn.disabled = !enabled;
  });
}

function validateNick() {
  const dict = I18N[currentLang];
  const input = $("nickInput");
  const hint = $("nickHint");
  if (!input || !hint) return false;

  const nick = (input.value || "").trim();
  currentNick = nick;

  hint.classList.remove("ok", "bad");

  if (!nick) {
    hint.textContent = dict.nickEmpty;
    hint.classList.add("bad");
    setDonateButtonsEnabled(false);
    return false;
  }

  if (!isValidNick(nick)) {
    hint.textContent = dict.nickBad;
    hint.classList.add("bad");
    setDonateButtonsEnabled(false);
    return false;
  }

  hint.textContent = dict.nickOk;
  hint.classList.add("ok");
  setDonateButtonsEnabled(true);
  return true;
}

/* Modal */
function openModal(tier, rub) {
  const modal = $("donateModal");
  if (!modal) return;

  if (!validateNick()) return;

  const nick = currentNick;
  const rubNum = Number(rub || 0);
  const ar = rubToAr(rubNum);
  const diamonds = arToDiamonds(ar);

  if ($("modalNickValue")) $("modalNickValue").textContent = nick;
  if ($("modalTierValue")) $("modalTierValue").textContent = tier || "—";
  if ($("modalPriceValue")) $("modalPriceValue").textContent = `₽${rubNum}`;
  if ($("modalArValue")) $("modalArValue").textContent = `${ar} ар`;
  if ($("modalCoinsValue")) $("modalCoinsValue").textContent = `${diamonds} 💎`;

  const msg =
`WANILLIX DONATE
Nick: ${nick}
Pack: ${tier}
Price: ₽${rubNum}
You get: ${ar} ар / ${diamonds} 💎
Server: ${CONFIG.serverAddress}
Discord: ${CONFIG.discordInvite}`;

  const msgBox = $("modalMsg");
  if (msgBox) msgBox.textContent = msg;

  modal.classList.add("isOpen");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = $("donateModal");
  if (!modal) return;
  modal.classList.remove("isOpen");
  modal.setAttribute("aria-hidden", "true");
}

async function copyDonateMessage() {
  const dict = I18N[currentLang];
  const msgBox = $("modalMsg");
  const hint = $("copyMsgHint");
  if (!msgBox) return;

  try {
    await navigator.clipboard.writeText(msgBox.textContent || "");
    if (hint) hint.textContent = dict.copied;
  } catch {
    if (hint) hint.textContent = dict.copyFail;
  }
  setTimeout(() => { if (hint) hint.textContent = ""; }, 1600);
}

function bindDonateButtons() {
  const modal = $("donateModal");
  if (!modal) return;

  document.querySelectorAll('button[data-tier][data-rub]').forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.tier, btn.dataset.rub));
  });

  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.getAttribute && target.getAttribute("data-close") === "1") closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  const copyBtn = $("copyMsgBtn");
  if (copyBtn) copyBtn.addEventListener("click", copyDonateMessage);
}

function init() {
  currentLang = pickDefaultLang();
  applyI18n();
  setLinksAndIP();
  refreshDonateCards();

  const input = $("nickInput");
  if (input) {
    // Restore last nick
    const savedNick = localStorage.getItem("wanillix_nick");
    if (savedNick) input.value = savedNick;

    input.addEventListener("input", () => {
      validateNick();
      localStorage.setItem("wanillix_nick", (input.value || "").trim());
    });
  }

  // Disable donate buttons until nick valid
  setDonateButtonsEnabled(false);
  validateNick();

  const ruBtn = $("langRU");
  const uaBtn = $("langUA");
  if (ruBtn) ruBtn.addEventListener("click", () => {
    currentLang = "ru";
    localStorage.setItem("wanillix_lang", "ru");
    applyI18n();
    refreshDonateCards();
    fetchStatus();
  });
  if (uaBtn) uaBtn.addEventListener("click", () => {
    currentLang = "ua";
    localStorage.setItem("wanillix_lang", "ua");
    applyI18n();
    refreshDonateCards();
    fetchStatus();
  });

  const copyBtn = $("copyBtn");
  if (copyBtn) copyBtn.addEventListener("click", copyIP);

  const year = $("year");
  if (year) year.textContent = new Date().getFullYear();

  bindDonateButtons();

  fetchStatus();
  setInterval(fetchStatus, 30000);
}

init();
