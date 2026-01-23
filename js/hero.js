// Hero Section
function initHeroSection() {
    const hero = document.getElementById('hero');
    hero.className = 'hero-section';
    hero.innerHTML = `
        <div class="hero-container">
            <div class="hero-grid">
                <!-- Left Column - Content -->
                <div class="hero-content">
                    <div class="hero-intro">
                        <p class="hero-greeting">Hello, I'm</p>
                        <h1 class="hero-name">Md. Mehedi Hasan</h1>
                        <h2 class="hero-title">Flutter Developer</h2>
                    </div>
                    
                    <p class="hero-description">
                        I'm a passionate mobile app developer with 4+ years of specialized experience in Flutter framework. 
                        My expertise lies in designing and developing beautiful, high-performance cross-platform applications that provide seamless user experiences. 
                        Throughout my career, I've successfully delivered numerous projects ranging from enterprise solutions to consumer-facing apps, focusing on clean code architecture, responsive design, and optimal performance across both iOS, Android and Desktop platforms.
                    </p>
                    
                    <div class="hero-buttons">
                        <button class="btn-primary" id="contactMeBtn">Contact Me</button>
                        <button class="btn-outline" id="downloadCvBtn">
                            <img src="assets/portfolio_image/leetcode_logo.png" alt="LeetCode" class="leetcode-logo">
                            Leetcode
                        </button>
                    </div>
                
                </div>
                
                <!-- Right Column - Image -->
                <div class="hero-image-container">
                    <div class="hero-image-wrapper">
                        <img 
                            src="assets/portfolio_image/profile_image.png"
                            alt="Md. Mehedi Hasan - Flutter Developer"
                            class="hero-profile-image"
                        />
                    </div>
                    
                    <div class="experience-badge experience-years">4+ Years Experience</div>
                    <div class="experience-badge projects-count">50+ Apps Built</div>
                </div>
            </div>
        </div>
    `;

    // Add button event listeners
    document.getElementById('contactMeBtn').addEventListener('click', function () {
        // Open Google Form in new tab
        window.open('https://docs.google.com/forms/d/e/1FAIpQLScu-m3kncsVSjpJJdhH5bWUoOx8f2V38Df6sEqMhu-MpiCuCQ/viewform?usp=publish-editor', '_blank');
    });

    document.getElementById('downloadCvBtn').addEventListener('click', function () {
        // Open Google Form in new tab
        window.open('https://leetcode.com/u/mehedihasan177/', '_blank');
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing hero section...');
    initHeroSection();
});