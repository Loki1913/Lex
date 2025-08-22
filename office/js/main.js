// JavaScript - Funcionalidades principales
document.addEventListener('DOMContentLoaded', function() {
    // Navegación móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    const header = document.querySelector('.header');
    
    mobileMenuBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-bars');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Animación de contadores
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const inc = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(() => animateCounters(), 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Activar contadores cuando son visibles
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // Tabs de búsqueda
    const searchTabs = document.querySelectorAll('.search-tab');
    searchTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            searchTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Botones de contacto generales
    document.getElementById('llamarAhoraBtn').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'tel:18095551234';
    });
    
    document.getElementById('chatVivoBtn').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'https://wa.me/18095551234';
    });
    
    document.getElementById('agendarCitaBtn').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('contactModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Botón de chatbot
    document.querySelector('.chatbot-btn').addEventListener('click', function() {
        window.location.href = 'https://wa.me/18095551234';
    });
    
    // Enlaces de servicios
    document.querySelectorAll('.servicio-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const service = this.getAttribute('data-service');
            // Aquí podrías redirigir a una página específica del servicio o mostrar más información
            alert(`Más información sobre nuestro servicio de ${service}`);
        });
    });
});