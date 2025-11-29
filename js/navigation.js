// js/navigation.js - Manejo de navegación y scroll
export function initNavigation() {
    initNavToggle();
    initSmoothScroll();
    initActiveSection();
}

// Toggle del menú móvil
function initNavToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navList.classList.toggle('open');
            
            // Cambiar ícono
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.className = expanded ? 'bi bi-list' : 'bi bi-x';
            }
        });

        // Cerrar menú al hacer click en un link
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navList.classList.remove('open');
                // Restaurar ícono
                const icon = navToggle.querySelector('i');
                if (icon) icon.className = 'bi bi-list';
            });
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
                navToggle.setAttribute('aria-expanded', 'false');
                navList.classList.remove('open');
                const icon = navToggle.querySelector('i');
                if (icon) icon.className = 'bi bi-list';
            }
        });
    }
}

// Scroll suave
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Ajuste para el header fijo
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Sección activa en navegación
function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    
    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '-20% 0px -20% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Remover activo de todos los links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Agregar activo al link correspondiente
                    const activeLink = document.querySelector(`.nav-list a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }
}