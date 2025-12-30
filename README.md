# 🚀 Diseño Web LC - Portfolio Profesional

> Sitio web profesional de servicios de desarrollo frontend especializado en landing pages de alta conversión para emprendedores y pymes.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-100%25-brightgreen)
![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

---

## 🚀 Demo en Vivo

**[Ver Demo →](https://leandrocarpio.github.io/web-design-lc/)**

![Diseño Web LC](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Arquitectura](#️-arquitectura)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Características Técnicas](#-características-técnicas)
- [Cómo Replicar](#-cómo-replicar-este-proyecto)
- [Para Reclutadores](#-para-reclutadores)
- [Autor](#-autor)
- [Licencia](#-licencia)

---

## 🎯 Descripción

**Diseño Web LC** es mi sitio web profesional donde ofrezco servicios de desarrollo frontend especializado en landing pages de alta conversión. El proyecto demuestra arquitectura modular ES6, diseño UX/UI profesional y buenas prácticas de desarrollo.

### Objetivos del Proyecto

- **Para reclutadores:** Código limpio, arquitectura modular y buenas prácticas
- **Para clientes:** Propuesta de valor clara con portfolio de proyectos reales
- **Para desarrolladores:** Código documentado, replicable y escalable

---

## ✨ Características

### Diseño y UX
- ✅ Diseño 100% responsive mobile-first
- ✅ Menú hamburguesa animado con cierre automático
- ✅ Hero full-screen impactante
- ✅ Timeline visual del proceso
- ✅ Animaciones suaves al scroll

### Funcionalidades
- ✅ Portfolio interactivo con carousel automático
- ✅ Sistema de FAQ con accordion
- ✅ Página CV profesional con proyectos destacados
- ✅ Formulario de contacto funcional
- ✅ Integración redes sociales (GitHub, LinkedIn, WhatsApp)

### Performance y SEO
- ✅ Arquitectura modular ES6
- ✅ Lazy loading de imágenes
- ✅ Meta tags completos (Open Graph)
- ✅ HTML semántico
- ✅ Optimización de velocidad

---

## 🛠️ Tecnologías

### Frontend
- **HTML5** → Estructura semántica
- **CSS3** → Variables, Flexbox, Grid, Animaciones
- **JavaScript ES6+** → Módulos, IntersectionObserver, Eventos

### Framework/Librerías
- **Bootstrap Icons** → Iconografía profesional
- **Unsplash** → Imágenes de alta calidad

### Herramientas
- **Git** → Control de versiones
- **GitHub Pages** → Hosting gratuito
- **Live Server** → Desarrollo local

---

## 🗂️ Arquitectura

Arquitectura modular ES6 para máxima escalabilidad:

```
index.html
    │
    ├─── JavaScript Modular (5 archivos)
    │    ├── main.js         → Punto de entrada
    │    ├── navigation.js   → Navbar y navegación
    │    ├── portfolio.js    → Carousel de proyectos
    │    ├── ui.js           → Componentes UI (FAQ)
    │    └── storage.js      → Gestión de datos
    │
    └─── CSS Modular (3 archivos)
         ├── styles.css          → Estilos principales
         ├── styles-about.css    → Estilos CV
         └── styles-contact.css  → Estilos contacto
```

---

## 📦 Instalación

### Opción 1: Clonar y usar localmente

```bash
# Clonar repositorio
git clone https://github.com/Leandrocarpio/web-design-lc.git

# Navegar al directorio
cd web-design-lc

# Abrir con Live Server (VS Code)
# O abrir index.html en navegador moderno
```

> ⚠️ **Importante:** Los ES Modules requieren servidor HTTP. No abrir directamente el archivo.

### Opción 2: Ver online

Visita: **[https://leandrocarpio.github.io/web-design-lc/](https://leandrocarpio.github.io/web-design-lc/)**

---

## 📁 Estructura del Proyecto

```
web-design-lc/
│
├── index.html              # Página principal
├── about.html              # CV profesional
├── contact.html            # Formulario contacto
├── README.md               # Documentación
├── LICENSE                 # Licencia MIT
│
└── assets/
    ├── css/
    │   ├── styles.css          # Estilos index
    │   ├── styles-about.css    # Estilos CV
    │   └── styles-contact.css  # Estilos contacto
    │
    ├── js/
    │   ├── main.js             # Inicialización
    │   ├── navigation.js       # Navegación
    │   ├── portfolio.js        # Carousel
    │   ├── ui.js               # Componentes UI
    │   └── storage.js          # Datos
    │
    └── img/
        ├── CV.jpg              # Foto profesional
        └── Servicio.png        # Imagen servicio
```

---

## 🔥 Características Técnicas

### 1. Menú Hamburguesa Profesional

- Animación suave con transición CSS
- Cierre automático al click en links
- Cierre con tecla ESC
- Previene scroll del body cuando está abierto
- ARIA labels para accesibilidad

### 2. Carousel de Portfolio

```javascript
// Carousel con autoplay y navegación completa
const projects = [
    {
        title: "Mendoza Wine",
        image: "...",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        link: "https://..."
    }
];
```

**Características:**
- Navegación con flechas y teclado (← →)
- Autoplay con pausa al interactuar
- Swipe en dispositivos táctiles
- Indicadores interactivos

### 3. CV con Proyectos Destacados

**Estructura optimizada:**
- Columna izquierda: Experiencia + Proyectos + Educación
- Columna derecha: Skills técnicas y blandas
- Balance visual perfecto
- Links a proyectos reales en producción

### 4. Sistema de FAQ

- Accordion con transiciones suaves
- Solo una pregunta abierta a la vez
- Iconos animados (rotación 180°)
- Click para expandir/colapsar

---

## 🎨 Cómo Replicar este Proyecto

### 1. Clonar

```bash
git clone https://github.com/Leandrocarpio/web-design-lc.git
cd web-design-lc
```

### 2. Personalizar Colores

```css
/* assets/css/styles.css */
:root {
    --primary: #TU_COLOR;
    --secondary: #TU_COLOR;
}
```

### 3. Modificar Proyectos del Portfolio

Edita `assets/js/portfolio.js`:

```javascript
const projects = [
    {
        title: "Tu Proyecto",
        description: "Descripción",
        image: "URL_imagen",
        technologies: ["Tech1", "Tech2"],
        link: "https://tu-proyecto.com"
    }
];
```

### 4. Actualizar CV

Edita `about.html` sección "Proyectos Destacados" con tus datos.

### 5. Configurar Redes Sociales

```html
<!-- Footer y contacto -->
<a href="https://github.com/TU_USUARIO">GitHub</a>
<a href="https://linkedin.com/in/TU_PERFIL">LinkedIn</a>
<a href="https://wa.me/TU_NUMERO">WhatsApp</a>
```

---

## 💡 Para Reclutadores

### Buenas Prácticas Implementadas

✅ **Arquitectura Modular ES6**
- Separación de responsabilidades (MVC pattern)
- ES Modules para mejor organización
- Código reutilizable y escalable

✅ **Clean Code**
- Nombres descriptivos y semánticos
- Comentarios estratégicos útiles
- Funciones con responsabilidad única

✅ **Performance Optimizada**
- Lazy loading de imágenes
- IntersectionObserver para animaciones
- CSS con variables reutilizables

✅ **Responsive Mobile-First**
- Touch targets accesibles (44px+)
- Layout adaptativo con Flexbox/Grid
- Menú hamburguesa optimizado

✅ **Accesibilidad WCAG**
- HTML semántico
- ARIA labels
- Navegación por teclado funcional

✅ **UX/UI Optimizada**
- Smooth scroll nativo
- Micro-interacciones
- Feedback visual inmediato
- Jerarquía visual clara

---

### Decisiones Técnicas

**¿Por qué ES Modules?**
→ Mejor organización del código, separación de responsabilidades, facilita mantenimiento

**¿Por qué JavaScript Vanilla?**
→ Mejor performance, práctica moderna, sin dependencias innecesarias

**¿Por qué arquitectura modular?**
→ Escalabilidad, trabajo en paralelo, reutilización de componentes

---

## 👨‍💻 Autor

**Leandro Carpio**  
Frontend Developer | Landing Pages de Alta Conversión

- 📧 **Email:** leo_gabriel_carpio@hotmail.com
- 📱 **WhatsApp:** [+54 9 261 612-3777](https://wa.me/5492616123777)
- 💼 **LinkedIn:** [linkedin.com/in/leandrocarpio](https://www.linkedin.com/in/leandrocarpio)
- 🌐 **GitHub:** [@leandrocarpio](https://github.com/leandrocarpio)

---

### ¿Necesitás una landing profesional para tu negocio?

Desarrollo landing pages optimizadas para conversión:
- ✅ Diseño responsive mobile-first
- ✅ Arquitectura modular escalable
- ✅ Entrega en 1-2 semanas
- ✅ Soporte post-lanzamiento incluido

📩 **Contactame:** [WhatsApp](https://wa.me/5492616123777?text=Hola,%20vi%20tu%20portfolio%20y%20me%20interesa%20tu%20servicio)

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.

```
MIT License

Copyright (c) 2025 Leandro Carpio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

Ver [LICENSE](LICENSE) para más detalles.

---

<div align="center">

### ⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐

**Diseño Web LC** © 2025 - Desarrollado por **Leandro Carpio**

[⬆️ Volver arriba](#-diseño-web-lc---portfolio-profesional)

</div>