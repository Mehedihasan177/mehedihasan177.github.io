// Projects Data
    //https://readdy.ai/api/search-image?query=e-commerce%20mobile%20app%20demonstration%20video%20showing%20user%20browsing%20products%2C%20adding%20items%20to%20cart%2C%20and%20checkout%20process%2C%20professional%20app%20demo%20on%20smartphone%20screen&width=600&height=400&seq=ecommerce-video&orientation=landscape
    //    // <div class="project-demo-link">
                //     <div class="demo-link-content">
                //         <div class="demo-icon">
                //             <i class="ri-play-circle-line"></i>
                //         </div>
                //         <span class="demo-text">View Demo</span>
                //     </div>
                // </div>

const projectsData = {
    categories: ['All', 'BTV ERP', 'Bdjobs', 'Social', 'VTS', 'Restaurant Reservation', 'CCTV Surveillance', 'Attendance System', 'Online Exam'],

    projects: [
        {
            id: 9,
            title: 'BTV - ERP',
            category: 'BTV ERP',
            description: 'A comprehensive Enterprise Resource Planning (ERP) mobile application for Bangladesh Television (BTV), designed for three types of users — Admin, Artist, and Visitor. The app streamlines artist management, budgeting, bill processing, gate pass management, FTP file transfer, and reporting with full bilingual (Bengali/English) support.',
            image: 'assets/portfolio_image/btv/banner.png',
            video: 'assets/portfolio_image/btv/BTV_Operations_Film.mp4',
            gallery: [
                'assets/portfolio_image/btv/login.jpeg',
                'assets/portfolio_image/btv/4.png',
                'assets/portfolio_image/btv/artist_wise_report.png',
                'assets/portfolio_image/btv/ftp_folders.png',
                'assets/portfolio_image/btv/file_list.png',
                'assets/portfolio_image/btv/program_schedule.png'
            ],
            tech: ['Flutter', 'GetX State Management', 'Dio & REST API', 'Firebase (FCM, Auth, Crashlytics)', 'FTP File Transfer (TUS Client)', 'QR Code Scanner (Mobile Scanner)', 'PDF/DOCX Viewer (Syncfusion)', 'Bilingual Support (EN/BN)', 'Local Storage (Get Storage)', 'Fl Charts'],
            features: ['Role-based access for Admin, Artist, and Visitor', 'Artist roster & grade management', 'Pre/Post budget approval', 'Bill creation and payment processing', 'Gate pass management with QR scanning', 'FTP file upload/download', 'Comprehensive reporting'],
            roles: [
                {
                    name: 'Internal User (Admin)',
                    description: 'Full administrative control of the ERP system — managing artists, budgets, bills, and gate passes. Admins get a dashboard overview of artists, programs, payments, and real-time visitor check-ins.',
                    features: ['Artist roster & grade management', 'Pre-budget & post-budget approval', 'Bill creation, AGB bill & payment approval', 'Gate pass approval, QR scanning & check-in verification', 'FTP file/folder management with version history & comments', 'Reports: Program Bill Details, Bill Report, Artist Wise, AGB, Artist Payment']
                },
                {
                    name: 'Artist',
                    description: 'Artists can manage their roster enrollment, view program schedules, track payments, apply for gate passes, request grade enhancements, and access their rate card and tax information.',
                    features: ['Artist registration & roster enlistment', 'Roster status & grade enhancement requests', 'Program schedules & payment history', 'Gate pass application with vehicle, hardware & guardian info', 'My rate card & complete tax list', 'Notifications & bilingual (Bengali/English) support']
                },
                {
                    name: 'Visitor',
                    description: 'Visitors can register, apply for gate passes, and track their visit status with QR code verification. Dashboard shows on-site visitors, pending approvals, approved, and rejected passes.',
                    features: ['Visitor registration & login', 'Gate pass application & tracking', 'My gate pass list with search & pagination', 'Gate pass editing when Waiting/Return status', 'Dashboard: On-site, Pending, Approved, Rejected stats', 'QR code pass & attachment viewing']
                }
            ],
            github: '#',
            demo: '#'
        },
        {
            id: 1,
            title: 'BDJobs Employer app',
            category: 'Bdjobs',
            description: 'BDJobs Employer app is based on the job recruitment process. By this application can sort qualified job seekers.',
            image: 'assets/portfolio_image/employeer_app.png',
            video: '#',
            gallery: [
                'assets/portfolio_image/bdjobs/bdjobs1.jpg',
                'assets/portfolio_image/bdjobs/bdjobs2.jpg',
                'assets/portfolio_image/bdjobs/bdjobs3.jpg',
                'assets/portfolio_image/bdjobs/bdjobs4.jpg',
                'assets/portfolio_image/bdjobs/bdjobs5.jpg',
                'assets/portfolio_image/bdjobs/bdjobs6.jpg',
            ],
            tech: ['Firebase', 'Getx State Management'],
            features: ['Real-time inventory', 'Push notifications', 'Payment integration', 'User reviews'],
            github: '#',
            demo: 'https://play.google.com/store/apps/details?id=com.bdjobs.recruiter&pcampaignid=web_share'
        },
        {
            id: 2,
            title: 'BuzzNex - Desktop Social App',
            category: 'Social',
            description: 'A modern desktop social networking platform designed for seamless communication. Supports real-time messaging, instant file sharing, and high-quality voice/video calling. Built to deliver a fast, secure, and engaging user experience for teams and communities.',
            image: 'assets/portfolio_image/whatsapp.png',
            video: '#',
            gallery: [
                'assets/portfolio_image/social/social1.jpg',
                'assets/portfolio_image/social/social2.jpg',
                'assets/portfolio_image/social/social3.jpg',
            ],
            tech: ['WebSocket', 'REST API', 'Flutter Bloc', 'AESEncryption and Decryption'],
            features: ['Real-time chat', 'File Sharing', 'Calling Feature', 'User Profiles'],
            github: '#',
            demo: '#'
        },
        {
            id: 3,
            title: 'Robi Vehicle Tracking System - VTS App',
            category: 'VTS',
            description: 'Robi VTS solution built with Google Maps, enabling real-time tracking, route visualization, and location history for vehicles.',
            image: 'assets/portfolio_image/robi.jpg',
            video: '#',
            gallery: [
                'assets/portfolio_image/robi/robi1.jpg',
                'assets/portfolio_image/robi/robi2.jpg',
                'assets/portfolio_image/robi/robi3.jpg',
                'assets/portfolio_image/robi/robi4.jpg',
                'assets/portfolio_image/robi/robi5.jpg',
                'assets/portfolio_image/robi/robi6.jpg'
            ],
            tech: ['SQFLite', 'Provider', 'Local Storage', 'Google Map', 'Firebase', 'Riverpod State Management', 'AESEncryption and Decryption'],
            features: ['Vehicle List', 'Vehicle Live Tracking', 'Tracking History', 'Bkash and SSL Commerce Payment system', 'Push Notification'],
            github: '#',
            demo: 'https://play.google.com/store/apps/details?id=bd.com.robi.vts&pcampaignid=web_share'
        },
        {
            id: 4,
            title: 'Surveillance Application - mobile and desktop',
            category: 'CCTV Surveillance',
            description: 'Surveillance Pro is a comprehensive, cross-platform security monitoring application built with Flutter, offering real-time camera streaming and intelligent surveillance management on both mobile and desktop devices. The app provides seamless access to live camera feeds with full streaming functionality already implemented, while advanced features like multi-device management, event configuration, and video playback are actively in development. Designed for both individual and enterprise use, Surveillance Pro delivers a scalable, high-performance NVR (Network Video Recorder) experience that combines intuitive operation with professional-grade security capabilities.',
            image: 'assets/portfolio_image/surveillance.png',
            video: '#',
            gallery: [
                'assets/portfolio_image/survaillance/survaillance1.jpeg',
                'assets/portfolio_image/survaillance/survaillance3.jpeg',
                'assets/portfolio_image/survaillance/survaillance4.jpeg',
                'assets/portfolio_image/survaillance/survaillance5.jpeg',
                'assets/portfolio_image/survaillance/survaillance6.jpeg',
                'assets/portfolio_image/survaillance/survaillance7.jpeg'
            ],
            tech: ['Window Manager', 'Webview', 'Web Socket Channel', 'Webrtc', 'Flutter Bloc State Management'],
            features: ['Multi-camera grid view (1x1, 2x2, 3x3 layouts)', 'For Multi platform- Desktop(Windows, Linux, Macos), Mobile(IOS, Android)', 'Multi-camera system support', 'Single Camera system support', 'Can drag and drop specific camera in specific mojik'],
            github: '#',
            demo: '#'
        },
        {
            id: 5,
            title: 'DayExam - Online Exam Application',
            category: 'Online Exam',
            description: 'This is a comprehensive mobile examination and learning platform built with Flutter, designed specifically for students preparing for BCS, HSC, SSC, and University Admission exams. The app is available for both Android and iOS, offering a smooth, responsive, and user-friendly experience. Students can take subject-wise exams, track their progress, and continuously improve through detailed performance analytics. With a clean UI and powerful backend features, the platform helps learners practice effectively and stay exam-ready.',
            image: 'assets/portfolio_image/exam.png',
            video: 'assets/portfolio_image/exam/Dayexam_Promo_Film.mp4',
            gallery: [
                'assets/portfolio_image/exam/exam1.jpg',
                'assets/portfolio_image/exam/exam2.jpg',
                'assets/portfolio_image/exam/exam3.jpg',
                'assets/portfolio_image/exam/exam4.jpg',
//                'assets/portfolio_image/exam/exam5.jpg',
//                'assets/portfolio_image/exam/exam6.jpg',
//                'assets/portfolio_image/exam/exam7.jpg',
//                'assets/portfolio_image/exam/exam8.jpg',
//                'assets/portfolio_image/exam/exam9.jpg',
            ],
            tech: ['SSLcommerz', 'Bkash', 'Youtube Player', 'Flutter Math Fork', 'Getx State Management'],
            features: ['Take exams for BCS, HSC, SSC, and Admission tests.', 'Topic-wise and chapter-wise quizzes.', 'Free and paid exam options.', 'Weekly and daily progress tracking.', 'Total tests taken, average score, total attempted questions, and earned points.', 'Ranking based on total score and performance', 'Multiple packages like Gold, Diamond, and Elite.', 'Secure payment options like Bkash and SSL Commerce.'],
            github: '#',
            demo: 'https://play.google.com/store/apps/details?id=com.datahost.day_exam&pcampaignid=web_share'
        },
        {
            id: 6,
            title: 'M2M Vehicle Tracking System - VTS App',
            category: 'VTS',
            description: 'A real-time Vehicle Tracking System integrated with Google Maps, providing live location updates, route playback, and accurate movement visualization for efficient fleet monitoring.',
            image: 'assets/portfolio_image/m2m.jpg',
            video: '#',
            gallery: [
                'assets/portfolio_image/m2m/m2m7.jpg',
                'assets/portfolio_image/m2m/m2m2.jpg',
                'assets/portfolio_image/m2m/m2m3.jpg',
                'assets/portfolio_image/m2m/m2m4.jpg',
                'assets/portfolio_image/m2m/m2m5.jpg',
                'assets/portfolio_image/m2m/m2m6.jpg'
            ],
            tech: ['SQFLite', 'Provider', 'Local Storage', 'Google Map', 'Firebase', 'Riverpod State Management', 'AESEncryption and Decryption'],
            features: ['Vehicle List', 'Vehicle Live Tracking', 'Tracking History Playback', 'Bkash and SSL Commerce Payment system', 'Push Notification'],
            github: '#',
            demo: 'https://play.google.com/store/apps/details?id=com.m2mbd.vts&pcampaignid=web_share'
        },
        {
            id: 7,
            title: 'Reserve-IT',
            category: 'Restaurant Reservation',
            description: 'ReserveIt is an intuitive restaurant discovery and reservation platform built with Flutter, designed to simplify the dining experience. The app helps users effortlessly find restaurants using a unique visual system—where a pepper mill icon scales to represent the value ratio between price and food quality. With seamless authentication, easy table booking, and a built-in review system, ReserveIt ensures users can discover, book, and enjoy their ideal dining experience in just a few taps.',
            image: 'assets/portfolio_image/reserveit.jpg',
            video: '#',
            gallery: [
                'assets/portfolio_image/reserveit.jpg',
            ],
            tech: ['Provider', 'Firebase', 'HTTPS', 'Google Map'],
            features: ['Smart Restaurant Discovery', 'Easy Reservation System', 'Google Map', 'Bkash and SSL Commerce Payment system', 'Push Notification'],
            github: '#',
            demo: '#'
        },
        {
            id: 8,
            title: 'Face Attendance System',
            category: 'Attendance System',
            description: 'This project is a secure facial recognition–based attendance system designed for quick and effortless check-ins. Employees mark attendance with one tap, which works only when connected to authorized company WiFi. The system captures a face image and verifies it in real time against company ERP records. No biometric or personal data is stored in the app, ensuring strong privacy and security. Instant success or failure feedback is shown, with a retake option for failed attempts.',
            image: 'assets/portfolio_image/faceAttendance.jpg',
            video: '#',
            gallery: [
                'assets/portfolio_image/faceAttendance/face1.png',
                'assets/portfolio_image/faceAttendance/face2.png',
                'assets/portfolio_image/faceAttendance/face3.png',
                'assets/portfolio_image/faceAttendance/face4.png',
                'assets/portfolio_image/faceAttendance/face5.png'
            ],
            tech: ['Flutter face api', 'Google mlkit face detection', 'Table calendar', 'Camera', 'Getx State Management'],
            features: ['Facial recognition attendance', 'Works only on authorized company WiFi', 'Real-time verification with ERP system', 'Simple one-tap process', 'Instant success/failure feedback', 'Retake option for failed attempts'],
            github: '#',
            demo: 'https://play.google.com/store/apps/details?id=com.neways.attendance&pcampaignid=web_share'
        },
    ]
};

