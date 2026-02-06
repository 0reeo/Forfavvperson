const text = `
Selamat bertambah usia

Hari ini disimpan
seperti satu foto kecil.

Tidak terlalu ramai,
tidak juga berisik.
Hanya cukup
untuk diingat.

Waktu berjalan,
pelan tapi pasti.
Dan tanpa sadar,
kamu sudah sejauh ini.

Ada hari yang mudah,
ada yang melelahkan.
Ada rencana yang jadi,
ada yang harus dilepas.

Tapi kamu tetap melangkah.

Semoga langkahmu
selalu menemukan alasan
untuk diteruskan.
Semoga hatimu
selalu punya ruang
untuk bernapas.

Dan jika suatu hari
kamu merasa sendirian,
ingat saja:
pernah ada seseorang
yang mendoakanmu
secara diam-diam.

Tanpa nama.
Tanpa ingin diketahui.

Cukup disimpan,
seperti foto ini.
`;

let i = 0;
const typing = document.getElementById("typing");
const btn = document.getElementById("nextBtn");
const music = document.getElementById("bgMusic");

/* ===== TYPE EFFECT ===== */
function type() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 65);
  } else {
    // 🔑 INI KUNCI NYA
    btn.classList.add("show");
  }
}
type();

/* ===== BUTTON ===== */
btn.addEventListener("click", () => {
  window.location.href = "final.html";
});

/* ===== MUSIC (AUTO SETELAH TAP PERTAMA) ===== */
document.body.addEventListener("click", () => {
  music.play().catch(() => {});
}, { once: true });
