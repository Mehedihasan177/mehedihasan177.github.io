// Contact Data
const contactData = {
    phoneNumber: '+8801877286284',
    whatsappLink: 'https://wa.me/8801877286284',
    
    contactInfo: [
        {
            icon: 'ri-mail-line',
            label: 'Email',
            value: 'mdmehedihasan4051@gmail.com',
            link: 'mailto:mdmehedihasan4051@gmail.com',
            isLink: true,
            newTab: false
        },
        {
            icon: 'ri-phone-line',
            label: 'Phone',
            value: '+8801877286284',
            link: 'https://wa.me/8801877286284',
            isLink: true,
            newTab: false
        },
        {
            icon: 'ri-map-pin-line',
            label: 'Location',
            value: 'Dhaka, Bangladesh',
            link: '#',
            isLink: false,
            newTab: false
        },
        {
            icon: 'ri-linkedin-line',
            label: 'LinkedIn',
            value: 'linkedin.com/in/mehedihasanmehedi/',
            link: 'https://www.linkedin.com/in/mehedihasanmehedi/',
            isLink: true,
            newTab: true
        }
    ],
    
    whyWorkWithMe: [
        '4+ years of proven Flutter expertise',
        'Cross-platform development efficiency',
        'Clean, maintainable code practices',
        'Timely delivery and communication'
    ]
};

// Contact Section
function initContactSection() {
    const contact = document.getElementById('contact');
    if (!contact) {
        console.error('Contact section not found!');
        return;
    }
    
    contact.className = 'contact-section';
    contact.innerHTML = `
        <div class="contact-container">
            <!-- Header -->
            <div class="contact-header">
                <h2 class="contact-title">Let's Work Together</h2>
                <p class="contact-subtitle">
                    Ready to bring your mobile app idea to life? I'd love to hear about your project.
                </p>
            </div>

            <!-- Contact Content -->
            <div class="contact-content">
                <h3 class="contact-subheading">Get In Touch</h3>
                
                <!-- Contact Info Grid -->
                <div class="contact-info-grid">
                    ${contactData.contactInfo.map((info, index) => {
                        if (info.isLink) {
                            // Clickable links (Email, Phone, LinkedIn)
                            return `
                                <a 
                                    href="${info.link}"
                                    ${info.newTab ? 'target="_blank" rel="noopener noreferrer"' : ''}
                                    class="contact-info-card"
                                >
                                    <div class="contact-icon-container">
                                        <i class="${info.icon} contact-icon"></i>
                                    </div>
                                    <div class="contact-info-content">
                                        <p class="contact-info-label">${info.label}</p>
                                        <p class="contact-info-value">${info.value}</p>
                                    </div>
                                    <div class="contact-arrow">
                                        <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                </a>
                            `;
                        } else {
                            // Non-clickable Location
                            return `
                                <div class="contact-info-card non-clickable">
                                    <div class="contact-icon-container">
                                        <i class="${info.icon} contact-icon"></i>
                                    </div>
                                    <div class="contact-info-content">
                                        <p class="contact-info-label">${info.label}</p>
                                        <p class="contact-info-value">${info.value}</p>
                                    </div>
                                </div>
                            `;
                        }
                    }).join('')}
                </div>

                <!-- Why Work With Me Section -->
                <div class="why-work-section">
                    <h4 class="why-work-title">Why Work With Me?</h4>
                    <div class="why-work-grid">
                        ${contactData.whyWorkWithMe.map((item, index) => `
                            <div class="why-work-item">
                                <div class="why-work-icon">
                                    <i class="ri-check-line"></i>
                                </div>
                                <span class="why-work-text">${item}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing contact section...');
    initContactSection();
});

// Also try to initialize on window load as backup
window.addEventListener('load', function() {
    console.log('Window loaded, checking contact section...');
    const contact = document.getElementById('contact');
    if (contact && contact.innerHTML.trim() === '') {
        console.log('Contact section is empty, re-initializing...');
        initContactSection();
    }
});