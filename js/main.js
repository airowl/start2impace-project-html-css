const ham = document.querySelector('.menu-mob');
const menu = document.getElementById('menu-mob-list');

ham.addEventListener('click', function() {
    if(!menu.classList.contains('open')){
        menu.classList.add('open');
    } else {
        menu.classList.remove('open');
    }
});