// Projects Section
let activeCategory = 'All';
let selectedProject = null;
const imageLoaded = {};

function initProjectsSection() {
    const projects = document.getElementById('projects');
    projects.className = 'projects-section';
    projects.innerHTML = `
        <div class="projects-container">
            <!-- Header -->
            <div class="projects-header">
                <div class="projects-badge">💼 My Work</div>
                <h2 class="projects-title">Featured Projects</h2>
                <p class="projects-subtitle">
                    Explore my collection of innovative mobile applications built with Flutter, showcasing modern design and cutting-edge functionality
                </p>
            </div>

            <!-- Categories Filter -->
            <div class="categories-filter">
                ${projectsData.categories.map(category => `
                    <button 
                        class="category-btn ${activeCategory === category ? 'active' : ''}" 
                        data-category="${category}"
                    >
                        ${category}
                    </button>
                `).join('')}
            </div>

            <!-- Projects Grid -->
            <div class="projects-grid" id="projects-grid">
                ${renderProjects()}
            </div>

            <!-- Project Modal - Always include the modal container -->
            <div class="projects-modal" id="project-modal">
                <!-- Modal content will be injected here dynamically -->
            </div>
        </div>
    `;

    // Add event listeners
    setupEventListeners();
}

function renderProjects() {
    const filteredProjects = activeCategory === 'All'
        ? projectsData.projects
        : projectsData.projects.filter(project => project.category === activeCategory);

    return filteredProjects.map(project => `
        <div class="project-card" data-project-id="${project.id}">
            <div class="project-image-container">
                <img 
                    src="${project.image}" 
                    alt="${project.title}" 
                    class="project-image"
                    loading="lazy"
                >
                <div class="project-image-overlay"></div>
                <div class="project-category-badge">${project.category}</div>
            
            </div>
            
            <div class="project-content">
                <div class="project-title-row">
                    <h3 class="project-title">${project.title}</h3>
                    ${project.demo && project.demo !== '#' ? `
                        <a 
                            href="${project.demo}" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="project-play-link"
                            onclick="event.preventDefault(); event.stopPropagation(); window.open('${project.demo}', '_blank', 'noopener,noreferrer');"
                            title="View on Google Play Store"
                        >
                            <i class="ri-google-play-fill"></i>
                        </a>
                    ` : ''}
                </div>
                <p class="project-description">${project.description}</p>
                
                <div class="tech-tags">
                    ${project.tech.slice(0, 3).map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                    ${project.tech.length > 3 ? `
                        <span class="tech-more">+${project.tech.length - 3} more</span>
                    ` : ''}
                </div>
                
                <div class="project-footer">
                    <div class="project-type">
                        <div class="type-icon">
                            <i class="ri-smartphone-line"></i>
                        </div>
                        <span class="type-text">Mobile App</span>
                    </div>
                    <div class="project-view-details">
                        <span>View Details</span>
                        <i class="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProjectModal() {
    if (!selectedProject) return '';

    // Check categories that need special layout
    const isSocialCategory = selectedProject.category === 'Social';
    const isCctvCategory = selectedProject.category === 'CCTV Surveillance';
    const isRestaurantCategory = selectedProject.category === 'Restaurant Reservation';
    
    let specialGridClass = '';
    if (isSocialCategory) {
        specialGridClass = 'social-grid';
    } else if (isCctvCategory) {
        specialGridClass = 'cctv-grid';
    } else if (isRestaurantCategory) {
        specialGridClass = 'restaurant-grid';
    }

    return `
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <h3 class="modal-title">${selectedProject.title}</h3>
                    <p class="modal-subtitle">${selectedProject.category} • Flutter Development</p>
                </div>
                <button class="modal-close-btn" id="modal-close-btn">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            
            <div class="screenshots-section">
                <h4 class="screenshots-title">
                    <div class="screenshot-icon">
                        <i class="ri-image-line"></i>
                    </div>
                    App Screenshots
                    
                </h4>
                
                <!-- Project Video - shown only if video exists and is not '#' -->
                ${selectedProject.video && selectedProject.video !== '#' ? `
                    <div class="project-video-section">
                        <video 
                            class="project-video" 
                            controls 
                            preload="metadata"
                            poster="${selectedProject.image}"
                        >
                            <source src="${selectedProject.video}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ` : ''}
                
                <!-- Add special grid class if needed -->
                <div class="screenshots-grid ${specialGridClass}">
                    ${selectedProject.gallery.map((image, index) => `
                        <div class="screenshot-item">
                            ${!imageLoaded[index] ? `
                                <div class="screenshot-loader">
                                    <div class="loader-spinner"></div>
                                </div>
                            ` : ''}
                            <img 
                                src="${image}" 
                                alt="${selectedProject.title} Screenshot ${index + 1}"
                                class="screenshot-image"
                                onload="window.handleImageLoad(${index})"
                                loading="lazy"
                            >
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="project-details">
                <div class="details-grid">
                    <div class="description-section">
                        <h4>Project Description</h4>
                        <p class="project-description-text">${selectedProject.description}</p>
                        
                        <h4 class="features-section">Key Features</h4>
                        <ul class="features-list">
                            ${selectedProject.features.map(feature => `
                                <li class="feature-item">
                                    <div class="feature-check">
                                        <i class="ri-check-line"></i>
                                    </div>
                                    <span class="feature-text">${feature}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="tech-section">
                        <h4>Technologies Used</h4>
                        <div class="tech-tags-modal">
                            ${selectedProject.tech.map(tech => `
                                <span class="tech-tag-modal">${tech}</span>
                            `).join('')}
                        </div>
                        
                        <div class="action-buttons">
                            ${selectedProject.github && selectedProject.github !== '#' ? `
                                <a href="${selectedProject.github}" class="action-btn github-btn">
                                    <i class="ri-github-line"></i>
                                    View Code
                                </a>
                            ` : ''}
                            
                            ${selectedProject.demo && selectedProject.demo !== '#' ? `
                                <a href="${selectedProject.demo}" target="_blank" class="action-btn demo-btn">
                                    <i class="ri-external-link-line"></i>
                                    Google Play Store
                                </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
                
                ${selectedProject.roles ? `
                    <div class="roles-section">
                        <h4 class="roles-title">
                            <div class="roles-icon">
                                <i class="ri-user-settings-line"></i>
                            </div>
                            User Roles & Features
                        </h4>
                        <div class="roles-grid">
                            ${selectedProject.roles.map(role => `
                                <div class="role-card">
                                    <div class="role-header">
                                        <div class="role-icon">
                                            <i class="${getRoleIcon(role.name)}"></i>
                                        </div>
                                        <h5 class="role-name">${role.name}</h5>
                                    </div>
                                    <p class="role-description">${role.description}</p>
                                    <div class="role-features">
                                        ${role.features.map(feature => `
                                            <div class="role-feature-item">
                                                <div class="role-feature-check">
                                                    <i class="ri-check-line"></i>
                                                </div>
                                                <span class="role-feature-text">${feature}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function setupEventListeners() {
    // Category filter buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activeCategory = btn.dataset.category;
            
            // Update active button
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            
            // Update projects grid
            document.getElementById('projects-grid').innerHTML = renderProjects();
            
            // Reattach event listeners to new project cards
            setupProjectCardListeners();
        });
    });

    // Setup project card listeners
    setupProjectCardListeners();
}

function setupProjectCardListeners() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Skip if clicking the Google Play link
            if (e.target.closest('.project-play-link')) {
                return;
            }
            
            const projectId = parseInt(card.dataset.projectId);
            selectedProject = projectsData.projects.find(p => p.id === projectId);
            
            // Reset image loaded state for this project
            for (let i = 0; i < selectedProject.gallery.length; i++) {
                imageLoaded[i] = false;
            }
            
            // Open modal
            const modal = document.getElementById('project-modal');
            modal.innerHTML = renderProjectModal();
            modal.classList.add('active');
            
            // Setup modal close button
            document.getElementById('modal-close-btn').addEventListener('click', closeProjectModal);
            
            // Close modal when clicking outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeProjectModal();
                }
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', handleEscapeKey);
        });
    });
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    selectedProject = null;
    
    // Remove escape key listener
    document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
}

// Global function for image loading
window.handleImageLoad = function(index) {
    imageLoaded[index] = true;
    // Find the loader and remove it
    const loaders = document.querySelectorAll('.screenshot-loader');
    if (loaders[index]) {
        loaders[index].style.display = 'none';
    }
};

// Helper function to get icon for role
function getRoleIcon(roleName) {
    if (roleName.includes('Admin') || roleName.includes('Internal')) {
        return 'ri-shield-user-line';
    } else if (roleName.includes('Artist')) {
        return 'ri-mic-line';
    } else if (roleName.includes('Visitor')) {
        return 'ri-user-star-line';
    }
    return 'ri-user-line';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initProjectsSection();
});
