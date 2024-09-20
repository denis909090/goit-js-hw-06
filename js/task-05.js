// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// input.addEventListener("input", (event) => {
//     output = 'anonymys'
//     output.textContent = event.currentTarget.value
//     console.log(event);
// });

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent =
    nameInput.value !== "" ? nameInput.value : "Anonymous";
});
