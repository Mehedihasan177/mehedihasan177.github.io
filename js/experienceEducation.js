// Experience Data
const experienceData = {
    experiences: [
        {
            title: 'Software Engineer(Flutter - Mobile Application Development)',
            company: 'Nexdecade Technology Pvt. Ltd.',
            period: '2025/06 - Present',
            location: 'Chandrashila Suvastu Tower, 69/1 Panthapath, Dhaka 1215',
            description: 'Lead mobile app developer. mentoring existing application and building new features application using Flutter framework.',
            achievements: [
                'Develop and maintain Flutter-based mobile applications with a focus on performance and scalability.',
                'Implement real-time features including vehicle tracking systems using Google Maps and live video streaming with WebRTC.',
                'Build and integrate live chat, audio, and video calling functionality using WebSocket and WebRTC.',
                'Manage application state efficiently using the BLoC state management pattern.',
                'Ensure application security by implementing data encryption and safe communication practices.',
                'Integrate push notifications using Firebase for real-time updates.',
                'Work with third-party libraries and packages to extend app functionality.',
                'Connect mobile and desktop applications with backend services through RESTful APIs.'
            ],
            skills: ['Team Leadership', 'Deploye to Play Store and App Store', 'Flutter Bloc', 'Getx', 'Riverpod', 'Performance Optimization']
        },
        {
            title: 'Flutter Developer',
            company: 'Neways International Company',
            period: '2024/03 – 2025/06',
            location: 'Shahabag, Dhaka, Bangladesh',
            description: 'Developed cross-platform mobile applications using Flutter, integrated APIs, and collaborated with Backend team.',
            achievements: [
                'Develop and maintain secure and scalable RESTful APIs using Laravel for seamless backend integration.',
                'Design and develop ERP-based mobile applications to manage employees, attendance, task management, leave requests, advance salary requests, and so on',
                'Build, deploy, and maintain cross-platform mobile applications for both iOS and Android.',
                'Integrate push notification services using Firebase and Pusher for real-time user updates.',
                'Manage application state using GetX, while also working with BLoC, Provider, and Riverpod as needed.',
                'Bridge mobile applications and backend services through efficient RESTful API integration.',
            ],
            skills: ['API Integration', 'UI Implementation', 'Testing', 'Google mlkit face detection', 'Flutter face api', 'Deploye to Play Store and App Store']
        },
        {
            title: 'Jr. Mobile Application Developer',
            company: 'BDJOBS.COM',
            period: '2022/10 – 2024/01',
            location: 'BDBL Bhaban, 12 Kawran Bazar, Dhaka 1215',
            description: 'Started as a junior developer, Lead mobile app development team, quickly developed the projects and contributed successful app launches.',
            achievements: [
                'Led the development and completion of an employee recruitment application, focusing on the job seeker selection process with video resume functionality to improve hiring efficiency and user experience.',
                'Designed and implemented smooth user journeys to streamline recruitment workflows and support effective decision-making.',
                'Managed application state using GetX and BLoC, with hands-on experience in Riverpod state management.',
                'Utilized and maintained third-party packages to enhance application features and overall stability.'
            ],
            skills: ['Team leadership', 'Getx State Management', 'Deploye to Play Store', 'Video Resume Integration']
        },
        {
            title: 'Flutter Application Developer',
            company: 'Root Devs',
            period: '2022/03 – 2022/09',
            location: 'Amigo 14 Square, Dhaka 1207',
            description: 'Started as a mobile application developer, contributed to building sports applications with live match streaming features, integrated essential third-party services such as push notifications, in-app purchases, Google Sign-In, and media players, and implemented GetX state management while converting Figma designs into responsive, high-quality mobile user interfaces that supported successful app launches.',
            achievements: [
                'Develop and maintain sports-based mobile applications with live match streaming features.',
                'Integrate and manage third-party services including push notifications, in-app purchases, Google Sign-In, Shared Preferences, and media players.',
                'Implement GetX state management for efficient data flow and application stability.',
                'Utilized and maintained third-party packages to enhance application features and overall stability.',
                'Convert Figma designs into fully responsive and user-friendly mobile interfaces.',
                'Ensure smooth performance, scalability, and successful deployment of applications.'
            ],
            skills: ['Live match streaming and media playback', 'Getx State Management', 'Responsive UI development and Figma-to-App implementation', 'RESTful API integration']
        },
        {
            title: 'Intern to Jr. Mobile Application Developer',
            company: 'Skoder Technologies',
            period: '2021/06 – 2022/02',
            location: 'Dhaka, Bangladesh',
            description: 'Developed two medical applications: Mediaid Pro for patients and Mediaid for doctors, focusing on seamless healthcare communication. Implemented real-time video calling between doctors and patients for easy consultations. Integrated RESTful APIs and created responsive, user-friendly mobile interfaces. Designed application layouts in Figma to ensure visually appealing and consistent designs.',
            achievements: [
                'Developed patient and doctor mobile applications for healthcare consultation.',
                'Implemented real-time video calling functionality between doctors and patients.',
                'Integrated RESTful APIs to connect mobile apps with backend services.',
                'Designed responsive and adaptive mobile interfaces from Figma designs.',
                'Created Figma designs for mobile applications during internship.',
                'Ensured smooth performance, usability, and visual consistency across devices.'
            ],
            skills: ['Figma', 'Responsive UI development', 'RESTful API integration']
        }
    ],
    
    educationHistory: [
        {
            degree: 'BSC IN ENGINEERING',
            institution: 'Bangladesh Army University of Engineering & Technologies',
            period: 'March, 2016 – March, 2020',
            location: 'Bangladesh',
            description: 'CGPA: 3.20 out of 4.00',
            icon: 'assets/portfolio_image/bauet.png'
        },
        {
            degree: 'Higher Secondary Certificate',
            institution: 'Bogura Cantonment Public School & College',
            period: '2012 – 2014',
            location: 'Bogura, Bangladesh',
            description: 'GPA: 5.00 out of 5.00',
            icon: 'assets/portfolio_image/bogura.png'
        },
        {
            degree: 'Secondary School Certificate',
            institution: 'Bogura Cantonment Public School & College',
            period: '2010 – 2012',
            location: 'Bogura, Bangladesh',
            description: 'GPA: 5.00 out of 5.00',
            icon: 'assets/portfolio_image/bogura.png'
        }
    ],
    
    certifications: [
        {
            name: 'Udemy Flutter Certification',
            issuer: 'Udemy',
            year: '01 July, 2021',
            icon: 'assets/portfolio_image/udemy.png'
        },
        {
            name: 'Amar Bangladesh Foundation Certification',
            issuer: 'Amar Bangladesh Foundation Certification',
            year: '30 January, 2021',
            icon: 'assets/portfolio_image/amar_bangladesh_foundation.png'
        },
        {
            name: 'Skill Development for Mobile Game & Application Project Certification',
            issuer: 'ICT Division, Bangladesh',
            year: 'November, 2018',
            icon: 'assets/portfolio_image/ict_division.png'
        }
    ]
};

