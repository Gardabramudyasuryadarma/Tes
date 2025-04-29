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
  