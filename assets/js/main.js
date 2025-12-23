// js/main.js - Módulo principal
import { initNavigation } from './navigation.js';
import { initPortfolioCarousel } from './portfolio.js';
import { initFAQ } from './ui.js';

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando Diseño Web LC...');
    
    // Inicializar módulos
    initNavigation();
    initFAQ();
    
    // Inicializar carousel si existe la sección
    if (document.getElementById('portfolio')) {
        initPortfolioCarousel();
    }
    
    // Efectos adicionales
    initScrollAnimations();
    initButtonEffects();
});

// Animaciones al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    document.querySelectorAll('.problem-card, .timeline-step, .portfolio-item').forEach(el => {
        observer.observe(el);
    });
}

// Efectos en botones
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .carousel-btn, .project-link');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Exportar para otros módulos si es necesario
export { initScrollAnimations, initButtonEffects };