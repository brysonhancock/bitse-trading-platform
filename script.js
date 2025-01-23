document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Dummy login credentials
            const validEmail = "user@bitse.com";
            const validPassword = "password123";

            if (email === validEmail && password === validPassword) {
                alert("Login successful!");
                window.location.href = "dashboard.html";  // Redirect to the next page
            } else {
                document.getElementById("errorMessage").style.display = "block";
            }
        });
    }
});
