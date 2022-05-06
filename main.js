window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBTNS = document.querySelectorAll(".learn-more-btn");
const modalcloseBTNS = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
    serviceModals[modalClick].classList.add("active");
}

learnmoreBTNS.forEach((learnmoreBTN, i) => {
    learnmoreBTN.addEventListener("click", () => {
        modal(i);
    });
});

modalcloseBTNS.forEach((modalcloseBTN) => {
    modalcloseBTN.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

const scrollTopbtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
    scrollTopbtn.classList.toggle("active", window.scrollY > 500)
});

scrollTopbtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

const menuBTN = document.querySelector(".nav-menu-btn");
const closeBTN = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navITEMS = document.querySelectorAll(".nav-items a");

menuBTN.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBTN.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navITEMS.forEach((navITEM) => {
    navITEM.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

// Scroll Reveal Animations
// Common Reveal Options to create reveal Animation
ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

// Target Elements, and specify options to create reveal Animation
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.home .info .btn, .title', { delay: 700, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional-li li', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .contact-left h2', { delay: 700, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education', { delay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.footer, .group, .my-projects .container .content h4, .my-projects .container .content hr', { delay: 500, origin: 'top', interval: 200 });

// Submit Query
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "jainramya87@gmail.com",
        Password : "#thecoder1",
        To : 'jainramya87@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enqiry",
        Body : "Name: " + document.getElementById("name").value
         + "<br> Email: " + document.getElementById("email").value
         + "<br> Subject: " + document.getElementById("subject").value
         + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully!")
    );
}
