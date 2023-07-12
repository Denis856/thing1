// Cart Open and Close

var cartIcon = document.querySelectorAll('.basket20');
var cart = document.querySelector('.basket');
var cartClose = document.querySelector('.basket__close');
var items = document.getElementsByClassName('.basket__item');
var count = document.querySelector('.header__bask_group span');
var count2 = document.querySelector('.basket201 span');
var buy = document.querySelector('.basket__buy');
var result = document.querySelector('.result');
var items2 = document.querySelector('.basket__items');

cartIcon.forEach(item =>{
   item.onclick = () => {
      cart.classList.add('active');
   };
});
cartClose.onclick = () => {
   cart.classList.remove('active');
};

// Making Add To Cart

if(document.readyState == 'loading'){
   document.addEventListener('DOMContentLoaded', ready);
} else {
   ready();
}

// Making function

function ready(){
   // Remove Item From Cart
   var removeCartButtons = document.getElementsByClassName('item0__del');
   for(let i = 0; i < removeCartButtons.length; i++) {
      var button = removeCartButtons[i];
      button.addEventListener('click', removeCartItem);
   }
   // Quantity Change
   var quantityInputs = document.getElementsByClassName('item0___quantity');
   for(let i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener('change', quantityChange);
   }
   // Add To Cart
   var addCart = document.getElementsByClassName('item1__btn');
   for(let i = 0; i < addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener('click', addCartClicked);
   }
   loadCartItems();
}

// Remove Cart Item

function removeCartItem(event){
   var buttonClicked = event.target;
   buttonClicked.parentElement.remove();
   updateTotal();
   saveCartItems();
   count_i();
}

// Quantity Change

function quantityChange(event){
   var input = event.target;
   if(isNaN(input.value) || input.value <= 0) {
      input.value = 1;
   }
   updateTotal();
   saveCartItems();
}

// Add To Cart

function addCartClicked(event){
   var button = event.target;
   var shopProducts = button.parentElement;
   var title = shopProducts.getElementsByClassName('item1__size')[0].innerText;
   var title2 = shopProducts.getElementsByClassName('item1__color')[0].innerText;
   var price = shopProducts.getElementsByClassName('item1__price')[0].innerText.replaceAll(' ', '');
   var img = shopProducts.getElementsByClassName('item1__img')[0].src;
   addProductToCart(title, title2, price, img);
   updateTotal();
   saveCartItems();
   count_i();
}

function addProductToCart(title, title2, price, img){
   var cartShopBox = document.createElement('div');
   cartShopBox.classList.add('basket__item');
   var cartItems = document.getElementsByClassName('basket__items')[0];
   var cartItemsNames = cartItems.getElementsByClassName('item0__title');
   buy.classList.remove('active');
   for(let i = 0; i < cartItemsNames.length; i++) {
      if(cartItemsNames[i].innerText == title) {
         alert("You already added this item to cart");
         return;
      }
   }

   var cartBoxContent = `

      
      <img src="${img}" alt="icon" class="item0__img">
      <div class="item0__info">
         <p class="item0__title">${title}</p>
         <p class="item0__title2">${title2}</p>
      </div>
      <div class="item0__info">
         <p class="item0__price">${price}</p>
         <input type="number" value="1" class="item0___quantity">
      </div>
      <button class="item0__del">Del</button>

      
   `;
   cartShopBox.innerHTML = cartBoxContent;
   cartItems.appendChild(cartShopBox);
   cartShopBox.getElementsByClassName('item0__del')[0]
   .addEventListener('click', removeCartItem);
   cartShopBox.getElementsByClassName('item0___quantity')[0]
   .addEventListener('change', quantityChange);
   saveCartItems();
   del_bas();
   count_i();
}

