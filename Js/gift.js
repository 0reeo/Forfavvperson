const message = `Hari ini disimpan
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

const openBtn = document.getElementById("openGiftBtn");
const content = document.getElementById("content");
const typingText = document.getElementById("typingText");
const music = document.getElementById("bgMusic");

let i = 0;

openBtn.onclick = () => {
  openBtn.style.display = "none";
  content.classList.remove("hidden");
  music.play();
  typeText();
  drawQR();
};

function typeText(){
  if (i < message.length){
    typingText.innerHTML += message[i] === "\n" ? "<br>" : message[i];
    i++;
    setTimeout(typeText, 45);
  }
}

function drawQR(){
  const canvas = document.getElementById("qr");
  QRCode.toCanvas(canvas,
    "https://oreeo.github.io/Birthdaygift/final.html",
    { width:160, margin:1 }
  );
}
