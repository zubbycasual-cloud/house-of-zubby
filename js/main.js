/* ============================================
   HOUSE OF ZUBBY
   Main JavaScript
   ============================================ */


/* 1. MOBILE NAVIGATION
============================================ */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

}


/* 2. CLOSE MOBILE MENU AFTER CLICKING A LINK
============================================ */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbar && menuToggle) {

            navbar.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        }

    });

});


/* 3. DYNAMIC COPYRIGHT YEAR
============================================ */

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* 4. HEADER SCROLL EFFECT
============================================ */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* 5. SHOPPING CART COUNTER FOUNDATION
============================================ */

let cartCount = 0;

const cartCounter = document.querySelector(".cart-count");

function updateCartCounter() {

    if (cartCounter) {
        cartCounter.textContent = cartCount;
    }

}


/* QUICK ADD BUTTONS */

const quickAddButtons = document.querySelectorAll(".quick-add");

quickAddButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        updateCartCounter();

        button.innerHTML =
            '<i class="fa-solid fa-check"></i>';

        setTimeout(() => {

            button.innerHTML =
                '<i class="fa-solid fa-plus"></i>';

        }, 1000);

    });

});


/* 6. NEWSLETTER FORM
============================================ */

const newsletterForm =
    document.getElementById("newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const emailInput =
            newsletterForm.querySelector('input[type="email"]');

        const email = emailInput.value.trim();

        if (!email) {
            alert("Please enter your email address.");
            return;
        }

        alert("Thank you for joining the House of Zubby community!");

        newsletterForm.reset();

    });

}


/* 7. SMOOTH SCROLLING
============================================ */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* 8. INITIALIZE WEBSITE
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    updateCartCounter();

    console.log(
        "HOUSE OF ZUBBY — African Roots. Modern Expression."
    );

});
