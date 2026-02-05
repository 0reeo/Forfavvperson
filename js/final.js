// ===== QR =====
const qrCanvas = document.getElementById("qr");

QRCode.toCanvas(
  qrCanvas,
  "https://oreeo.github.io/Forfavperson/",
  {
    width: 140,
    margin: 1,
    color: {
      dark: "#000000",
      light: "#ffffff"
    }
  }
);

// ===== MUSIC =====
const music = document.getElementById("bgMusic");
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

// ===== CONFETTI =====
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for (let i = 0; i < 80; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 2,
    d: Math.random() * 2 + 1
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0,0,0,0.15)";

  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();

    c.y += c.d;
    if (c.y > canvas.height) {
      c.y = -5;
      c.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawConfetti);
}

drawConfetti();
