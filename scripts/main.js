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


// Ждем загрузку DOM
document.addEventListener('DOMContentROLL', function() {
    const header = document.querySelector('header');
    
    // Проверяем, нашли ли мы хедер
    console.log('Хедер найден:', header);
    
    // Функция для проверки прокрутки
    function checkScroll() {
        // Сколько пикселей прокрутили
        const scrollY = window.scrollY;
        console.log('Прокрутка:', scrollY);
        
        // Если прокрутили больше 10px, добавляем класс
        if (scrollY > 10) {
            header.classList.add('header-sticky');
            console.log('Класс ДОБАВЛЕН');
        } else {
            header.classList.remove('header-sticky');
            console.log('Класс УДАЛЕН');
        }
    }
    
    // Проверяем сразу при загрузке
    checkScroll();
    
    // Проверяем при прокрутке
    window.addEventListener('scroll', checkScroll);
});
