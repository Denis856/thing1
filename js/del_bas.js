// // Cart Open and Close

// var favoritBtn = document.querySelectorAll('.favoritBtn');
// var cart2 = document.querySelector('.favorits');

// favoritBtn.forEach(item =>{
//    item.onclick = () => {
//       cart2.classList.add('active');
//    };
// });
// cartClose.onclick = () => {
//    cart2.classList.remove('active');
// };

// // Making Add To Cart

// if(document.readyState == 'loading'){
//    document.addEventListener('DOMContentLoaded', ready2);
// } else {
//    ready2();
// }

// // Making function

// function ready2(){
//    // Remove Item From Cart
//    var removeCartButtons = document.getElementsByClassName('item4__del');
//    for(let i = 0; i < removeCartButtons.length; i++) {
//       var button = removeCartButtons[i];
//       button.addEventListener('click', removeCartItem2);
//    }
//    // Add To Cart
//    var addCart = document.getElementsByClassName('item1__favorit');
//    for(let i = 0; i < addCart.length; i++) {
//       var button = addCart[i];
//       button.addEventListener('click', addCartClicked2);
//    }
//    loadCartItems2();
// }

// // Remove Cart Item

// function removeCartItem2(event){
//    var buttonClicked = event.target;
//    buttonClicked.parentElement.remove();
//    updateTotal2();
//    saveCartItems2();
// }

// // Add To Cart

// function addCartClicked2(event){
//    var button = event.target;
//    var shopProducts = button.parentElement;
//    var title = shopProducts.getElementsByClassName('item1__size')[0].innerText;
//    var price = shopProducts.getElementsByClassName('item1__price')[0].innerText.replaceAll(' ', '');
//    var img = shopProducts.getElementsByClassName('item1__img')[0].src;
//    addProductToCart2(title, price, img);
//    updateTotal2();
//    saveCartItems2();
// }

// function addProductToCart2(title, price, img){
//    var cartShopBox = document.createElement('div');
//    cartShopBox.classList.add('favorits__item');
//    var cartItems = document.getElementsByClassName('favorits__items')[0];
//    var cartItemsNames = cartItems.getElementsByClassName('item4__title');
//    buy.classList.remove('active');
//    for(let i = 0; i < cartItemsNames.length; i++) {
//       if(cartItemsNames[i].innerText == title) {
//          alert("You already added this item to cart");
//          return;
//       }
//    }

//    var cartBoxContent = `

      
//       <img src="${img}" alt="icon" class="item4__img">
//       <div class="item4__info">
//          <p class="item4__title">${title}</p>
//          <p class="item4__title2">Орех, Алюминий</p>
//       </div>
//       <p class="item4__price">${price}</p>
//       <button class="item4__del">Del</button>

      
//    `;
//    cartShopBox.innerHTML = cartBoxContent;
//    cartItems.appendChild(cartShopBox);
//    cartShopBox.getElementsByClassName('item4__del')[0]
//    .addEventListener('click', removeCartItem2);
//    saveCartItems2();
// }



// // Update To Total

// function updateTotal2(){
//    var cartContent = document.getElementsByClassName('favorits__items')[0];
//    var cartBoxes = cartContent.getElementsByClassName('favorits__item');
//    for(let i = 0; i < cartBoxes.length; i++) {
//       var cartBox = cartBoxes[i];
//       var priceElement = cartBox.getElementsByClassName('item4__price')[0];
//       var price = parseFloat(priceElement.innerText.replace('$', ''));
//       total = price + total;

//       // If Price Contain Some Cents
//       total = Math.round(total * 100) / 100;
//       document.getElementsByClassName('total__price')[0].innerText = total + 'р';
//       // Save total
//       localStorage.setItem('cartTotal', total);
//    }
// }

// // Keep Item In Cart

// function saveCartItems2() {
//    var cartContent = document.getElementsByClassName('favorits__items')[0];
//    var cartBoxes = cartContent.getElementsByClassName('favorits__item');
//    var cartItems =[];

//    for(let i = 0; i < cartBoxes.length; i++) {
//       var cartBox = cartBoxes[i];
//       var titleElement = cartBox.getElementsByClassName('item4__title')[0];
//       var priceElement = cartBox.getElementsByClassName('item4__price')[0];
//       var productImg = cartBox.getElementsByClassName('item4__img')[0].src;

//       var item = {
//          title: titleElement.innerText,
//          price: priceElement.innerText,
//          productImg: productImg,
//       };
//       cartItems.push(item);
//    }
//    localStorage.setItem('cartItems', JSON.stringify(cartItems));
// }

// // Load In Cart

// function loadCartItems2(){
//    var cartItems = localStorage.getItem('cartItems');
//    var cartBoxes1 = document.getElementsByClassName('favorits__item');
//    if(cartItems){
//       cartItems = JSON.parse(cartItems);
//       for(let i = 0; i < cartItems.length; i++) {
//          var item = cartItems[i];
//          addProductToCart2(item.title, item.price, item.productImg);

//          var cartBoxes = document.getElementsByClassName('favorits__item');
//          var cartBox = cartBoxes[cartBoxes.length - 1];
//       }
//    }
// }