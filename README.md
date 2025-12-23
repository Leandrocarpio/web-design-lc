# 🚀 Diseño Web LC - Portfolio Profesional

<div align="center">

![Diseño Web LC](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=400&fit=crop)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-100%25-10B981?style=for-the-badge)

**Sitio web profesional de servicios de desarrollo frontend especializado en landing pages de alta conversión**

[✨ Ver Demo](https://leandrocarpio.github.io/diseno-web-lc/) | 
[📞 Contacto](https://wa.me/542616123777) | 
[💼 Mi GitHub](https://github.com/Leandrocarpio)

</div>

---

## 📋 Descripción del Proyecto

**Diseño Web LC** es mi sitio web profesional donde ofrezco servicios de desarrollo frontend especializado en landing pages. El proyecto demuestra mis habilidades técnicas, arquitectura de código limpia y enfoque en UX/UI profesional.

### 🎯 Objetivo del Sitio

Mostrar mi propuesta de valor como desarrollador frontend, con un portfolio de proyectos reales y un sistema de contacto directo para clientes potenciales.

---

## ✨ Características Principales

- ✅ **Diseño 100% Responsive** - Optimizado para todos los dispositivos
- ✅ **Menú Hamburguesa Animado** - Navegación mobile profesional
- ✅ **Portfolio Interactivo** - Carousel con proyectos reales en producción
- ✅ **Arquitectura Modular ES6** - Código limpio y escalable
- ✅ **Sistema de FAQ Accordion** - Información organizada y accesible
- ✅ **Optimización SEO** - Meta tags, estructura semántica y Open Graph
- ✅ **Performance Optimizada** - Lazy loading y transiciones suaves
- ✅ **Accesibilidad WCAG** - ARIA labels y navegación por teclado

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica y accesible
- **CSS3** - Variables CSS, Grid, Flexbox, Animaciones
- **JavaScript ES6+** - Módulos, Async/Await, IntersectionObserver
- **Bootstrap Icons** - Sistema de iconografía consistente

### Características Técnicas
- **Arquitectura Modular** - Separación de responsabilidades (MVC pattern)
- **Responsive Design** - Mobile-first approach
- **Cross-browser** - Compatible con todos los navegadores modernos
- **Performance** - Optimización de imágenes y lazy loading

---

## 📁 Estructura del Proyecto

```
diseño-web-lc/
├── index.html              # Página principal (landing)
├── about.html              # Página de CV profesional
├── contact.html            # Página de contacto con formulario
├── assets/
│   ├── css/
│   │   ├── styles.css          # Estilos principales (index)
│   │   ├── styles-about.css    # Estilos página CV
│   │   └── styles-contact.css  # Estilos página contacto
│   ├── js/
│   │   ├── main.js             # Punto de entrada principal
│   │   ├── portfolio.js        # Lógica del carousel de proyectos
│   │   ├── navigation.js       # Sistema de navegación y menú
│   │   ├── ui.js               # Componentes UI (FAQ, efectos)
│   │   └── storage.js          # Manejo de datos y localStorage
│   └── img/
│       ├── CV.jpg              # Foto profesional
│       └── Servicio.png        # Imagen de servicio
├── README.md                   # Documentación 
└── LICENSE                     # Licencia MIT
```

---

## 🚀 Instalación y Uso

### Opción 1: Clonar y usar localmente

```bash
# Clonar el repositorio
git clone https://github.com/Leandrocarpio/diseno-web-lc.git

# Navegar al directorio
cd diseno-web-lc

# Abrir con Live Server (VS Code)
# O simplemente abrir index.html en el navegador
```

### Opción 2: Ver online

Visita directamente: [https://leandrocarpio.github.io/diseno-web-lc/](https://leandrocarpio.github.io/diseno-web-lc/)

---

## 💼 Proyectos del Portfolio

### 1. Mendoza Wine
Landing page elegante para bodega premium con diseño moderno y responsive.
- **Stack:** HTML5, CSS3, JavaScript, Responsive Design
- **Demo:** [Ver proyecto](https://leandrocarpio.github.io/Mendoza-Wine-Web/)

### 2. El Caverna Gym
Sitio web profesional para gimnasio enfocado en conversión y UX.
- **Stack:** HTML5, CSS3, Bootstrap, JavaScript
- **Demo:** [Ver proyecto](https://leandrocarpio.github.io/el-caverna-gym-landing/)

### 3. Libera tu Luz Interior
Página web espiritual con diseño sereno y navegación intuitiva.
- **Stack:** HTML5, CSS3, Design, Accesibilidad
- **Demo:** [Ver proyecto](https://leandrocarpio.github.io/Libera-tu-luz-interior-web/)

---

## 🎨 Paleta de Colores

```css
--primary: #0F3B66;        /* Azul profesional */
--primary-light: #1a5a8f;  /* Azul claro */
--secondary: #10B981;      /* Verde éxito */
--light-bg: #E8F0F8;       /* Fondo suave */
--dark: #1F2937;           /* Texto oscuro */
--gray: #6B7280;           /* Texto secundario */
```

---

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 **Mobile:** 320px - 576px
- 📱 **Tablet:** 577px - 768px
- 💻 **Desktop:** 769px - 1200px
- 🖥️ **Large Desktop:** 1201px+

---

## ⚡ Características Técnicas Destacadas

### Menú Hamburguesa Profesional
- Animación suave con transición CSS
- Cierre automático al hacer click en links
- Cierre con tecla ESC
- Previene scroll del body cuando está abierto
- ARIA labels para accesibilidad

### Carousel de Portfolio
- Navegación con flechas y teclado (← →)
- Autoplay con pausa al interactuar
- Swipe en dispositivos táctiles
- Indicadores interactivos
- Contenido centrado y protegido de flechas

### Sistema de FAQ
- Accordion con transiciones suaves
- Solo una pregunta abierta a la vez
- Iconos animados (rotación 180°)
- Click para expandir/colapsar

---

## 🔧 Configuración Personalizable

### Modificar Proyectos del Portfolio

Edita `assets/js/portfolio.js`:

```javascript
const projects = [
    {
        title: "Tu Proyecto",
        description: "Descripción breve",
        image: "URL_de_imagen",
        technologies: ["HTML5", "CSS3", "JS"],
        link: "https://tu-proyecto.com"
    }
];
```

### Cambiar Colores

Edita las variables en `assets/css/styles.css`:

```css
:root {
    --primary: #TU_COLOR;
    --secondary: #TU_COLOR;
}
```

---

## 🌐 Deploy

### GitHub Pages (recomendado)

1. Push del código a GitHub
2. Settings → Pages → Source: main branch
3. Tu sitio estará en: `https://tu-usuario.github.io/diseno-web-lc/`

### Netlify/Vercel

Simplemente conecta tu repositorio y despliega automáticamente.

---

## 📊 Métricas de Performance

- ✅ **Lighthouse Score:** 95+ en Performance
- ✅ **First Contentful Paint:** < 1.5s
- ✅ **Time to Interactive:** < 3s
- ✅ **Cumulative Layout Shift:** < 0.1

---

## 🤝 Contribuciones

Este es un proyecto personal de portfolio, pero las sugerencias son bienvenidas:

1. Fork del proyecto
2. Crea un branch (`git checkout -b feature/mejora`)
3. Commit de cambios (`git commit -m 'feat: nueva característica'`)
4. Push al branch (`git push origin feature/mejora`)
5. Abre un Pull Request

---

## 📞 Contacto

**Leandro Carpio**
- 📧 Email: [leo_gabriel_carpio@hotmail.com](mailto:leo_gabriel_carpio@hotmail.com)
- 💼 LinkedIn: [linkedin.com/in/leandrocarpio](https://www.linkedin.com/in/leandrocarpio/)
- 🐙 GitHub: [github.com/Leandrocarpio](https://github.com/Leandrocarpio)
- 📱 WhatsApp: [+54 261 6123777](https://wa.me/542616123777)

---

## 📄 Licencia

Este proyecto es de uso personal como portfolio profesional. El código puede ser usado como referencia educativa.

---

## 🎓 Aprendizajes Aplicados

Este proyecto demuestra:
- ✅ Arquitectura frontend profesional con módulos ES6
- ✅ Responsive design mobile-first
- ✅ Accesibilidad web (WCAG)
- ✅ Optimización de performance
- ✅ UX/UI centrado en conversión
- ✅ Código limpio y documentado
- ✅ Buenas prácticas de desarrollo

---

<div align="center">

**⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐**

Desarrollado con 💚 por [Leandro Carpio](https://github.com/Leandrocarpio)

</div>