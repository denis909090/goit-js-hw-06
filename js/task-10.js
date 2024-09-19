const divBox = document.getElementById("boxes");
const inputVal = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnCreate.addEventListener("click", () => {
  function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
      const boxes = document.createElement("div");
      const increaseSize = 10 * i + 30;
      boxes.style.background = getRandomHexColor();
      boxes.style.width = `${increaseSize}px`;
      boxes.style.height = `${increaseSize}px`;

      divBox.appendChild(boxes);
    }
  }
  createBoxes(inputVal.value);
});

btnDestroy.addEventListener("click", () => {
  function destroyBoxes() {
    boxes.innerHTML = "";
    inputVal.value = "";
  }
  destroyBoxes()
});
