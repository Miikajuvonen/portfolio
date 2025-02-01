document.addEventListener("DOMContentLoaded", function () {
    const continueBtn = document.getElementById("continue-btn");
    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("main-content");

    continueBtn.addEventListener("click", function () {
        // Varoitusnäytön häivytys
        intro.style.opacity = "0";
        setTimeout(() => {
            intro.style.display = "none"; // Hide the intro screen
            mainContent.classList.remove("hidden"); // Show the main content
            mainContent.classList.add("fade-in"); // Add fade-in animation
        }, 1000); // Wait 1 second before hiding the intro
    });
});
