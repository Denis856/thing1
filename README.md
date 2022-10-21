<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Self 15</title>
</head>
<body>
   <div class="wrapper">
      <div class="content">
         <div id="page0" class="page0">
            <header class="header">
               <div class="container">
                  <div id="header__container" class="header__container">
                     <img class="logo" src="img/logo.png" alt="icon">
                     <div class="lorem">
                        <p class="lorem_text">
                           Lorem
                        </p>
                     </div>
                     <nav class="menu nav">
                        <ul class="menu_list">
                           <li class="menu_item">
                              <a onclick="show1()" href="#" class="menu_link">
                                 Page 1
                              </a>
                           </li>
                           <li class="menu_item">
                              <a onclick="show2()" href="#" class="menu_link">
                                 Page 2
                              </a>
                           </li>
                           <li class="menu_item">
                              <a onclick="show3()" href="#" class="menu_link">
                                 Page 3
                              </a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </header>
            <div id="cont" class="cont">
               <div class="page0_content">
                  <div class="page0_word1 text1">company</div>
                  <div class="page0_word2 text1">may be</div>
                  <div class="page0_word3 text1">better</div>
               </div>
            </div>
         </div>
         <div id="page1" class="page1">
            <div onclick="back()" class="btn01">
               <div class="close"></div>
            </div>
            <div id="page1_content" class="page1_content">
               <div class="page1_text">
                  <h3>Title</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia 
                     architecto delectus eum alias totam a ullam modi nisi asperiores est.</p>
               </div>
               <img src="img/img1.png" alt="icon" class="page1_img">
            </div>
            <div class="square">
               <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
               </ul>
            </div>
         </div>
         <div id="page2" class="page2">
            <div onclick="back2()" class="btn01">
               <div class="close"></div>
            </div>
            <div id="page2_items" class="cont2">
               <div class="page2_items">
                  <div class="page2_item">
                     <div class="text2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Mollitia architecto delectus eum alias totam a ullam modi nisi asperiores est. 
                     </div>
                     <div class="btn2">
                        <p onclick="bg()" class="link2 link21">color</p>
                     </div>
                  </div>
                  <div class="page2_item">
                     <div class="text2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Mollitia architecto delectus eum alias totam a ullam modi nisi asperiores est. 
                     </div>
                     <div class="btn2">
                        <p onclick="bg2()" class="link2 link22">color</p>
                     </div>
                  </div>
                  <div class="page2_item">
                     <div class="text2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Mollitia architecto delectus eum alias totam a ullam modi nisi asperiores est. 
                     </div>
                     <div class="btn2">
                        <p onclick="bg3()" class="link2 link23">color</p>
                     </div>
                  </div>
                  <div class="page2_item">
                     <div class="text2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Mollitia architecto delectus eum alias totam a ullam modi nisi asperiores est. 
                     </div>
                     <div class="btn2">
                        <p onclick="bg4()" class="link2 link24">color</p>
                     </div>
                  </div>
               </div>
               <div class="circle">
                  <ul>
                     <li></li>
                     <li></li>
                     <li></li>
                  </ul>
               </div>
            </div>
         </div>
         <div id="page3" class="page3">
            <div class="conteiner">
               <div onclick="back3()" class="btn01">
                  <div class="close"></div>
               </div>
               <div class="page3_content">
                  <div class="arrow">
                     <img onclick="turn()" src="img/arl.png" alt="icon" class="img_ar">
                     <img onclick="turn1()" src="img/arr.png" alt="icon" class="img_ar">
                  </div>
                  <div class="page3_items">
                     <div id="page3_im1" class="page3_item page3_im1">
                        <img id="img1" class="img1" src="img/cha1.png" alt="icon">
                        <p>praze 100$</p>
                     </div>
                     <div id="page3_im2" class="page3_item page3_im2">
                        <img id="img2" src="img/cha2.png" alt="icon">
                        <p>praze 100$</p>
                     </div>
                     <div id="page3_im3" class="page3_item page3_im3">
                        <img id="img3" class="img3" src="img/cha3.png" alt="icon">
                        <p>praze 100$</p>
                     </div>
                     <div id="page3_im4" class="page3_item page3_im4">
                        <img id="img4" class="img4" src="img/cha4.png" alt="icon">
                        <p>praze 100$</p>
                     </div>
                  </div>
                  <div class="square">
                     <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <script src="js/main.js"></script>
</body>
</html>
