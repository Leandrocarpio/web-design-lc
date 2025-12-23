// =============================================================================
// PORTFOLIO.JS - Carrusel de proyectos profesional
// =============================================================================
// Gestión del carousel con navegación, autoplay y responsive
// Links y imágenes actualizadas con proyectos reales
// =============================================================================

export function initPortfolioCarousel() {
    const projects = [
        {
            title: "Mendoza Wine",
            description: "Landing page elegante para bodega premium con diseño moderno y completamente responsive. Enfocada en la experiencia del usuario y conversión.",
            image: "https://images.unsplash.com/photo-1558241665-89718b74c89c?q=80&w=1600&auto=format&fit=crop",
            technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UX/UI"],
            link: "https://leandrocarpio.github.io/Mendoza-Wine-Web/"
        },
        {
            title: "El Caverna Gym",
            description: "Sitio web profesional para gimnasio con enfoque en conversión y experiencia de usuario. Diseño moderno y optimizado para móviles.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop",
            technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Responsive"],
            link: "https://leandrocarpio.github.io/el-caverna-gym-landing/"
        },
        {
            title: "Libera tu Luz Interior",
            description: "Página web espiritual con diseño sereno y enfocado en la experiencia del usuario. Colores suaves y navegación intuitiva.",
            image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1600&auto=format&fit=crop",
            technologies: ["HTML5", "CSS3", "Design", "Accesibilidad", "Responsive"],
            link: "https://leandrocarpio.github.io/Libera-tu-luz-interior-web/"
        }
    ];

    const slidesContainer = document.getElementById('carouselSlides');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    
    let currentSlide = 0;
    let autoRotateInterval;

    function init() {
        createSlides();
        createIndicators();
        setupEventListeners();
        startAutoRotate();
        updateCarousel();
    }

    function createSlides() {
        slidesContainer.innerHTML = '';
        
        projects.forEach((project, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `
                <div class="project-preview" style="background-image: url('${project.image}')">
                    <div class="project-overlay">
                        <div class="project-content">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <div class="project-tech">
                                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                                <i class="bi bi-eye"></i> Ver Proyecto Live
                            </a>
                        </div>
                    </div>
                </div>
            `;
            slidesContainer.appendChild(slide);
        });
    }

    function createIndicators() {
        indicatorsContainer.innerHTML = '';
        
        projects.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = 'carousel-indicator';
            indicator.setAttribute('aria-label', `Ir al proyecto ${index + 1}`);
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });
    }

    function updateCarousel() {
        // Mover slides
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Actualizar indicadores
        const indicators = document.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
        
        // Actualizar botones (opcional: deshabilitar en extremos)
        // if (prevBtn) prevBtn.disabled = currentSlide === 0;
        // if (nextBtn) nextBtn.disabled = currentSlide === projects.length - 1;
    }

    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
        restartAutoRotate();
    }

    function nextSlide() {
        if (currentSlide < projects.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0; // Loop al principio
        }
        updateCarousel();
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = projects.length - 1; // Loop al final
        }
        updateCarousel();
    }

    function startAutoRotate() {
        autoRotateInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }
    }

    function restartAutoRotate() {
        stopAutoRotate();
        startAutoRotate();
    }

    function setupEventListeners() {
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                restartAutoRotate();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                restartAutoRotate();
            });
        }

        // Pausar auto-rotate al interactuar
        if (slidesContainer) {
            slidesContainer.addEventListener('mouseenter', stopAutoRotate);
            slidesContainer.addEventListener('mouseleave', startAutoRotate);
        }

        // Navegación por teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                restartAutoRotate();
            }
            if (e.key === 'ArrowRight') {
                nextSlide();
                restartAutoRotate();
            }
        });

        // Swipe para móviles
        setupSwipeEvents();
    }

    function setupSwipeEvents() {
        let startX = 0;
        let endX = 0;

        if (slidesContainer) {
            slidesContainer.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                stopAutoRotate();
            });

            slidesContainer.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
                restartAutoRotate();
            });
        }

        function handleSwipe() {
            const diff = startX - endX;
            const swipeThreshold = 50;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe izquierda
                } else {
                    prevSlide(); // Swipe derecha
                }
            }
        }
    }

    // Inicializar
    init();

    return {
        nextSlide,
        prevSlide,
        goToSlide,
        currentSlide: () => currentSlide
    };
}