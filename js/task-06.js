const refs = {
  input: document.getElementById("validation-input"),
};


const inputValue = refs.input.addEventListener("change", (event) => {
  const inputVal = event.currentTarget.value.length;
    const inputLenth = Number(refs.input.dataset.length);
    console.log(inputVal);
    console.log(inputLenth);
    if (inputVal === inputLenth) {
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
  } else {
    refs.input.classList.add("invalid");
    refs.input.classList.remove("valid");
  }
});
