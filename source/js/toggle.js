var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
var logoWrapper = document.querySelector('.page-header__logo-wrapper')
var map = document.querySelector('.contacts')


navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('page-header__toggle--nojs');
map.classList.remove('contacts__map');



navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--opened')) {
    //Если меню открыто то:
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('page-header__toggle--closed');
    navToggle.classList.remove('page-header__toggle--opened');
  } else {
    // Если не открыто:
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
  }
})
