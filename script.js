// ====== Wanillix config (EDIT THESE) ======
const CONFIG = {
  serverAddress: "65.21.9.222:25842",
  discordInvite: "https://discord.gg/dtgyTaDq",
};

// mcsrvstat.us describes its JSON status API here. :contentReference[oaicite:1]{index=1}
// =========================================

const $ = (id) => document.getElementById(id);

function setServerAddressUI() {
  $("serverAddress").textContent = CONFIG.serverAddress;
  $("serverAddress2").textContent = CONFIG.serverAddress;
  $("discordLink").href = CONFIG.discordInvite;
}

async function copyIP() {
  try {
    await navigator.clipboard.writeText(CONFIG.serverAddress);
    $("copyHint").textContent = "Copied!";
  } catch {
    $("copyHint").textContent = "Couldn’t copy. Select and copy manually.";
  }
  setTimeout(() => ($("copyHint").textContent = ""), 1500);
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
  const url = `https://api.mcsrvstat.us/2/${encodeURIComponent(CONFIG.serverAddress)}`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();

    if (!data || data.online !== true) {
      setStatus(false, "Offline", "No response / offline");
      return;
    }

    const onlinePlayers = data.players?.online ?? 0;
    const maxPlayers = data.players?.max ?? "?";
    const version = data.version ?? "Unknown";

    setStatus(true, "Online", `${onlinePlayers}/${maxPlayers} players • ${version}`);
  } catch (e) {
    setStatus(false, "Unavailable", "Status API blocked / error");
  }
}

function init() {
  setServerAddressUI();
  $("copyBtn").addEventListener("click", copyIP);
  $("year").textContent = new Date().getFullYear();

  fetchStatus();
  setInterval(fetchStatus, 30000);
}

init();
