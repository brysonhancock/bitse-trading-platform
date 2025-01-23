document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded and DOM fully ready.");

    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        console.error("Login form not found!");
        return;
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Login button clicked!");

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        console.log("Entered Email:", email);
        console.log("Entered Password:", password);

        // Dummy credentials for testing
        if (email === "user@bitse.com" && password === "password123") {
            alert("Login successful!");
            window.location.href = "/dashboard.html";  // Redirect to dashboard
        } else {
            console.log("Invalid credentials.");
            document.getElementById("errorMessage").style.display = "block";
        }
    });
});
