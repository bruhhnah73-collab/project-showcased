// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle = document.getElementById("themeToggle");


// =========================
// LOAD SAVED THEME
// =========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

} else {

    themeToggle.textContent = "🌙";

}


// =========================
// TOGGLE THEME
// =========================

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    if (isDark) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});