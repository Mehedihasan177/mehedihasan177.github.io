// Skills Section
function initSkillsSection() {
    const skills = document.getElementById('skills');
    skills.className = 'skills-section';
    skills.innerHTML = `
        <div class="skills-container">
            <!-- Header -->
            <div class="skills-header">
                <h2 class="skills-title">Skills & Expertise</h2>
                <p class="skills-subtitle">
                    A comprehensive toolkit for building exceptional mobile applications
                </p>
            </div>

            <!-- Main Content -->
            <div class="skills-content">
                <!-- Left Column: Technical Skills -->
                <div class="technical-skills">
                    <h3 class="skills-subheading">Technical Skills</h3>
                    <div class="skills-list">
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">Flutter/Dart</span>
                                <span class="skill-percentage">95%</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar skill-bar-blue" style="width: 95%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">Mobile App Development</span>
                                <span class="skill-percentage">90%</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar skill-bar-green" style="width: 90%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">State Management</span>
                                <span class="skill-percentage">88%</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar skill-bar-purple" style="width: 88%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">Firebase Integration</span>
                                <span class="skill-percentage">85%</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar skill-bar-orange" style="width: 85%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">REST APIs</span>
                                <span class="skill-percentage">90%</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar skill-bar-red" style="width: 90%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">Git/Version Control</span>
                                <span class="skill-percentage">92%</span>
                            </div>
                            <div class="skill-bar-container">
                                <div class="skill-bar skill-bar-gray" style="width: 92%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Tools & Technologies -->
                <div class="tools-container">
                    <h3 class="skills-subheading">Tools & Technologies</h3>
                    <div class="tools-grid">
                        <div class="tool-item">
                            <div class="tool-icon-container">
                                <i class="ri-flutter-fill tool-icon"></i>
                            </div>
                            <span class="tool-name">Flutter</span>
                        </div>
                        
                        <div class="tool-item">
                            <div class="tool-icon-container">
                                <i class="ri-code-line tool-icon"></i>
                            </div>
                            <span class="tool-name">VS Code</span>
                        </div>
                        
                        <div class="tool-item">
                            <div class="tool-icon-container">
                                <i class="ri-android-fill tool-icon"></i>
                            </div>
                            <span class="tool-name">Android Studio</span>
                        </div>
                        
                        <div class="tool-item">
                            <div class="tool-icon-container">
                                <i class="ri-apple-fill tool-icon"></i>
                            </div>
                            <span class="tool-name">Xcode</span>
                        </div>
                        
                        <div class="tool-item">
                            <div class="tool-icon-container">
                                <i class="ri-fire-fill tool-icon"></i>
                            </div>
                            <span class="tool-name">Firebase</span>
                        </div>
                        
                        <div class="tool-item">
                            <div class="tool-icon-container">
                                <i class="ri-git-branch-fill tool-icon"></i>
                            </div>
                            <span class="tool-name">Git</span>
                        </div>
                        
                        <div class="tool-item">
                            <div class="tool-icon-container">
                                <i class="ri-palette-fill tool-icon"></i>
                            </div>
                            <span class="tool-name">Figma</span>
                        </div>
                        
                        <div class="tool-item">
                            <div class="tool-icon-container">
                                <i class="ri-mail-send-fill tool-icon"></i>
                            </div>
                            <span class="tool-name">Postman</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Expertise Section -->
            <div class="expertise-section">
                <h3 class="expertise-subheading">Areas of Expertise</h3>
                <div class="expertise-grid">
                    <div class="expertise-item">
                        <div class="expertise-icon-container">
                            <i class="ri-smartphone-line expertise-icon"></i>
                        </div>
                        <h4 class="expertise-title">Cross-Platform Development</h4>
                        <p class="expertise-description">
                            Building apps that work seamlessly on both iOS and Android platforms
                        </p>
                    </div>
                    
                    <div class="expertise-item">
                        <div class="expertise-icon-container">
                            <i class="ri-palette-line expertise-icon"></i>
                        </div>
                        <h4 class="expertise-title">UI/UX Implementation</h4>
                        <p class="expertise-description">
                            Converting designs into pixel-perfect, responsive mobile interfaces
                        </p>
                    </div>
                    
                    <div class="expertise-item">
                        <div class="expertise-icon-container">
                            <i class="ri-speed-up-line expertise-icon"></i>
                        </div>
                        <h4 class="expertise-title">Performance Optimization</h4>
                        <p class="expertise-description">
                            Ensuring smooth, fast performance and efficient memory usage
                        </p>
                    </div>
                    
                    <div class="expertise-item">
                        <div class="expertise-icon-container">
                            <i class="ri-links-line expertise-icon"></i>
                        </div>
                        <h4 class="expertise-title">API Integration</h4>
                        <p class="expertise-description">
                            Seamless integration with REST APIs and real-time data services
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize skills section when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSkillsSection();
    
    // Add animation for skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        // Reset width for animation
        const width = bar.style.width;
        bar.style.width = '0%';
        
        // Animate after a short delay
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
});