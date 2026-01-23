// Main Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
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
        <div class="container">
            <div class="header-content">
                <a href="#" class="logo">Md. Mehedi Hasan</a>
                
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
        </div>
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

// Hero Section
function initHeroSection() {
    const hero = document.getElementById('hero');
    hero.innerHTML = `
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">Welcome to My Portfolio</h1>
                <p class="hero-subtitle">
                    I'm a passionate developer creating amazing web experiences
                </p>
            </div>
        </div>
    `;
}

// About Section
function initAboutSection() {
    const about = document.getElementById('about');
    about.innerHTML = `
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <p class="about-text">
                    I'm a passionate web developer with expertise in modern web technologies.
                    I love building responsive, user-friendly applications that solve real-world problems.
                </p>
            </div>
        </div>
    `;
}

// Skills Section
function initSkillsSection() {
    const skills = document.getElementById('skills');
    skills.innerHTML = `
        <div class="container">
            <h2 class="section-title">Skills</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <h3 class="skill-title">Frontend</h3>
                    <p class="skill-list">HTML, CSS, JavaScript, React</p>
                </div>
                <div class="skill-card">
                    <h3 class="skill-title">Backend</h3>
                    <p class="skill-list">Node.js, Express</p>
                </div>
                <div class="skill-card">
                    <h3 class="skill-title">Tools</h3>
                    <p class="skill-list">Git, VS Code, Figma</p>
                </div>
            </div>
        </div>
    `;
}

// Projects Section
function initProjectsSection() {
    const projects = document.getElementById('projects');
    projects.innerHTML = `
        <div class="container">
            <h2 class="section-title">Projects</h2>
            <div class="text-center">
                <p style="color: #4b5563;">Coming soon...</p>
            </div>
        </div>
    `;
}

// Experience Section
function initExperienceSection() {
    const experience = document.getElementById('experience');
    experience.innerHTML = `
        <div class="container">
            <h2 class="section-title">Experience</h2>
            <div class="text-center">
                <p style="color: #4b5563;">Experience details will be added here...</p>
            </div>
        </div>
    `;
}

// Contact Section
function initContactSection() {
    const contact = document.getElementById('contact');
    contact.innerHTML = `
        <div class="container">
            <h2 class="section-title">Contact Me</h2>
            <div class="contact-content">
                <p class="contact-text">
                    Feel free to reach out for collaborations or just a friendly hello
                </p>
                <div class="button-group">
                    <button class="contact-button" id="contactButton">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    `;

    // Add click handler for contact button
    const contactButton = document.getElementById('contactButton');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            alert('Contact form will be implemented here!');
        });
    }
}

// Footer
function initFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="container">
            <div class="text-center">
                <p style="color: #d1d5db;">&copy; ${new Date().getFullYear()} Md. Mehedi Hasan. All rights reserved.</p>
            </div>
        </div>
    `;
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