document.querySelector(".login-form").addEventListener("submit", (event) => {
  const inputs = Array.from(document.getElementsByTagName("input"));
  
  const isEmpty = inputs.some((input) => input.value === "");
  if (isEmpty) {
    alert("Всі поля повинні бути заповнені!");
    event.preventDefault();
    return;
  }

  const form = event.target;
  const formData = Object.fromEntries(new FormData(form).entries());
  console.log(formData);

  form.reset();
  event.preventDefault();
});
