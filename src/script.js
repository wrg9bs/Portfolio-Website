
let faBars = document.querySelector('.fa fa-bars');
let faTimes = document.querySelector('.fa fa-times');
let boatEl = document.querySelectorAll('.bo-at');
let portfolioEl = document.querySelector('.portfolio');
let blogEl = document.querySelector('.blog');
let contactEl = document.querySelector('.contact');

faBars.addEventListener('click', showMenu)
faTimes.addEventListener('click', hideMenu)


// portfolioEl.addEventListener('click', () => {
//     portfolioEl.style.backgroundColor = '#f5f5f5';
//     boatEl.style.backgroundColor = '#f1626';
    
// })

const showMenu = () => {
    let navLinks = document.querySelector('#navLinks');
    navLinks.style.right = '0';
}

const hideMenu = () => {
    let navLinks = document.querySelector('#navLinks');
    navLinks.style.right = '-200px';
}