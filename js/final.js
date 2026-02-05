const text = `Terima kasih sudah sampai di sini.
Semoga hari ini terasa lebih hangat.`;

const typingEl = document.getElementById("typing");
const photo = document.querySelector(".final-photo");
const music = document.getElementById("bgMusic");

let index = 0;
const speed = 50;

function typeText() {
  if (index < text.length) {
    typingEl.innerHTML += text[index] === "\n" ? "<br>" : text[index];
    index++;
    setTimeout(typeText, speed);
  } else {
    // setelah teks selesai → munculin foto
    setTimeout(() => {
      photo.classList.add("show");
    }, 800);
  }
}

window.addEventListener("load", () => {
  music.volume = 0.5;
  music.play().catch(() => {});
  typeText();
});
