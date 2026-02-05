console.log("FINAL JS MASUK");

/* ===== MUSIC (HARUS TAP) ===== */
const music = document.getElementById("bgMusic");
document.body.addEventListener(
  "click",
  () => {
    music.play();
  },
  { once: true }
);

/* ===== QR CODE ===== */
const qrCanvas = document.getElementById("qr");

QRCode.toCanvas(
  qrCanvas,
  window.location.origin + "/Forfavperson/",
  {
    width: 140,
    margin: 1,
    color: {
      dark: "#000000",
      light: "#ffffff"
    }
  }
);

/* ===== CONFETTI ===== */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dots = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 3 + 2,
  d: Math.random() * 2 + 1
}));

(function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,182,193,0.8)";
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animate);
})();
