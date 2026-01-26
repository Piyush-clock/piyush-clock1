/* ================= SMOOTH SCROLL ================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const targetSection = document.querySelector(
            this.getAttribute("href")
        );

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});


/* ================= NAVBAR SHADOW ON SCROLL ================= */

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.6)";
    } 
    else{
        navbar.style.boxShadow = "none";
    }
});


/* ================= SIMPLE BUTTON CLICK EFFECT ================= */

const btn = document.querySelector(".primary-btn");

btn.addEventListener("click", () => {
    alert("Welcome to The PieClock Collection 🚀");
});
