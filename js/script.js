const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
})