const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-links');


// navLinks.forEach(Link => {
//     Link.addEventListener('click', () => {
//         navMenu.classList.add('hidden');
//     })
// });

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden');
    });
})

hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden');
});

navClose.addEventListener('click', () => {
    navMenu.classList.add('hidden');
})