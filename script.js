function playMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.7;
  music.play()
    .then(() => console.log("Musik diputar"))
    .catch(err => console.warn("Autoplay dicegah:", err));
}

function sendWA() {
  playMusic(); // mainkan musik juga saat klik WA
  const phoneNumber = "6281234567890"; // Ganti nomor WhatsApp
  const message = encodeURIComponent("Maaf ya... Aku sungguh menyesal 😢 Ingin bicara baik-baik 🙏");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
}

function spawnLove() {
  const colors = ['#ff3399', '#ff66cc', '#ff1aff', '#ffccff', '#ff99cc', '#ff33aa'];
  const container = document.getElementById("love-container");
  const love = document.createElement("div");

  love.classList.add("love");
  love.innerText = "❤️";
  love.style.left = Math.random() * 100 + "vw";
  love.style.top = "100vh";
  love.style.fontSize = Math.random() * 20 + 10 + "px";

  // Warna neon acak
  const color = colors[Math.floor(Math.random() * colors.length)];
  love.style.color = color;
  love.style.textShadow = `
    0 0 5px ${color},
    0 0 10px ${color},
    0 0 15px ${color}
  `;

  container.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 4000);
}

setInterval(spawnLove, 300);
