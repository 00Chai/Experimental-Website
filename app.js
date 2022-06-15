var menu = document.getElementById('#mobile-menu');
if (menu) {
  menu.addEventListener('click', mobileMenu, true)
}
var menuLinks = document.getElementsByClassName('.navbar_menu');
var navLogo = document.getElementById('#navbar_logo')

//Display mobile menu
var mobileMenu = () => {
  menu.classList.toggle('is-active', true);
  menuLinks.classList.toggle('active', true);
}



// Show active menu when scrolling
var highlightMenu = () => {
  var elem = document.querySelector('.highlight');
  var homeMenu = document.querySelector('#home-page');
  var aboutMenu = document.querySelector('#about-page');
  var serviceMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // add highlight class to menu items
  if(window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    serviceMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    serviceMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
}


// closing mobile menu when clicking on an item
var hideMobileMenu = () => {
 var menuBars = document.querySelector('.is-active');
 if(window.innerWidth <= 768 && menuBars) {
   menu.classList.toggle('is-active');
   menuLinks.classList.remove('active');
 }


menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
}

