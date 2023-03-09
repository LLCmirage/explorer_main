const burger = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');
burger.addEventListener('click', function(){
    nav.classList.toggle('active');
})