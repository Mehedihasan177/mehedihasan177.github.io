// CV Page — theme toggle only (no section nav on this page)
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    syncThemeToggleIcon();
    themeToggleBtn.addEventListener('click', function () {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        setTheme(isLight ? 'dark' : 'light');
    });
});

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    syncThemeToggleIcon();
}

function syncThemeToggleIcon() {
    const icon = document.querySelector('#themeToggleBtn i');
    if (!icon) return;
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    icon.className = isLight ? 'ri-moon-line' : 'ri-sun-line';
}
