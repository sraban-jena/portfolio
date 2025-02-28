// Initializing AOS for smooth scroll animations
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        offset: 0,
        duration: 1000,
        easing: 'ease',
        once: true,  // animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
    });
});

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
function hamburg() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

function cancel() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}

// Smoothly show/hide sections on scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY;
    sections.forEach((section, index) => {
        if (scrollY >= section.offsetTop - section.offsetHeight * 0.5) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
        }
    });
});

// Initiate the scroll functions
window.addEventListener('load', function() {
    document.dispatchEvent(new Event('scroll'));
});
