const toggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='light'?'':'light'});
const cards=document.querySelectorAll('.card');
const observer=new IntersectionObserver(e=>e.forEach(i=>i.isIntersecting&&i.target.classList.add('show')),{threshold:.15});
cards.forEach(c=>observer.observe(c));