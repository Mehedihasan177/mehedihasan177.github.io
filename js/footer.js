// Footer Section
function initFooter() {
    const footer = document.getElementById('footer');
    if (!footer) {
        console.error('Footer not found!');
        return;
    }
    
    footer.className = 'footer';
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-grid">
                <!-- Left Column: About -->
                <div class="footer-column">
                    <h3 class="footer-title">Md. Mehedi Hasan</h3>
                    <p class="footer-description">
                        Flutter Developer passionate about creating beautiful, high-performance mobile applications.
                    </p>
                    <!-- Social Icons (Commented out as per original code)
                    <div class="footer-social">
                        <div class="social-icon">
                            <i class="ri-github-fill"></i>
                        </div>
                        <div class="social-icon">
                            <i class="ri-linkedin-fill"></i>
                        </div>
                        <div class="social-icon">
                            <i class="ri-twitter-fill"></i>
                        </div>
                        <div class="social-icon">
                            <i class="ri-mail-fill"></i>
                        </div>
                    </div>
                    -->
                </div>
                
                <!-- Middle Column: Quick Links -->
                <div class="footer-column">
                    <h4 class="footer-links-title">Quick Links</h4>
                    <ul class="footer-links-list">
                        <li class="footer-link-item">
                            <a href="#about" class="footer-link">About</a>
                        </li>
                        <li class="footer-link-item">
                            <a href="#skills" class="footer-link">Skills</a>
                        </li>
                        <li class="footer-link-item">
                            <a href="#projects" class="footer-link">Projects</a>
                        </li>
                        <li class="footer-link-item">
                            <a href="#experience" class="footer-link">Experience</a>
                        </li>
                        <li class="footer-link-item">
                            <a href="#contact" class="footer-link">Contact</a>
                        </li>
                    </ul>
                </div>
                
                <!-- Right Column: Services -->
                <div class="footer-column">
                    <h4 class="footer-links-title">Services</h4>
                    <ul class="footer-services-list">
                        <li class="footer-service-item">Mobile App Development</li>
                        <li class="footer-service-item">Cross-Platform Solutions</li>
                        <li class="footer-service-item">UI/UX Implementation</li>
                        <li class="footer-service-item">Performance Optimization</li>
                        <li class="footer-service-item">App Maintenance</li>
                    </ul>
                </div>
            </div>
            
            <!-- Bottom Section -->
            <div class="footer-bottom">
                <p class="footer-copyright">
                    © Md. Mehedi Hasan.
                </p>
                <p class="footer-built-with">
                    Built with Flutter mindset ❤️
                </p>
            </div>
        </div>
    `;
    
    // Add smooth scroll behavior to anchor links
    addSmoothScroll();
}

// Add smooth scroll to anchor links
function addSmoothScroll() {
    const anchorLinks = document.querySelectorAll('.footer-link[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for any fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing footer...');
    initFooter();
});

// Also try to initialize on window load as backup
window.addEventListener('load', function() {
    console.log('Window loaded, checking footer...');
    const footer = document.getElementById('footer');
    if (footer && footer.innerHTML.trim() === '') {
        console.log('Footer is empty, re-initializing...');
        initFooter();
    }
});