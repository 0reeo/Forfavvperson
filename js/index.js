const PASSWORD = "1002";

const lock = document.getElementById("lock");
const countdown = document.getElementById("countdown");
const timerEl = document.getElementById("timer");
const lockMsg = document.getElementById("lockMsg");

document.getElementById("unlockBtn").onclick = () => {
  const val = document.getElementById("password").value;
  if (val === PASSWORD) {
    lock.classList.add("hidden");
    countdown.classList.remove("hidden");
    timerEl.textContent = "Berhasil dibuka 🤍";
  } else {
    lockMsg.textContent = "Kode salah";
  }
};
