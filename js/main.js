var page0 = document.getElementById('page0');
var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var cont = document.getElementById('cont');
var header__container = document.getElementById('header__container');
var page1_content = document.getElementById('page1_content');
var page2_items = document.getElementById('page2_items');
var page3_im1 = document.getElementById('page3_im1');
var page3_im2 = document.getElementById('page3_im2');
var page3_im3 = document.getElementById('page3_im3');
var page3_im4 = document.getElementById('page3_im4');
var cpage3_im1 = document.querySelector('.page3_im1');
var page3_content = document.getElementById('page3_content');


// Пререключение страниц начало

function show1() {
   page0.classList.add('show');
   page1.classList.add('show1');
   page1.classList.add('height1');
   page1_content.classList.add('show2');
   cont.classList.add('go');
   header__container.classList.add('go2');
}

function show2() {
   page0.classList.add('show');
   page2.classList.add('show1');
   page2.classList.add('height2');
   page2_items.classList.add('show3');
   cont.classList.add('go');
   header__container.classList.add('go2');
}

function show3() {
   page0.classList.add('show');
   page3.classList.add('show3');
   cont.classList.add('go');
   header__container.classList.add('go2');
}

function back() {
   page0.classList.remove('show');
   page1.classList.remove('show1');
   page1.classList.remove('height1');
   page1_content.classList.remove('show2');
   cont.classList.remove('go');
   header__container.classList.remove('go2');
}

function back2() {
   page0.classList.remove('show');
   page2.classList.remove('show1');
   page2.classList.remove('height2');
   page2_items.classList.remove('show3');
   cont.classList.remove('go');
   header__container.classList.remove('go2');
   page2.classList.remove('bg1');
   page2.classList.remove('bg2');
   page2.classList.remove('bg3');
   page2.classList.remove('bg4');
}

function back3() {
   page0.classList.remove('show');
   page3.classList.remove('show3');
   cont.classList.remove('go');
   header__container.classList.remove('go2');
}

// Пререключение страниц конец

// Изменение фона на page2 начало

function bg() {
   page2.classList.toggle('bg1');
   page2.classList.remove('bg2');
   page2.classList.remove('bg3');
   page2.classList.remove('bg4');
}
function bg2() {
   page2.classList.toggle('bg2');
   page2.classList.remove('bg1');
   page2.classList.remove('bg3');
   page2.classList.remove('bg4');
}
function bg3() {
   page2.classList.toggle('bg3');
   page2.classList.remove('bg1');
   page2.classList.remove('bg2');
   page2.classList.remove('bg4');
}
function bg4() {
   page2.classList.toggle('bg4');
   page2.classList.remove('bg1');
   page2.classList.remove('bg2');
   page2.classList.remove('bg3');
}

// Изменение фона на page2 конец

// Переключение картинок на старнице page3 начало

function turn() {
   if(page3_im3.classList.contains('opa3') || page3_im4.classList.contains('opa4')){
      page3_im3.classList.toggle('opa3');
   }
   if(page3_im1.classList.contains('no')) {
      page3_im1.classList.remove('no');
      page3_im1.classList.toggle('opa1');
   }
   page3_im1.classList.toggle('opa1');
   page3_im2.classList.toggle('opa');
}

function turn1() {
   if(page3_im2.classList.contains('opa')){
      page3_im2.classList.toggle('opa');
   }
   if(page3_im1.classList.contains('opa') || page3_im1.classList.contains('opa1')){
      page3_im1.classList.add('no');
   }
   page3_im3.classList.toggle('opa3');
}

// Переключение картинок на старнице page3 конец