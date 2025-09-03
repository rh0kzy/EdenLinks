/**
 * EDEN PARFUM - Script Principal
 * Site Link Tree interactif avec animations et fonctionnalités avancées
 */

class EdenParfumSite {
    constructor() {
        this.isFloating = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAnimations();
        this.setupIntersectionObserver();
    }

    /**
     * Configuration des écouteurs d'événements
     */
    setupEventListeners() {
        // Événements du DOM
        document.addEventListener('DOMContentLoaded', () => {
            this.animateOnLoad();
        });

        // Événements de la modal carte
        window.addEventListener('click', (event) => {
            this.handleModalClick(event);
        });

        document.addEventListener('keydown', (event) => {
            this.handleKeyPress(event);
        });

        // Effet de souris pour les particules
        document.addEventListener('mousemove', (event) => {
            this.handleMouseMove(event);
        });

        // Liens sociaux avec tracking
        this.setupSocialLinks();

        // Effets de clic sur les liens
        this.setupLinkEffects();
    }

    /**
     * Animation au chargement de la page
     */
    animateOnLoad() {
        const profile = document.querySelector('.profile');
        const links = document.querySelectorAll('.link-item');
        const footer = document.querySelector('.footer');

        // Animation du profil
        setTimeout(() => {
            if (profile) {
                profile.classList.add('loaded');
            }
        }, 300);

        // Animation des liens avec délai progressif
        links.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('loaded');
            }, 500 + (index * 150));
        });

        // Animation du footer
        setTimeout(() => {
            if (footer) {
                footer.classList.add('loaded');
            }
        }, 1000);
    }

    /**
     * Configuration de l'Intersection Observer pour les animations de scroll
     */
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        // Observer tous les éléments animables
        document.querySelectorAll('.link-item, .profile, .footer').forEach(el => {
            observer.observe(el);
        });
    }

    /**
     * Configuration des liens sociaux
     */
    setupSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                const platform = event.currentTarget.getAttribute('data-platform');
                this.trackSocialClick(platform);
                
                // Effet visuel de clic
                this.addClickEffect(event.currentTarget);
            });
        });
    }

    /**
     * Configuration des effets de clic sur les liens
     */
    setupLinkEffects() {
        const linkItems = document.querySelectorAll('.link-item');
        linkItems.forEach(link => {
            link.addEventListener('click', (event) => {
                this.addRippleEffect(event.currentTarget, event);
            });
        });
    }

    /**
     * Initialisation des animations continues
     */
    initAnimations() {
        this.startProfileImageFloat();
    }

    /**
     * Animation flottante de l'image de profil
     */
    startProfileImageFloat() {
        const profileImg = document.getElementById('profileImg');
        if (!profileImg) return;

        setInterval(() => {
            if (!this.isFloating) {
                this.isFloating = true;
                profileImg.style.transform = 'translateY(-5px) scale(1.02)';
                
                setTimeout(() => {
                    profileImg.style.transform = 'translateY(0) scale(1)';
                    this.isFloating = false;
                }, 2000);
            }
        }, 4000);
    }

    /**
     * Gestion du mouvement de la souris pour les particules
     */
    handleMouseMove(event) {
        // Créer des particules occasionnellement
        if (Math.random() > 0.97) {
            this.createSparkle(event.clientX, event.clientY);
        }
    }

    /**
     * Création d'une particule scintillante
     */
    createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        document.body.appendChild(sparkle);

        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.remove();
            }
        }, 1000);
    }

    /**
     * Effet ripple sur les liens
     */
    addRippleEffect(element, event) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        element.appendChild(ripple);

        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 600);
    }

    /**
     * Effet de clic sur les éléments
     */
    addClickEffect(element) {
        element.style.transform = 'scale(0.95)';
        setTimeout(() => {
            element.style.transform = '';
        }, 150);
    }

    /**
     * Tracking des clics sur les réseaux sociaux
     */
    trackSocialClick(platform) {
        console.log(`🌟 EDEN PARFUM - Clic sur ${platform}`);
        
        // Ici vous pouvez ajouter votre code d'analytics
        // Par exemple : gtag('event', 'click', { event_category: 'social', event_label: platform });
    }

    /**
     * Gestion des clics sur la modal
     */
    handleModalClick(event) {
        const modal = document.getElementById('mapModal');
        if (event.target === modal) {
            this.closeMapModal();
        }
    }

    /**
     * Gestion des touches du clavier
     */
    handleKeyPress(event) {
        if (event.key === 'Escape') {
            const modal = document.getElementById('mapModal');
            if (modal && modal.style.display === 'block') {
                this.closeMapModal();
            }
        }
    }

    /**
     * Ouverture de la modal carte
     */
    openMapModal() {
        const modal = document.getElementById('mapModal');
        if (!modal) return;

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Animation d'entrée
        setTimeout(() => {
            const content = modal.querySelector('.map-modal-content');
            if (content) {
                content.style.transform = 'scale(1)';
                content.style.opacity = '1';
            }
        }, 10);

        // Focus sur le bouton de fermeture pour l'accessibilité
        const closeButton = modal.querySelector('.close-modal');
        if (closeButton) {
            closeButton.focus();
        }
    }

    /**
     * Fermeture de la modal carte
     */
    closeMapModal() {
        const modal = document.getElementById('mapModal');
        if (!modal) return;

        const content = modal.querySelector('.map-modal-content');
        
        // Animation de sortie
        if (content) {
            content.style.transform = 'scale(0.9)';
            content.style.opacity = '0';
        }
        
        setTimeout(() => {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }, 300);
    }

    /**
     * Obtenir les directions vers EDEN PARFUM
     */
    getDirections() {
        if (!navigator.geolocation) {
            // Géolocalisation non supportée
            this.openExternalMap();
            return;
        }

        // Demander la position de l'utilisateur
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;
                const destinationUrl = `https://www.google.com/maps/dir/${userLat},${userLng}/https://maps.app.goo.gl/jvUTDNhXJmUkngid9`;
                window.open(destinationUrl, '_blank', 'noopener,noreferrer');
            },
            (error) => {
                console.log('Erreur de géolocalisation:', error.message);
                this.openExternalMap();
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 300000
            }
        );
    }

    /**
     * Ouvrir la carte externe
     */
    openExternalMap() {
        window.open('https://maps.app.goo.gl/jvUTDNhXJmUkngid9', '_blank', 'noopener,noreferrer');
    }
}

// Fonctions globales pour la compatibilité HTML
let edenSite;

// Initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    edenSite = new EdenParfumSite();
});

// Fonctions globales appelées depuis le HTML
function openMapModal() {
    if (edenSite) {
        edenSite.openMapModal();
    }
}

function closeMapModal() {
    if (edenSite) {
        edenSite.closeMapModal();
    }
}

function getDirections() {
    if (edenSite) {
        edenSite.getDirections();
    }
}

// Configuration des performances
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Ici vous pourriez enregistrer un service worker pour les performances
        console.log('🌟 EDEN PARFUM - Site chargé avec succès');
    });
}

// Export pour les modules (si nécessaire)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EdenParfumSite;
}
