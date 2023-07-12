var search_btn = document.querySelectorAll('.header__search2');
var search_group = document.querySelector('.header__group');
var title01 = document.querySelectorAll('.footer__title');
var block0 = document.querySelectorAll('.footer__block');

search_btn.forEach(item => {
   item.addEventListener('click', ()=>{
      search_group.classList.toggle('active');
   });
});

// header

var burger = document.querySelector('.header__burger');
var list1 = document.querySelector('.header__list');

burger.onclick = () => {
   burger.classList.toggle('active');
   list1.classList.toggle('active');
   search_group.classList.remove('active');
   block0.forEach(item =>{
      item.classList.remove('active');
   });
   title01.forEach(item =>{
      item.classList.remove('active');
   });
};

// footer



title01.forEach(item => {
   item.addEventListener('click', (e)=> {
      item.classList.toggle('active');
      var parent = e.target.parentNode;
      parent.querySelector('.footer__block').classList.toggle('active');
   });
});