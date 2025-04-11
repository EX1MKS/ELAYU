const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

checkbox.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

const items = document.getElementById("text");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
        front.style.right = value * 0.2;
});