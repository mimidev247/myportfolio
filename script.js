document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mainNav.classList.remove('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in:not(.animated)');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
};

// Initial check
animateOnScroll();

// Check on scroll
window.addEventListener('scroll', animateOnScroll);