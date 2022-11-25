let menuIcon = document.querySelector('.menu-icon');
let navList = document.querySelector('.nav-list');
let overLay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navList.classList.toggle('active');
    overLay.classList.toggle('active');
});
