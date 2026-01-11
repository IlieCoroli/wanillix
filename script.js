// ===== Wanillix config =====
const CONFIG = {
  serverAddress: "65.21.9.222:25842",
  discordInvite: "https://discord.gg/dtgyTaDq",
  officialDownload: "https://www.minecraft.net/en-us/download",
  legacyDownload: "https://legacy-launcher.org/",
};
// Live status uses mcsrvstat.us JSON API: https://api.mcsrvstat.us/2/<serverAddress>
// ==========================

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
    donateText: "Это прототип страницы. Позже можно подключить PayPal/Boosty/Stripe или магазин.",
    tier1Name: "Supporter",
    tier1a: "❤ Спасибо в Discord",
    tier1b: "⭐ Роль донатера",
    tier1c: "📢 Ник на сайте",
    tier2Name: "VIP",
    tier2a: "⭐ VIP роль",
    tier2b: "🎁 Косметический бонус",
    tier2c: "🛠 Приоритетная помощь",
    tier3Name: "Legend",
    tier3a: "👑 Legend роль",
    tier3b: "🎉 Особая благодарность",
    tier3c: "✨ Косметический набор (прототип)",
    chooseBtn: "Выбрать",
    donateProtoTitle: "Прототип оплаты",
    donateProtoText: "Нажми “Выбрать” — откроется окно. Потом заменим на реальные платежи.",
    askDiscordBtn: "Спросить в Discord",

    rulesTitle: "Правила",
    r1: "Запрещён гриферинг / кражи",
    r2: "Запрещены читы / unfair клиенты",
    r3: "Уважай других (чат + постройки)",
    r4: "Запрещён спам / реклама",

    discordTitle: "Discord",
    discordText: "Заходи в Discord: помощь, новости, ивенты и поддержка.",
    discordBtn: "Зайти в Discord",

    modalTitle: "Донат (Прототип)",
    modalTier: "Пакет",
    modalPrice: "Цена",
    modalText: "Это заглушка. Потом заменим на реальные кнопки оплаты.",
    modalDiscordBtn: "Открыть Discord для доната",
    closeBtn: "Закрыть",
    fineprint: "Подсказка: позже добавь PayPal/Stripe/Boosty и замени кнопку на реальные ссылки.",
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
    donateText: "Це прототип сторінки. Пізніше можна підключити PayPal/Boosty/Stripe або магазин.",
    tier1Name: "Supporter",
    tier1a: "❤ Подяка в Discord",
    tier1b: "⭐ Роль донатера",
    tier1c: "📢 Нік на сайті",
    tier2Name: "VIP",
    tier2a: "⭐ VIP роль",
    tier2b: "🎁 Косметичний бонус",
    tier2c: "🛠 Пріоритетна допомога",
    tier3Name: "Legend",
    tier3a: "👑 Legend роль",
    tier3b: "🎉 Особлива подяка",
    tier3c: "✨ Косметичний набір (прототип)",
    chooseBtn: "Обрати",
    donateProtoTitle: "Прототип оплати",
    donateProtoText: "Натисни “Обрати” — відкриється вікно. Потім замінимо на реальні платежі.",
    askDiscordBtn: "Запитати в Discord",

    rulesTitle: "Правила",
    r1: "Заборонено гриферити / красти",
    r2: "Заборонено чіти / unfair клієнти",
    r3: "Поважай інших (чат + будівлі)",
    r4: "Заборонено спам / рекламу",

    discordTitle: "Discord",
    discordText: "Заходь у Discord: допомога, новини, івенти та підтримка.",
    discordBtn: "Зайти в Discord",

    modalTitle: "Донат (Прототип)",
    modalTier: "Пакет",
    modalPrice: "Ціна",
    modalText: "Це заглушка. Потім замінимо на реальні кнопки оплати.",
    modalDiscordBtn: "Відкрити Discord для донату",
    closeBtn: "Закрити",
    fineprint: "Порада: додай PayPal/Stripe/Boosty пізніше та заміни кнопку на реальні посилання.",
    copied: "Скопійовано!",
    copyFail: "Не вдалося скопіювати. Скопіюй вручну.",
    online: "Онлайн",
    offline: "Офлайн",
    unavailable: "Недоступно"
  }
};

let currentLang = "ru";

function setActiveLangButtons() {
  $("langRU").classList.toggle("isActive", currentLang === "ru");
  $("langUA").classList.toggle("isActive", currentLang === "ua");
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
}

function pickDefaultLang() {
  const saved = localStorage.getItem("wanillix_lang");
  if (saved === "ru" || saved === "ua") return saved;

  const nav = (navigator.language || "").toLowerCase();
  if (nav.startsWith("uk") || nav.includes("ua")) return "ua";
  return "ru";
}

function setLinksAndIP() {
  // IP visible
  $("serverAddress").textContent = CONFIG.serverAddress;
  $("serverAddress2").textContent = CONFIG.serverAddress;

  // Links
  $("discordLink").href = CONFIG.discordInvite;
  $("modalDiscordBtn").href = CONFIG.discordInvite;

  $("officialLink").href = CONFIG.officialDownload;
  $("legacyLink").href = CONFIG.legacyDownload;
}

async function copyIP() {
  const dict = I18N[currentLang];
  try {
    await navigator.clipboard.writeText(CONFIG.serverAddress);
    $("copyHint").textContent = dict.copied;
  } catch {
    $("copyHint").textContent = dict.copyFail;
  }
  setTimeout(() => ($("copyHint").textContent = ""), 1600);
}

function setStatus(online, text, playersText) {
  $("statusText").textContent = text;
  $("playersText").textContent = playersText || "—";
  const dot = $("statusDot");
  dot.style.background = online ? "var(--ok)" : "var(--bad)";
  dot.style.boxShadow = online
    ? "0 0 0 4px rgba(52,211,153,.12)"
    : "0 0 0 4px rgba(251,113,133,.12)";
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

/* Donate modal */
function openModal(tier, price) {
  $("modalTierValue").textContent = tier || "—";
  $("modalPriceValue").textContent = price || "—";
  $("donateModal").classList.add("isOpen");
  $("donateModal").setAttribute("aria-hidden", "false");
}

function closeModal() {
  $("donateModal").classList.remove("isOpen");
  $("donateModal").setAttribute("aria-hidden", "true");
}

function bindDonateButtons() {
  document.querySelectorAll('button[data-tier][data-price]').forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(btn.dataset.tier, btn.dataset.price);
    });
  });

  $("donateModal").addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.getAttribute && target.getAttribute("data-close") === "1") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function init() {
  currentLang = pickDefaultLang();
  applyI18n();
  setLinksAndIP();

  $("langRU").addEventListener("click", () => {
    currentLang = "ru";
    localStorage.setItem("wanillix_lang", "ru");
    applyI18n();
    fetchStatus();
  });

  $("langUA").addEventListener("click", () => {
    currentLang = "ua";
    localStorage.setItem("wanillix_lang", "ua");
    applyI18n();
    fetchStatus();
  });

  $("copyBtn").addEventListener("click", copyIP);
  $("year").textContent = new Date().getFullYear();

  bindDonateButtons();
  fetchStatus();
  setInterval(fetchStatus, 30000);
}

init();

