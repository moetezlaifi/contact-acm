//script.js
document.addEventListener('DOMContentLoaded', function() {
    const contactCards = document.querySelectorAll('.contact-card');
    const logo = document.querySelector('.logo-placeholder');
    const headerLogos = document.querySelectorAll('.logo-img');
    
    headerLogos.forEach((logo, index) => {
        setTimeout(() => {
            logo.style.opacity = '1';
            logo.style.transform = 'scale(1)';
            logo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 300 + (index * 200));
    });

    headerLogos.forEach(logo => {
        logo.style.opacity = '0';
        logo.style.transform = 'scale(0.8)';
    });

    setTimeout(() => {
        logo.style.transform = 'scale(1.1)';
        logo.style.transition = 'transform 0.5s ease';
    }, 500);

    contactCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 800 + (index * 200));
    });

    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });
    
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
});