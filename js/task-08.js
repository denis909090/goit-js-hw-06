document
  .querySelector(".login-form")
  .addEventListener("submit",(event) => {
    
    const formElements = event.target.elements;
    const email = formElements.email.value
    const password = formElements.password.value
    
    if (email === "" || password === "") {
      alert("Всі поля повинні бути заповнені!");
      return;
    }
    
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
    
    event.target.reset();
    event.preventDefault();
  });