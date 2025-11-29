// js/ui.js - Efectos de UI y componentes
export function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                toggleFAQItem(item, faqItems);
            });
        }
    });

    // Abrir primer item por defecto
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
}

function toggleFAQItem(clickedItem, allItems) {
    const isCurrentlyActive = clickedItem.classList.contains('active');
    
    // Cerrar todos los items
    allItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Abrir el item clickeado si no estaba activo
    if (!isCurrentlyActive) {
        clickedItem.classList.add('active');
    }
}

// Efectos de hover para tarjetas
export function initCardHoverEffects() {
    const cards = document.querySelectorAll('.problem-card, .portfolio-item, .pricing-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 40px rgba(15, 59, 102, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Animaciones de contadores (para estadísticas futuras)
export function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 segundos
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
    }, 16);
}

// Manejo de formularios
export function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
            }
        });
    });
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            showInputError(input, 'Este campo es requerido');
            isValid = false;
        } else {
            clearInputError(input);
            
            // Validación específica por tipo
            if (input.type === 'email' && !isValidEmail(input.value)) {
                showInputError(input, 'Por favor ingresa un email válido');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showInputError(input, message) {
    clearInputError(input);
    input.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #dc3545;
        font-size: 12px;
        margin-top: 5px;
    `;
    
    input.parentNode.appendChild(errorDiv);
}

function clearInputError(input) {
    input.classList.remove('error');
    const existingError = input.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

// Efectos de carga
export function showLoading(element) {
    element.innerHTML = `
        <div class="loading-spinner">
            <i class="bi bi-arrow-repeat"></i>
            <span>Cargando...</span>
        </div>
    `;
    element.disabled = true;
}

export function hideLoading(element, originalContent) {
    element.innerHTML = originalContent;
    element.disabled = false;
}

// Toast notifications
export function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="bi bi-${getToastIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i class="bi bi-x"></i>
        </button>
    `;
    
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--white);
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        border-left: 4px solid var(--${type === 'success' ? 'secondary' : 'primary'});
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Auto-remove después de 5 segundos
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

function getToastIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}