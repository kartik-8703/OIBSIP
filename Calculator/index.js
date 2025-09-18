const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.contains("clear")) {
      currentInput = "";
      display.value = "";
    } else if (button.classList.contains("equals")) {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
      }
    } else {
      currentInput += button.getAttribute("data-value") || "";
      display.value = currentInput;
    }
  });
});
