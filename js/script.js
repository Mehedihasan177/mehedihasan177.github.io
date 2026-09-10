// Main Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components (each init function is defined in its own file)
    initHeader();
    initHeroSection();
    initAboutSection();
    initSkillsSection();
    initProjectsSection();
    initExperienceSection();
    initContactSection();
    initFooter();

    // Smooth scrolling for navigation links
    initSmoothScrolling();
});

// Header Component
function initHeader() {
    const header = document.getElementById('header');

    header.innerHTML = `
        <div class="header-content">
            <a href="#" class="logo">Mehedi Hasan</a>

            <nav class="desktop-nav">
                <a href="#about" class="nav-link">About</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#contact" class="nav-link">Contact</a>
            </nav>

            <div class="header-actions">
                <button class="theme-toggle-btn" id="themeToggleBtn" aria-label="Toggle color theme" title="Toggle theme">
                    <i class="ri-moon-line"></i>
                </button>

                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <i class="ri-menu-line"></i>
                </button>
            </div>
        </div>

        <nav class="mobile-nav" id="mobileNav">
            <div class="mobile-nav-content">
                <a href="#about" class="nav-link">About</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#projects" class="nav-link">Projects</a>
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#contact" class="nav-link">Contact</a>
            </div>
        </nav>
    `;

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    mobileMenuBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        mobileNav.classList.toggle('active');

        // Change icon based on state
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.className = 'ri-close-line';
        } else {
            icon.className = 'ri-menu-line';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!header.contains(event.target) && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'ri-menu-line';
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'ri-menu-line';
        });
    });

    // Theme toggle (button markup lives inside the header, so wire it up
    // once the header has been rendered)
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    syncThemeToggleIcon();
    themeToggleBtn.addEventListener('click', function() {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        setTheme(isLight ? 'dark' : 'light');
    });
}

// Theme (light/dark) — the initial theme is already applied by the inline
// script in index.html's <head> (before first paint, to avoid a flash);
// this just keeps it persisted and keeps the toggle icon in sync.
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    syncThemeToggleIcon();
}

function syncThemeToggleIcon() {
    const icon = document.querySelector('#themeToggleBtn i');
    if (!icon) return;
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    // Icon shows the mode a click will switch TO
    icon.className = isLight ? 'ri-moon-line' : 'ri-sun-line';
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                const mobileNav = document.getElementById('mobileNav');
                const mobileMenuBtn = document.getElementById('mobileMenuBtn');

                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.className = 'ri-menu-line';
                }

                // Calculate header height for offset
                const headerHeight = document.querySelector('.header').offsetHeight;

                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}