// Experience Section
function initExperienceSection() {
    const experience = document.getElementById('experience');
    experience.className = 'experience-section';
    experience.innerHTML = `
        <div class="experience-container">
            <!-- Header -->
            <div class="experience-header">
                <h2 class="experience-title">Experience & Journey</h2>
                <p class="experience-subtitle">
                    My professional growth and achievements in Flutter development over the years
                </p>
            </div>

            <!-- Timeline -->
            <div class="timeline-container">
                <div class="timeline-line"></div>
                
                ${experienceData.experiences.map((exp, index) => `
                    <div class="timeline-item">
                        <div class="timeline-dot">
                            <div class="timeline-dot-inner"></div>
                        </div>
                        
                        <div class="timeline-content">
                            <div class="experience-card">
                                <div class="experience-header-row">
                                    <div>
                                        <h3 class="experience-title-text">${exp.title}</h3>
                                        <p class="experience-company">${exp.company}</p>
                                        <p class="experience-location">${exp.location}</p>
                                    </div>
                                    <span class="experience-period">${exp.period}</span>
                                </div>
                                
                                <p class="experience-description">${exp.description}</p>
                                
                                <div class="achievements-section">
                                    <h4>Responsibilities:</h4>
                                    <ul class="achievements-list">
                                        ${exp.achievements.map(achievement => `
                                            <li class="achievement-item">
                                                <div class="achievement-bullet"></div>
                                                ${achievement}
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                                
                                <div class="skills-tags">
                                    ${exp.skills.map(skill => `
                                        <span class="skill-tag">${skill}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Education Section -->
            <div class="education-section">
                <h3 class="education-title">Education</h3>
                <div class="education-container">
                    <div class="education-list">
                        ${experienceData.educationHistory.map((edu, index) => {
                            // Generate initials for fallback
                            const initials = edu.institution
                                .split(' ')
                                .map(word => word[0])
                                .join('')
                                .slice(0, 2)
                                .toUpperCase();
                            
                            return `
                                <div class="education-item">
                                    <div class="education-icon-container">
                                        <div class="education-icon" id="edu-icon-${index}">
                                            <img 
                                                src="${edu.icon}" 
                                                alt="${edu.institution}"
                                                onerror="handleEducationIconError(${index}, '${initials}')"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div class="education-info">
                                        <h4 class="education-degree">${edu.degree}</h4>
                                        <p class="education-institution">${edu.institution}</p>
                                        <p class="education-location">${edu.location}</p>
                                        <p class="education-description">${edu.description}</p>
                                        <div class="education-period">
                                            <span class="period-badge">${edu.period}</span>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>

            <!-- Certifications Section -->
            <div class="certifications-section">
                <h3 class="certifications-title">Certifications</h3>
                <div class="certifications-grid">
                    ${experienceData.certifications.map((cert, index) => `
                        <div class="certification-card">
                            <div class="certification-icon">
                                <img src="${cert.icon}" alt="${cert.name}" />
                            </div>
                            <h4 class="certification-name">${cert.name}</h4>
                            <p class="certification-issuer">${cert.issuer}</p>
                            <p class="certification-year">${cert.year}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Handle education icon error
function handleEducationIconError(index, initials) {
    const iconContainer = document.getElementById(`edu-icon-${index}`);
    if (iconContainer) {
        iconContainer.innerHTML = `<span class="education-fallback">${initials}</span>`;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initExperienceSection();
});