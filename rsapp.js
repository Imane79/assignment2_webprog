window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  const usernameMessage = document.getElementById("usernameMessage");
  const emailMessage = document.getElementById("emailMessage");
  const passwordMessage = document.getElementById("passwordMessage");
  const confirmPasswordMessage = document.getElementById(
    "confirmPasswordMessage"
  );

  const result = document.getElementById("result");
  const resetBtn = document.getElementById("resetBtn");

  function validateUsername() {
    if (username.value.length < 4) {
      username.classList.add("error");
      username.classList.remove("success");
      usernameMessage.textContent = "Username must be at least 4 characters.";
      return false;
    }
    username.classList.remove("error");
    username.classList.add("success");
    usernameMessage.textContent = "";
    return true;
  }

  function validateEmail() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email.value)) {
      email.classList.add("error");
      email.classList.remove("success");
      emailMessage.textContent = "Invalid email format.";
      return false;
    }
    email.classList.remove("error");
    email.classList.add("success");
    emailMessage.textContent = "";
    return true;
  }

  function validatePassword() {
    if (password.value.length < 6) {
      password.classList.add("error");
      password.classList.remove("success");
      passwordMessage.textContent = "Password must be at least 6 characters.";
      return false;
    }
    password.classList.remove("error");
    password.classList.add("success");
    passwordMessage.textContent = "";
    return true;
  }

  function validateConfirmPassword() {
    if (confirmPassword.value !== password.value) {
      confirmPassword.classList.add("error");
      confirmPassword.classList.remove("success");
      confirmPasswordMessage.textContent = "Passwords do not match.";
      return false;
    }
    confirmPassword.classList.remove("error");
    confirmPassword.classList.add("success");
    confirmPasswordMessage.textContent = "";
    return true;
  }

  // Real-time validation
  username.addEventListener("input", validateUsername);
  email.addEventListener("input", validateEmail);
  password.addEventListener("input", () => {
    validatePassword();
    validateConfirmPassword();
  });
  confirmPassword.addEventListener("input", validateConfirmPassword);

  // Submit form
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page refresh

    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmValid = validateConfirmPassword();

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmValid) {
      result.innerHTML = `<p style="color: green;">Registration successful!</p>`;
    } else {
      result.innerHTML = `<p style="color: red;">Please fix the errors above.</p>`;
    }
  });

  // Reset button
  resetBtn.addEventListener("click", () => {
    form.reset();
    [username, email, password, confirmPassword].forEach((input) => {
      input.classList.remove("error", "success");
    });
    [
      usernameMessage,
      emailMessage,
      passwordMessage,
      confirmPasswordMessage,
    ].forEach((span) => {
      span.textContent = "";
    });
    result.innerHTML = "";
  });
});
