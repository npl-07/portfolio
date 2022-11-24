let menuIcon = document.querySelector('.menu-icon');
let navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navList.classList.toggle('active');
});
