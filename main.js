document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. EFECTO SCROLL EN EL HEADER ---
    const navbar = document.getElementById('mainNavbar');

    // Función para verificar la posición del scroll al cargar y al mover la página
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.add('navbar-transparent');
        }
    }

    // Estado inicial al cargar
    handleNavbarScroll();

    // Escuchar el evento scroll
    window.addEventListener('scroll', handleNavbarScroll);


    // --- 2. CONFIGURACIÓN GENERAL DE SCROLLREVEAL ---
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        reset: false,        // Evita que la animación se repita al subir/bajar
        viewFactor: 0.2      // Obliga a que el elemento sea visible antes de animarse
    });

    // --- APLICAR ANIMACIONES A TODAS LAS SECCIONES ---

    // Hero Section
    sr.reveal('.hero-content h1', { delay: 300 });
    sr.reveal('.hero-content p', { delay: 500 });
    sr.reveal('.hero-content .d-flex', { delay: 700 });

    // Web Design 3.0 (Sobre Nosotros)
    sr.reveal('.sr-img-main', {
        origin: 'left',
        distance: '80px',
        duration: 1000,
        delay: 200
    });

    sr.reveal('.sr-img-float', {
        origin: 'bottom',
        distance: '60px',
        duration: 1200,
        delay: 500
    });

    sr.reveal('.sr-content', {
        origin: 'right',
        distance: '80px',
        duration: 1000,
        delay: 400
    });

    // Separador Parallax
    sr.reveal('.sr-parallax', {
        origin: 'bottom',
        distance: '40px',
        duration: 1000
    });

    // Sección Producto (Bloques 1, 2 y 3)
    sr.reveal('.sr-prod-1', { origin: 'left', distance: '60px', duration: 1000 });
    sr.reveal('.sr-text-1', { origin: 'right', distance: '60px', duration: 1000, delay: 200 });

    sr.reveal('.sr-prod-2', { origin: 'right', distance: '60px', duration: 1000 });
    sr.reveal('.sr-text-2', { origin: 'left', distance: '60px', duration: 1000, delay: 200 });

    sr.reveal('.sr-prod-3', { origin: 'left', distance: '60px', duration: 1000 });
    sr.reveal('.sr-text-3', { origin: 'right', distance: '60px', duration: 1000, delay: 200 });

    // Sección Contacto
    sr.reveal('.sr-contact-info', {
        origin: 'left',
        distance: '60px',
        duration: 1000
    });

    sr.reveal('.sr-contact-form', {
        origin: 'right',
        distance: '60px',
        duration: 1000,
        delay: 200
    });

});