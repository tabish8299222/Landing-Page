// Mobile Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Testimonial Slider (basic loop implementation)
const testimonialCards = document.querySelectorAll('.testimonial-card');
let index = 0;

function showTestimonial() {
    testimonialCards.forEach((card, i) => {
        card.style.display = (i === index) ? 'block' : 'none';
    });
    index = (index + 1) % testimonialCards.length;
}

setInterval(showTestimonial, 4000); // Auto-slide every 4 seconds


