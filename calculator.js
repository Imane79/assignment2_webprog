window.addEventListener("DOMContentLoaded", function () {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const operationSelect = document.getElementById("operation");
  const resultField = document.getElementById("result");
  const calcBtn = document.getElementById("calcBtn");
  const resetBtn = document.getElementById("resetBtn");

  // Function to perform calculation
  function calculate() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
      resultField.textContent = "Please enter both numbers.";
      resultField.style.color = "red";
      return;
    }

    if (num1 < 0 || num2 < 0) {
      resultField.textContent = "Numbers must be positive.";
      resultField.style.color = "red";
      return;
    }

    if (operation === "/" && num2 === 0) {
      resultField.textContent = "Cannot divide by zero.";
      resultField.style.color = "red";
      return;
    }

    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      case "^":
        result = Math.pow(num1, num2);
        break;
      default:
        result = "Invalid operation";
    }

    resultField.textContent = `${num1} ${operation} ${num2} = ${result}`;
    resultField.style.color = "#3e684a";
  }

  // Event listeners
  calcBtn.addEventListener("click", calculate);

  num2Input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      calculate();
    }
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      num1Input.value = "";
      num2Input.value = "";
      operationSelect.value = "+";
      resultField.textContent = "";
    });
  }
});
