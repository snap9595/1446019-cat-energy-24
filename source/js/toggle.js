var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.page-header__toggle');
    var logoWrapper = document.querySelector('.page-header__logo-wrapper')

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    })

    navToggle.addEventListener('click', function () {
      if (navToggle.classList.contains('page-header__toggle--closed')) {
        navToggle.classList.remove('page-header__toggle--closed');
        navToggle.classList.add('page-header__toggle--opened');
      } else {
        navToggle.classList.add('page-header__toggle--closed');
        navToggle.classList.remove('page-header__toggle--opened');
      }
    });
