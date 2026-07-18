document.querySelectorAll('.skill-fill').forEach(skill => {
    skill.style.width = skill.dataset.width + '%';
});

 const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.innerHTML = "☀️";
        } else {
            themeToggle.innerHTML = "🌙";
        }
    });
}


  