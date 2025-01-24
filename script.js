document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded and DOM fully ready.");

    // Handle CHART button click
    const chartBtn = document.getElementById("chartBtn");
    if (chartBtn) {
        chartBtn.addEventListener("click", function () {
            console.log("CHART button clicked!");
            window.location.href = "/chart.html";  // Redirect to chart page
        });
    } else {
        console.error("CHART button not found!");
    }

    // Handle BOT button click
    const botBtn = document.getElementById("botBtn");
    if (botBtn) {
        botBtn.addEventListener("click", function () {
            console.log("BOT button clicked!");
            window.location.href = "/bot-strategy.html";  // Redirect to bot strategy page
        });
    } else {
        console.error("BOT button not found!");
    }

    // Handle LOGOUT button click
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            console.log("LOGOUT button clicked!");
            alert("You have been logged out.");
            window.location.href = "/login.html";  // Redirect to login page
        });
    } else {
        console.error("LOGOUT button not found!");
    }
});
