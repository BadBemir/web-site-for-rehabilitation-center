"use strict"

const burger = document.getElementById('burgerMenu');
const nav = document.getElementById('navLinks');

burger.addEventListener('click', () => { 
    nav.classList.toggle('active');
});