"use strict"


  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600); // время совпадает с transition в CSS
  });


const burger = document.getElementById('burgerMenu');
const nav = document.getElementById('navLinks');

burger.addEventListener('click', () => { 
    nav.classList.toggle('active');
});


