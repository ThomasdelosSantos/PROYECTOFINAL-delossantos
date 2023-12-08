document.addEventListener('DOMContentLoaded', function () {
    var burgerMenu = document.querySelector('.burger-menu');
    var navbar = document.querySelector('.navbar');
  
    burgerMenu.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  });
  