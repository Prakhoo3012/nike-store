'use strict';

const navBar = document.querySelector('.navbar');
const navBtn = document.querySelectorAll('.nav-btn');
const logoImg = document.getElementById("logo-img");

const modal = document.querySelector('.cart-modal');
const overlay = document.querySelector('.cart-overlay');
const btnCloseCart = document.getElementById('close-cart');
const btnOpenCart = document.getElementById('cart-bag');
console.log(btnOpenCart);

const closeModal = function () {
    if (modal.classList.contains('hidden') && overlay.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    else {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
};


const openModal = function () {
    if (modal.classList.contains('hidden') && overlay.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    else {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
};


window.addEventListener('scroll', () => {

    if (window.scrollY > 10) {
        logoImg.src = "/static/images/nikeBlack-logo.png";
        navBar.style.background = "white";
        navBar.classList.add('shadow');
        for (let i = 0; i < navBtn.length; i++)
            navBtn[i].style.color = "black";
    } else {
        logoImg.src = "/static/images/nikeWhite-logo.png";
        navBar.style.background = "none";
        navBar.classList.remove('shadow');
        for (let i = 0; i < navBtn.length; i++)
            navBtn[i].style.color = "white";
    }
});


btnCloseCart.addEventListener('click', closeModal);
btnOpenCart.addEventListener('click', openModal);

