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

            <button class="mobile-menu-btn" id="mobileMenuBtn">
                <i class="ri-menu-line"></i>
            </button>
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
