let items = document.querySelectorAll('.item');
let nav = document.getElementById('nav');

document.addEventListener('scroll', (event) => {
    if(window.scrollY > 500){
        nav.classList.add('tofixed');
    } else {
        nav.classList.remove('tofixed');
    }
    items.forEach(item => {
        if(item.offsetTop - window.scrollY < 350){
            item.classList.add('active');
        }
    });
});

const menuToggle = document.querySelector('.menu-toggle');  // <-- aquí
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
