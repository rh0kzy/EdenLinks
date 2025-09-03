// EDEN PARFUM - Script Simple et Fonctionnel
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌟 EDEN PARFUM - Site chargé');
    
    // Animation d'entrée simple
    const profile = document.querySelector('.profile');
    const links = document.querySelectorAll('.link-item');
    const footer = document.querySelector('.footer');

    // Ajouter les animations d'entrée
    setTimeout(() => {
        if (profile) {
            profile.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    }, 100);

    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.animation = 'fadeInUp 0.6s ease forwards';
        }, 300 + (index * 150));
    });

    if (footer) {
        setTimeout(() => {
            footer.style.animation = 'fadeInUp 0.6s ease forwards';
        }, 800);
    }

    // Animation flottante de l'image de profil
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        setInterval(() => {
            profileImg.style.transform = 'translateY(-5px) scale(1.02)';
            setTimeout(() => {
                profileImg.style.transform = 'translateY(0) scale(1)';
            }, 2000);
        }, 4000);
    }

    // Effets de clic sur les liens
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Effet de ripple
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(212, 175, 55, 0.3);
                width: 20px;
                height: 20px;
                left: ${x}px;
                top: ${y}px;
                transform: translate(-50%, -50%) scale(0);
                animation: ripple 0.6s ease forwards;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Effet sparkle au mouvement de la souris
    document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.95) {
            createSparkle(e.clientX, e.clientY);
        }
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
            z-index: 1000;
            animation: sparkle 1s ease forwards;
        `;
        
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }

    // Tracking des liens sociaux
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            console.log(`Clic sur ${platform}`);
        });
    });
});

// Fonctions pour la modal de carte
function openMapModal() {
    const modal = document.getElementById('mapModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            const content = modal.querySelector('.map-modal-content');
            if (content) {
                content.style.animation = 'slideIn 0.4s ease forwards';
            }
        }, 10);
    }
}

function closeMapModal() {
    const modal = document.getElementById('mapModal');
    if (modal) {
        const content = modal.querySelector('.map-modal-content');
        if (content) {
            content.style.animation = 'slideOut 0.3s ease forwards';
        }
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

function getDirections() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                const url = `https://www.google.com/maps/dir/${userLat},${userLng}/https://maps.app.goo.gl/jvUTDNhXJmUkngid9`;
                window.open(url, '_blank');
            },
            function() {
                window.open('https://maps.app.goo.gl/jvUTDNhXJmUkngid9', '_blank');
            }
        );
    } else {
        window.open('https://maps.app.goo.gl/jvUTDNhXJmUkngid9', '_blank');
    }
}

// Fermer la modal en cliquant à l'extérieur
window.addEventListener('click', function(event) {
    const modal = document.getElementById('mapModal');
    if (event.target === modal) {
        closeMapModal();
    }
});

// Fermer la modal avec Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('mapModal');
        if (modal && modal.style.display === 'block') {
            closeMapModal();
        }
    }
});

// Ajouter les animations CSS nécessaires
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
        }
    }
    
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(10);
            opacity: 0;
        }
    }
    
    @keyframes sparkle {
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
`;
document.head.appendChild(styleSheet);
