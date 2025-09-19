
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("registerUsername").value;
      const password = document.getElementById("registerPassword").value;

      if (localStorage.getItem(username)) {
        document.getElementById("registerMessage").innerText = "User already exists!";
      } else {
        localStorage.setItem(username, password);
        document.getElementById("registerMessage").innerText = "Registration successful!";
      }
    });
  }

  
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;

      const storedPassword = localStorage.getItem(username);

      if (storedPassword === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "secured.html";
      } else {
        document.getElementById("loginMessage").innerText = "Invalid credentials!";
      }
    });
  }


  if (window.location.pathname.includes("secure.html")) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      alert("You must login first!");
      window.location.href = "index.html";
    }
  }
});


function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
