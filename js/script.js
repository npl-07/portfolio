const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');
//const navGhost = document.querySelector('.ghost');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navList.classList.toggle('active');
    //navGhost.classList.toggle('active');
});
