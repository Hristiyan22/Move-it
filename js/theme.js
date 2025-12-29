document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("themeIcon");
    const storageKey = "theme"; 

    if (!themeToggle || !themeIcon) return;

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

   function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");

    if (isDark) {
      themeIcon.src = "./icons/moon-fill.svg";
      localStorage.setItem(storageKey, "dark");
    } else {
      themeIcon.src = "./icons/sun.svg";
      localStorage.setItem(storageKey, "light");
    }
  }

    loadTheme();
    themeToggle.addEventListener("click", toggleTheme);
});


