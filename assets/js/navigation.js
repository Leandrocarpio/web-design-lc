// =============================================================================
// NAVIGATION.JS - Manejo de navegación y scroll optimizado
// =============================================================================
// Sistema completo de navegación con menú hamburguesa, scroll suave y detección
// de sección activa para UX profesional
// =============================================================================

export function initNavigation() {
    initNavToggle();
    initSmoothScroll();
    initActiveSection();
    initScrollBehavior();
}

/**
 * Toggle del menú móvil con animación y accesibilidad
 */
function initNavToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (!navToggle || !navList) return;

    // Toggle al hacer click en el botón
    navToggle.addEventListener('click', () => {
        toggleMenu();
    });

    // Cerrar menú al hacer click en un link
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && 
            !navList.contains(e.target) && 
            navList.classList.contains('open')) {
            closeMenu();
        }
    });

    // Cerrar menú al presionar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navList.classList.contains('open')) {
            closeMenu();
            navToggle.focus();
        }
    });

    function toggleMenu() {
        const isOpen = navList.classList.contains('open');
        
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function openMenu() {
        navList.classList.add('open');
        navToggle.setAttribute('aria-expanded', 'true');
        
        const icon = navToggle.querySelector('i');
        if (icon) icon.className = 'bi bi-x';
        
        // Prevenir scroll del body en mobile
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        
        const icon = navToggle.querySelector('i');
        if (icon) icon.className = 'bi bi-list';
        
        // Restaurar scroll del body
        document.body.style.overflow = '';
    }
}

/**
 * Scroll suave a secciones internas con offset para navbar fijo
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignorar si es solo "#" (links de toggle, etc)
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navbarHeight = document.querySelector('.site-nav')?.offsetHeight || 0;
                const offset = 80; // Ajuste adicional para respirar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Detecta la sección visible y marca el link activo en la navegación
 */
function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-15% 0px -15% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                updateActiveLink(id, navLinks);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Actualiza el link activo en la navegación
 */
function updateActiveLink(sectionId, navLinks) {
    // Remover clase activa de todos los links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Agregar clase activa al link correspondiente
    const activeLink = document.querySelector(`.nav-list a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

/**
 * Comportamiento adicional al hacer scroll (navbar sticky, etc)
 */
function initScrollBehavior() {
    const navbar = document.querySelector('.site-nav');
    if (!navbar) return;

    let lastScrollTop = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Agregar sombra al navbar después de scroll
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    }
}

/**
 * Utilidad: Scroll programático a una sección específica
 * @param {string} sectionId - ID de la sección destino (sin #)
 */
export function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const navbarHeight = document.querySelector('.site-nav')?.offsetHeight || 0;
    const offset = 80;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - offset;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}