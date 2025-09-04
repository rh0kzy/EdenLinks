// EDEN PARFUM - Script Optimisé
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌟 EDEN PARFUM - Site chargé');
    
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
    const links = document.querySelectorAll('.link-item');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Effet de ripple simple
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

    // Tracking des liens sociaux
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            console.log(`Clic sur ${platform}`);
        });
    });
});

// Fonction pour obtenir les directions vers EDEN PARFUM
function getDirections() {
    const destination = "Q354+C5M, Pl. du 1er Mai, Sidi M'Hamed 16000, Algeria";
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                const url = `https://www.google.com/maps/dir/${userLat},${userLng}/${encodeURIComponent(destination)}`;
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

// Animations CSS essentielles uniquement
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(10);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);
