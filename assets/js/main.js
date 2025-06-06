/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal({
    distance: "90px",
    duration: 3000,
})

sr.reveal(`.home-data`, {
    origin: "top",
    delay: 400,
})
sr.reveal(`.home-image`, {
    origin: "bottom",
    delay: 400,
})
sr.reveal(`.home-footer`, {
    origin: "bottom",
    delay: 400,
})