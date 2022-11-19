const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');
const navOculta = document.querySelector('.oculta');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navList.classList.toggle('active');
    navOculta.classList.toggle('active');
});
