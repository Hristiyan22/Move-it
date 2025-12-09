document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("themeIcon");
    const storageKey = "theme"; // localStorage key

    if (!themeToggle || !themeIcon) return;

    // Apply saved theme on load
    function loadTheme() {
        const savedTheme = localStorage.getItem(storageKey);

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeIcon.src = "./icons/moon-fill.svg";
        } else {
            document.body.classList.remove("dark-mode");
            themeIcon.src = "./icons/sun.svg";
        }
    }

    // Toggle theme
    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

        themeIcon.src = isDark ? "./icons/moon-fill.svg" : "./icons/sun.svg";

        // Save preference
        localStorage.setItem(storageKey, isDark ? "dark" : "light");
    }

    loadTheme(); // Load saved theme
    themeToggle.addEventListener("click", toggleTheme);
});
