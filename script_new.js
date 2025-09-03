// EDEN PARFUM - Animated Link Tree
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on load
    const profile = document.querySelector('.profile');
    const links = document.querySelectorAll('.link-item');
    const footer = document.querySelector('.footer');

    // Add entrance animations
    setTimeout(() => {
        profile.style.opacity = '1';
        profile.style.transform = 'translateY(0)';
    }, 300);

    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 150));
    });

    setTimeout(() => {
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
    }, 1000);

    // Add click effects
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add floating animation to profile image
    const profileImg = document.getElementById('profileImg');
    let isFloating = false;

    setInterval(() => {
        if (!isFloating) {
            isFloating = true;
            profileImg.style.transform = 'translateY(-5px) scale(1.02)';
            setTimeout(() => {
                profileImg.style.transform = 'translateY(0) scale(1)';
                isFloating = false;
            }, 2000);
        }
    }, 4000);

    // Add sparkle effect on mouse move
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.95) {
            createSparkle(e.clientX, e.clientY);
        }
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }

    // Social media click tracking
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            console.log(`Clicked on ${platform}`);
        });
    });
});

// Initialize CSS animations
const style = document.createElement('style');
style.textContent = `
    .profile {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .link-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .footer {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(212, 175, 55, 0.3);
        animation: ripple-animation 0.6s ease;
        pointer-events: none;
        width: 20px;
        height: 20px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    @keyframes ripple-animation {
        to {
            transform: translate(-50%, -50%) scale(10);
            opacity: 0;
        }
    }

    .sparkle {
        position: fixed;
        width: 4px;
        height: 4px;
        background: #ffd700;
        border-radius: 50%;
        pointer-events: none;
        animation: sparkle-animation 1s ease forwards;
        z-index: 1000;
    }

    @keyframes sparkle-animation {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }

    #profileImg {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);
