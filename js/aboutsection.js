// About Section
function initAboutSection() {
    const about = document.getElementById('about');
    about.className = 'about-section';
    about.innerHTML = `
        <div class="about-container">
            <!-- Header -->
            <div class="about-header">
                <h2 class="about-title">About Me</h2>
                <p class="about-subtitle">
                    I'm a dedicated Flutter developer who transforms ideas into beautiful, 
                    functional mobile applications that users love.
                </p>
            </div>

            <!-- Content -->
            <div class="about-content">
                <div class="about-text-content">
                    <h3 class="about-heading">
                        Professional Experiences Since 2021
                    </h3>
                    
                    <div class="about-description">
                        <p>
                            My journey in mobile development began with a passion for creating seamless 
                            user experiences. Over the past 4 years, I've specialized in Flutter development, 
                            building cross-platform applications that perform beautifully on both iOS and Android.
                        </p>
                        
                        <p>
                            I believe in writing clean, maintainable code and following best practices. 
                            My expertise extends beyond just coding - I understand the importance of user 
                            experience design, performance optimization, and scalable architecture.
                        </p>
                        
                        <p>
                            When I'm not coding, you'll find me exploring new technologies, contributing to 
                            open-source projects, or sharing knowledge with the developer community through 
                            blogs and speaking engagements.
                        </p>
                    </div>
                    
                    <!-- Tags -->
                    <div class="about-tags">
                        <span class="tag">Problem Solver</span>
                        <span class="tag tag-green">Team Player</span>
                        <span class="tag tag-purple">Continuous Learner</span>
                        <span class="tag tag-orange">Detail Oriented</span>
                    </div>
                </div>
                
                <!-- Image -->
                <div class="about-image-container">
                    <img 
                        src="https://readdy.ai/api/search-image?query=modern%20office%20workspace%20with%20flutter%20development%20setup%2C%20multiple%20monitors%20showing%20mobile%20app%20code%20and%20interfaces%2C%20clean%20organized%20desk%20with%20plants%2C%20natural%20lighting%2C%20professional%20coding%20environment%2C%20warm%20atmosphere&width=600&height=400&seq=workspace&orientation=landscape"
                        alt="Development Workspace"
                        class="about-image"
                    />
                    <div class="about-image-overlay"></div>
                </div>
            </div>
            
            <!-- Stats -->
            <div class="about-stats">
                <div class="stat-item">
                    <div class="stat-number">4+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">10+</div>
                    <div class="stat-label">Apps Delivered</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">7+</div>
                    <div class="stat-label">Happy Clients</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Client Satisfaction</div>
                </div>
            </div>
        </div>
    `;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing about section...');
    initAboutSection();
});

// Also try to initialize on window load as backup
window.addEventListener('load', function() {
    console.log('Window loaded, checking about section...');
    const about = document.getElementById('about');
    if (about && about.innerHTML.trim() === '') {
        console.log('About section is empty, re-initializing...');
        initAboutSection();
    }
});