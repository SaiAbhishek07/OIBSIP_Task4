function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    showMessage("Please enter both username and password.", true);
    return;
  }

  localStorage.setItem("auth_username", username);
  localStorage.setItem("auth_password", password);
  showMessage("Registered successfully. You can now login.");
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const savedUsername = localStorage.getItem("auth_username");
  const savedPassword = localStorage.getItem("auth_password");

  if (username === savedUsername && password === savedPassword) {
    showMessage("Login successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    showMessage("Invalid credentials!", true);
  }
}

function showMessage(msg, isError = false) {
  const msgEl = document.getElementById("message");
  msgEl.textContent = msg;
  msgEl.style.color = isError ? "red" : "green";
}
