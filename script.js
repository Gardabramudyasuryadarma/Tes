function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

setInterval(createHeart, 300);
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.7;
  music.play()
    .then(() => console.log("Musik dimulai"))
    .catch(err => console.warn("Autoplay dicegah:", err));
}

function sendWA() {
  const phoneNumber = "6281230759880"; // Ganti dengan nomor tujuan
  const message = encodeURIComponent("IYA SAYANG");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
}
