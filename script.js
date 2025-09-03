// Theme Management
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to 'light'
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Admin Panel Management
const adminToggle = document.getElementById('adminToggle');
const adminPanel = document.getElementById('adminPanel');
const closeAdmin = document.getElementById('closeAdmin');

adminToggle.addEventListener('click', () => {
    adminPanel.classList.add('active');
});

closeAdmin.addEventListener('click', () => {
    adminPanel.classList.remove('active');
});

// Close admin panel when clicking outside
document.addEventListener('click', (e) => {
    if (!adminPanel.contains(e.target) && !adminToggle.contains(e.target)) {
        adminPanel.classList.remove('active');
    }
});

// Link Management
const linksContainer = document.querySelector('.links-container');

// Default links data (can be customized)
let linksData = [
    {
        title: "Latest Issue",
        description: "Read our newest magazine edition",
        url: "https://example.com/latest-issue",
        icon: "fas fa-book-open",
        category: "magazine"
    },
    {
        title: "Shop Merchandise",
        description: "Exclusive Eden Magazine products",
        url: "https://example.com/shop",
        icon: "fas fa-shopping-bag",
        category: "shop"
    },
    {
        title: "Subscribe",
        description: "Get premium access to all content",
        url: "https://example.com/subscribe",
        icon: "fas fa-star",
        category: "subscription"
    },
    {
        title: "Magazine Archive",
        description: "Browse past issues and articles",
        url: "https://example.com/archive",
        icon: "fas fa-archive",
        category: "archive"
    },
    {
        title: "Blog",
        description: "Daily articles and insights",
        url: "https://example.com/blog",
        icon: "fas fa-edit",
        category: "blog"
    },
    {
        title: "Newsletter",
        description: "Weekly updates delivered to your inbox",
        url: "https://example.com/newsletter",
        icon: "fas fa-envelope",
        category: "newsletter"
    },
    {
        title: "Upcoming Events",
        description: "Join our workshops and meetups",
        url: "https://example.com/events",
        icon: "fas fa-calendar-alt",
        category: "events"
    },
    {
        title: "Contact Us",
        description: "Get in touch with our team",
        url: "https://example.com/contact",
        icon: "fas fa-phone",
        category: "contact"
    }
];

// Load saved links from localStorage
const savedLinks = localStorage.getItem('magazineLinks');
if (savedLinks) {
    linksData = JSON.parse(savedLinks);
}

// Social media links
let socialLinks = {
    instagram: "https://instagram.com/edenmagazine",
    facebook: "https://facebook.com/edenmagazine",
    twitter: "https://twitter.com/edenmagazine",
    youtube: "https://youtube.com/edenmagazine",
    linkedin: "https://linkedin.com/company/edenmagazine"
};

// Load saved social links
const savedSocials = localStorage.getItem('socialLinks');
if (savedSocials) {
    socialLinks = JSON.parse(savedSocials);
}

// Profile data
let profileData = {
    name: "Eden Magazine",
    bio: "Your source for lifestyle, wellness, and inspiration. Discover stories that matter.",
    image: "https://via.placeholder.com/120/4CAF50/white?text=EDEN"
};

// Load saved profile data
const savedProfile = localStorage.getItem('profileData');
if (savedProfile) {
    profileData = JSON.parse(savedProfile);
}

// Initialize the page
function initializePage() {
    updateProfile();
    updateSocialLinks();
    renderLinks();
    animateLinks();
}

// Update profile information
function updateProfile() {
    document.querySelector('.profile-name').textContent = profileData.name;
    document.querySelector('.profile-bio').textContent = profileData.bio;
    document.getElementById('profileImg').src = profileData.image;
}

// Update social media links
function updateSocialLinks() {
    Object.keys(socialLinks).forEach(platform => {
        const socialLink = document.querySelector(`[data-platform="${platform}"]`);
        if (socialLink && socialLinks[platform]) {
            socialLink.href = socialLinks[platform];
        }
    });
}

// Render links
function renderLinks() {
    linksContainer.innerHTML = '';
    
    linksData.forEach((link, index) => {
        const linkElement = createLinkElement(link, index);
        linksContainer.appendChild(linkElement);
    });
}

// Create individual link element
function createLinkElement(link, index) {
    const linkDiv = document.createElement('div');
    linkDiv.className = 'link-item';
    linkDiv.setAttribute('data-category', link.category);
    linkDiv.style.setProperty('--index', index);
    
    linkDiv.innerHTML = `
        <i class="${link.icon}"></i>
        <div class="link-content">
            <span class="link-title">${link.title}</span>
            <span class="link-description">${link.description}</span>
        </div>
        <i class="fas fa-external-link-alt"></i>
    `;
    
    // Add click event to open link
    linkDiv.addEventListener('click', () => {
        // Track click analytics (you can implement this)
        trackLinkClick(link.title);
        
        // Open link in new tab
        window.open(link.url, '_blank');
        
        // Add click animation
        linkDiv.style.transform = 'scale(0.98)';
        setTimeout(() => {
            linkDiv.style.transform = '';
        }, 150);
    });
    
    return linkDiv;
}

