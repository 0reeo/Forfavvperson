/* MUSIC */
const music = document.getElementById("bgMusic");
window.addEventListener("click", () => music.play(), { once: true });

/* QR */
const finalLink = window.location.href;
QRCode.toCanvas(
  document.getElementById("qr"),
  finalLink,
  { width: 160 }
);

/* CONFETTI */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const dots = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 3 + 2,
  d: Math.random() * 2 + 1
}));

(function confetti(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  dots.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,182,193,.7)";
    ctx.fill();
    p.y+=p.d;
    if(p.y>canvas.height) p.y=0;
  });
  requestAnimationFrame(confetti);
})();
