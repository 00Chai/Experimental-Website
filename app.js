const menu = document.querySlector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')

//Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')    
}

menu.addEventListener('click', mobileMenu)