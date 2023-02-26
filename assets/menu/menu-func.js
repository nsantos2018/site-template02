/* Select the hamburger */
const hamburger = document.querySelector('.header__menu .hamburger__container .hamburger');

/* Select the frame this navigate menu */
// const menu_mobile = document.querySelector('.header__menu .menu__nav');
const menu_mobile = document.querySelector('.header__menu .menu');

/* Selecting the link that has the sub-menu class maked LI as has-children  */
const menu_children = document.querySelectorAll('.header__menu .menu__nav .menu__list > .menu-item-has-children a');

/*Insert class Active */
let menu_active = document.querySelectorAll('.menu__list > .menu-item-has-children a');

/* Insert event list toggle in hamburger and mobile menu*/
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu_mobile.classList.toggle('active');
});

/* running the loop  in array for function on click */
menu_children.forEach( (el) => {
    el.addEventListener('click', () =>{
        el.classList.toggle('arrow');
        el.classList.toggle('show');
    });
});

/* Menu Active - Insert Class Active */
menu_active.forEach( (valorCorrente, index, array) => {
    valorCorrente.addEventListener('click', () => {
        /* Remove class active */
        for(let i = 0; i < menu_active.length; i++){
            array[i].classList.remove('active');
        }
        /* Add class active */
        valorCorrente.classList.add('active');
    });
});