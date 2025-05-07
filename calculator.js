window.addEventListener("DOMContentLoaded", function () {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const operationSelect = document.getElementById("operation");
  const resultField = document.getElementById("result");
  const calcBtn = document.getElementById("calcBtn");
  const resetBtn = document.getElementById("resetBtn");

  // Perform calculation on click
  calcBtn.addEventListener("click", function () {
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

    // Perform operation
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
    }

    resultField.textContent = `Result: ${result}`;
    resultField.style.color = "#333";
  });

  // Clear result on input change
  ["num1", "num2", "operation"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      resultField.textContent = "";
    });
  });

  // Allow Enter key to calculate
  num2Input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      calcBtn.click();
    }
  });

  // Reset button functionality (if present)
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      num1Input.value = "";
      num2Input.value = "";
      operationSelect.value = "+";
      resultField.textContent = "";
    });
  }
});