function del_bas() {
   buy.onclick = () => {
      items2.innerText = ``;
      document.getElementsByClassName('total__price')[0].innerText = '0р';
      document.getElementsByClassName('result span').innerText = '0р';
      document.getElementsByClassName('header__bas1')[0].innerText = '0 р';
      cart.classList.remove('active');
      result.classList.add('active');
      count2.innerText = '';
   };
}

function count_i() {
   var items0 = document.getElementsByClassName('basket__item');
   count2.innerText = items0.length;
}
var result__close = document.querySelector('.result__close');

result__close.onclick = () => {
   result.classList.remove('active');
};


// Update To Total

function updateTotal(){
   var cartContent = document.getElementsByClassName('basket__items')[0];
   var cartBoxes = cartContent.getElementsByClassName('basket__item');
   var totalup = document.querySelector('.header__bas1');
   var result = document.querySelector('.result span');
   var total = 0;
   if(cartBoxes.length == 0) {
      document.getElementsByClassName('total__price')[0].innerText = '0р';
      totalup.innerText = '0 р.';
      buy.classList.add('active');
      count2.innerText = '';
   }
   for(let i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName('item0__price')[0];
      var quantityElement = cartBox.getElementsByClassName('item0___quantity')[0];
      var price = parseFloat(priceElement.innerText.replace('$', ''));
      var quantity = quantityElement.value;
      total += price * quantity;

      // If Price Contain Some Cents
      total = Math.round(total * 100) / 100;
      document.getElementsByClassName('total__price')[0].innerText = total + 'р';
      // Save total
      localStorage.setItem('cartTotal', total);
      totalup.innerText = total + 'р';
      result.innerText = total + 'р';
   }
}

// Keep Item In Cart

function saveCartItems() {
   var cartContent = document.getElementsByClassName('basket__items')[0];
   var cartBoxes = cartContent.getElementsByClassName('basket__item');
   var cartItems =[];

   for(let i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var titleElement = cartBox.getElementsByClassName('item0__title')[0];
      var titleElement2 = cartBox.getElementsByClassName('item0__title2')[0];
      var priceElement = cartBox.getElementsByClassName('item0__price')[0];
      var quantityElement = cartBox.getElementsByClassName('item0___quantity')[0];
      var productImg = cartBox.getElementsByClassName('item0__img')[0].src;

      var item = {
         title: titleElement.innerText,
         title2: titleElement2.innerText,
         price: priceElement.innerText,
         quantity: quantityElement.value,
         productImg: productImg,
      };
      cartItems.push(item);
   }
   localStorage.setItem('cartItems', JSON.stringify(cartItems));
   del_bas();
}

// Load In Cart

function loadCartItems(){
   var cartItems = localStorage.getItem('cartItems');
   var cartBoxes1 = document.getElementsByClassName('basket__item');
   if(cartItems){
      cartItems = JSON.parse(cartItems);
      for(let i = 0; i < cartItems.length; i++) {
         var item = cartItems[i];
         addProductToCart(item.title, item.title2, item.price, item.productImg);

         var cartBoxes = document.getElementsByClassName('basket__item');
         var cartBox = cartBoxes[cartBoxes.length - 1];
         var quantityElement = cartBox.getElementsByClassName('item0___quantity')[0];
         quantityElement.value = item.quantity;
      }
   }
   count_i();
   var cartTotal = localStorage.getItem('cartTotal');
   if(cartBoxes1.length == 0) {
      document.getElementsByClassName('total__price')[0].innerText = '0р';
      document.getElementsByClassName('header__bas1')[0].innerText = '0 р.';
      document.getElementsByClassName('result span').innerText = '0р';
      cartTotal = 0;
   }
   if(cartTotal) {
      document.getElementsByClassName('total__price')[0].innerText = cartTotal + 'р';
      document.getElementsByClassName('header__bas1')[0].innerText = cartTotal + 'р';
      document.getElementsByClassName('result span').innerText = cartTotal + 'р';
      document.getElementsByClassName('basket201 span').innerText = cartBoxes1.length;
   }
}