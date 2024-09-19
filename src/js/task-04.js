function counter() {
  const decreaseBtn = document.querySelector('[data-action="decrement"]');
  const increaseBtn = document.querySelector('[data-action="increment"]');
  const resetBtn = document.querySelector(".js-reset-btn");
  let valueEl = document.getElementById("value");
  let counterValue = 0;

    function updateValue() {
    valueEl.innerHTML = counterValue
    }
    
  decreaseBtn.addEventListener("click", () => {
    counterValue -= 1;
    updateValue()
  });

  increaseBtn.addEventListener("click", () => {
    counterValue += 1;
    updateValue()
  });

  resetBtn.addEventListener("click", () => {
    counterValue = 0;
    updateValue()
  });
}

counter();
