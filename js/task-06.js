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


// const inputValue = refs.input.addEventListener("input", (event) => {
//   // const inoutVal = event.currentTarget.value.length;
//   // const inputLenth = refs.input.dataset.length;
//   if (event.currentTarget.value.length > refs.input.dataset.length) {
//     // console.log("error, write less verbs");
//       refs.input.classList.add("invalid");
//        refs.input.classList.remove("valid");
//   } else if (event.currentTarget.value.length == refs.input.dataset.length) {
//     // console.log("sucsess");
//       refs.input.classList.add("valid");
//       refs.input.classList.remove("invalid");
//   } else {
//     // console.log("write more verbs");
//       refs.input.classList.add("invalid");
//       refs.input.classList.remove("valid");
//   }
// });
