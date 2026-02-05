console.log("FINAL JS JALAN");

/* ================== WAIT DOM ================== */
window.addEventListener("load", () => {

  /* ===== MUSIC ===== */
  const music = document.getElementById("bgMusic");
  document.body.addEventListener("click", () => {
    music.play().catch(()=>{});
  }, { once: true });

  /* ===== QR CODE ===== */
  if (typeof QRCode === "undefined") {
    console.error("QRCode library TIDAK KELOAD");
  } else {
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
      },
      err => {
        if (err) console.error(err);
        else console.log("QR BERHASIL DIBUAT");
      }
    );
  }

  /* ===== CONFETTI ===== */
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const dots = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 2,
    d: Math.random() * 2 + 1
  }));

  function animate() {
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
  }
  animate();

});
