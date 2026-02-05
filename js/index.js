const PASSWORD = "1002";
const BIRTHDAY = new Date(2026, 2, 10, 0, 0);

const lock = document.getElementById("lock");
const countdown = document.getElementById("countdown");
const timerEl = document.getElementById("timer");
const lockMsg = document.getElementById("lockMsg");

document.getElementById("unlockBtn").onclick = () => {
  if (document.getElementById("password").value === PASSWORD) {
    lock.classList.add("hidden");
    checkCountdown();
  } else {
    lockMsg.textContent = "Kode salah.";
  }
};

function checkCountdown(){
  const now = new Date();
  if (now < BIRTHDAY) {
    countdown.classList.remove("hidden");
    tick();
  } else {
    window.location.href = "gift.html";
  }
}

function tick(){
  const diff = BIRTHDAY - new Date();
  if (diff <= 0){
    window.location.href = "gift.html";
    return;
  }
  const d = Math.floor(diff/86400000);
  const h = Math.floor(diff/3600000)%24;
  const m = Math.floor(diff/60000)%60;
  const s = Math.floor(diff/1000)%60;
  timerEl.textContent = `${d}h ${h}j ${m}m ${s}d`;
  setTimeout(tick,1000);
}
