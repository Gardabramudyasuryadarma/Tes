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
  if (music.paused) {
    music.play().catch(err => {
      console.log("Autoplay gagal: ", err);
    });
  }
}

function sendWA() {
  const phoneNumber = "6281230759880"; // Ganti dengan nomor tujuan
  const message = encodeURIComponent("IYA SAYANG");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
}
