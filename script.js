// NovaDrop V3.5 Engine 🚀

console.log("NovaDrop Cinematic System Loaded");


// =====================
// REVEAL ON SCROLL
// =====================
const elements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


// =====================
// HERO IMAGE CINEMATIC BLINK EFFECT
// =====================
const img = document.querySelector(".hero-image img");

setInterval(() => {
  img.style.filter = "brightness(0.5)";
  setTimeout(() => {
    img.style.filter = "brightness(1.3)";
  }, 200);
}, 4000);


// =====================
// POPUP SYSTEM
// =====================
function showPopup(text) {
  const popup = document.createElement("div");

  popup.innerText = text;

  popup.style.position = "fixed";
  popup.style.bottom = "20px";
  popup.style.right = "20px";
  popup.style.background = "#00c6ff";
  popup.style.color = "#000";
  popup.style.padding = "10px 15px";
  popup.style.borderRadius = "8px";
  popup.style.zIndex = "9999";

  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 2500);
}