// Animate links on load
function animateLinks() {
    const links = document.querySelectorAll('.link-item');
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            link.style.transition = 'all 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Track link clicks (placeholder for analytics)
function trackLinkClick(linkTitle) {
    console.log(`Link clicked: ${linkTitle}`);
    // Here you can integrate with Google Analytics, Facebook Pixel, etc.
    
    // Example: Google Analytics tracking
    // gtag('event', 'click', {
    //     event_category: 'outbound',
    //     event_label: linkTitle
    // });
}

// Admin Panel Functionality
document.getElementById('addLink').addEventListener('click', addNewLink);
document.getElementById('updateSocials').addEventListener('click', updateSocialsFromAdmin);

// Update profile from admin panel
document.getElementById('profileName').addEventListener('input', updateProfileFromAdmin);
document.getElementById('profileBio').addEventListener('input', updateProfileFromAdmin);
document.getElementById('profileImage').addEventListener('input', updateProfileFromAdmin);

function addNewLink() {
    const title = document.getElementById('linkTitle').value.trim();
    const description = document.getElementById('linkDescription').value.trim();
    const url = document.getElementById('linkURL').value.trim();
    const icon = document.getElementById('linkIcon').value;
    
    if (!title || !description || !url) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidURL(url)) {
        showNotification('Please enter a valid URL', 'error');
        return;
    }
    
    const newLink = {
        title,
        description,
        url,
        icon,
        category: 'custom'
    };
    
    linksData.push(newLink);
    saveLinks();
    renderLinks();
    animateLinks();
    
    // Clear form
    document.getElementById('linkTitle').value = '';
    document.getElementById('linkDescription').value = '';
    document.getElementById('linkURL').value = '';
    document.getElementById('linkIcon').value = 'fas fa-link';
    
    showNotification('Link added successfully!', 'success');
}

function updateSocialsFromAdmin() {
    socialLinks.instagram = document.getElementById('instagramLink').value.trim();
    socialLinks.facebook = document.getElementById('facebookLink').value.trim();
    socialLinks.twitter = document.getElementById('twitterLink').value.trim();
    socialLinks.youtube = document.getElementById('youtubeLink').value.trim();
    socialLinks.linkedin = document.getElementById('linkedinLink').value.trim();
    
    localStorage.setItem('socialLinks', JSON.stringify(socialLinks));
    updateSocialLinks();
    showNotification('Social links updated!', 'success');
}

function updateProfileFromAdmin() {
    const name = document.getElementById('profileName').value.trim();
    const bio = document.getElementById('profileBio').value.trim();
    const image = document.getElementById('profileImage').value.trim();
    
    if (name) profileData.name = name;
    if (bio) profileData.bio = bio;
    if (image && isValidURL(image)) profileData.image = image;
    
    localStorage.setItem('profileData', JSON.stringify(profileData));
    updateProfile();
}

// Utility functions
function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

function saveLinks() {
    localStorage.setItem('magazineLinks', JSON.stringify(linksData));
}

function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Load admin panel with current data
function loadAdminPanel() {
    document.getElementById('profileName').value = profileData.name;
    document.getElementById('profileBio').value = profileData.bio;
    document.getElementById('profileImage').value = profileData.image;
    
    document.getElementById('instagramLink').value = socialLinks.instagram || '';
    document.getElementById('facebookLink').value = socialLinks.facebook || '';
    document.getElementById('twitterLink').value = socialLinks.twitter || '';
    document.getElementById('youtubeLink').value = socialLinks.youtube || '';
    document.getElementById('linkedinLink').value = socialLinks.linkedin || '';
}

// Add double-click to edit functionality for links
linksContainer.addEventListener('dblclick', (e) => {
    const linkItem = e.target.closest('.link-item');
    if (linkItem && confirm('Delete this link?')) {
        const linkTitle = linkItem.querySelector('.link-title').textContent;
        linksData = linksData.filter(link => link.title !== linkTitle);
        saveLinks();
        renderLinks();
        animateLinks();
        showNotification('Link deleted!', 'success');
    }
});

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    loadAdminPanel();
    
    // Add some interactive effects
    addInteractiveEffects();
});

// Interactive effects
function addInteractiveEffects() {
    // Parallax effect for profile image
    const profileImage = document.querySelector('.profile-image');
    
    document.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;
        const { innerWidth: width, innerHeight: height } = window;
        
        const xRotation = ((y - height / 2) / height) * 10;
        const yRotation = ((x - width / 2) / width) * 10;
        
        profileImage.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
    
    // Reset on mouse leave
    document.addEventListener('mouseleave', () => {
        profileImage.style.transform = '';
    });
    
    // Add ripple effect to buttons
    document.querySelectorAll('.link-item, .social-link, .theme-btn').forEach(button => {
        button.addEventListener('click', createRipple);
    });
}

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add CSS for ripple animation
const rippleCSS = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        adminPanel.classList.remove('active');
    }
    
    // Quick admin access with Ctrl+Shift+A
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        adminPanel.classList.toggle('active');
    }
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Call lazy loading if needed
lazyLoadImages();
