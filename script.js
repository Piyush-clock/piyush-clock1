// Smooth scroll
const links = document.querySelectorAll('nav a');


links.forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
document.querySelector(link.getAttribute('href'))
.scrollIntoView({ behavior: 'smooth' });
});
});


// Simple reveal animation
const sections = document.querySelectorAll('.category');


window.addEventListener('scroll', () => {
sections.forEach(section => {
const top = section.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
section.style.opacity = 1;
section.style.transform = 'translateY(0)';
}
});
});


sections.forEach(section => {
section.style.opacity = 0;
section.style.transform = 'translateY(50px)';
section.style.transition = '1s';
});
