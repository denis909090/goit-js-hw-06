function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const span = document.querySelector(".color");
const body = document.querySelector("body");

document.querySelector(".change-color").addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
  getRandomHexColor();
});


