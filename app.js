/* ===============================
页脚
================================ */


.footer{


padding:

60px 8%;


background:#000;


border-top:

1px solid rgba(255,255,255,.1);


}



.footer-container{


display:flex;


justify-content:space-between;


align-items:center;


}



.footer-logo{


font-size:32px;


font-weight:900;


letter-spacing:3px;


}




.footer-text{


font-size:14px;


color:#777;


line-height:2;


text-align:right;


}







/* ===============================
滚动动画
================================ */



.fade{


opacity:0;


transform:


translateY(50px);



transition:

1s ease;


}



.fade.show{


opacity:1;


transform:


translateY(0);


}





/* ===============================
页面进入动画
================================ */



@keyframes fadeIn{


from{


opacity:0;


transform:translateY(30px);


}



to{


opacity:1;


transform:translateY(0);


}


}





.hero-content{


animation:

fadeIn 1.5s ease;


}







/* ===============================
按钮高级效果
================================ */



.btn,
.product-btn{


position:relative;


overflow:hidden;


}




.btn::before,
.product-btn::before{


content:"";


position:absolute;


top:0;


left:-100%;


width:100%;


height:100%;



background:

linear-gradient(

120deg,

transparent,

rgba(255,255,255,.5),

transparent

);



transition:.6s;


}



.btn:hover::before,
.product-btn:hover::before{


left:100%;


}







/* ===============================
滚动条美化
================================ */



::-webkit-scrollbar{


width:10px;


}



::-webkit-scrollbar-track{


background:#050505;


}




::-webkit-scrollbar-thumb{


background:

linear-gradient(

#555,

#111

);



border-radius:10px;


}







/* ===============================
大屏幕优化
================================ */



@media(min-width:1600px){



.hero-title{


font-size:110px;


}



.section-title{


font-size:65px;


}



.product-title{


font-size:90px;


}



}





/* ===============================
平板设备
================================ */



@media(max-width:1200px){



.container{


padding:

0 30px;


}




.business-grid{


grid-template-columns:

repeat(3,1fr);


}




.management-container{


grid-template-columns:

repeat(2,1fr);


}



.research-grid{


grid-template-columns:

repeat(2,1fr);


}



.about{


gap:40px;


}



.product-item{


height:600px;


}



}





/* ===============================
手机设备
================================ */



@media(max-width:768px){



.header{


height:65px;


padding:

0 20px;


}



.logo{


font-size:22px;


}



.logo span{


display:none;


}



.nav{


display:none;


}




.hero{


min-height:700px;


}



.hero-title{


font-size:42px;


letter-spacing:2px;


}




.hero-subtitle{


font-size:20px;


}




.hero-buttons{


flex-direction:column;


align-items:center;


}




.btn{


width:220px;


}




.section{


padding:

90px 20px;


}




.section-title{


font-size:38px;


}



.section-desc{


font-size:15px;


}




.about{


flex-direction:column;


}



.about-title{


font-size:32px;


}



.about-card{


padding:30px;


}





.business-grid{


grid-template-columns:

1fr;


}



.business-card{


height:350px;


}




.product-item{


height:500px;


border-radius:25px;


}




.product-title{


font-size:45px;


}



.ai-title{


font-size:55px;


}




.education-title{


font-size:50px;


}



.game-title{


font-size:55px;


}



.product-desc{


font-size:17px;


}



.product-price{


font-size:32px;


}




.research-grid{


grid-template-columns:

1fr;


}



.management-container{


grid-template-columns:

1fr;


}




.values-content{


gap:30px;


}




.value-box{


width:260px;


height:260px;


}




.contact-item{


width:100%;


}




.footer-container{


flex-direction:column;


gap:25px;


text-align:center;


}



.footer-text{


text-align:center;


}


}







/* ===============================
超小屏幕
================================ */



@media(max-width:380px){



.hero-title{


font-size:35px;


}




.product-title{


font-size:38px;


}



.value-box{


width:220px;


height:220px;


}



}







/*
================================================

style.css 完成

================================================
*/
// ===============================
// 页面加载动画
// ===============================



window.addEventListener(

"load",

()=>{



document.body.classList.add(

"loaded"

);



});








// ===============================
// 鼠标光效
// ===============================



const glowElements = document.querySelectorAll(

".business-card, .research-card, .management-item, .contact-item"

);





glowElements.forEach(

(card)=>{



card.addEventListener(

"mousemove",

(event)=>{



const rect =

card.getBoundingClientRect();




const x =

event.clientX -

rect.left;



const y =

event.clientY -

rect.top;





card.style.background =

`

radial-gradient(

circle at ${x}px ${y}px,

rgba(0,150,255,.18),

rgba(255,255,255,.05)

)

`;



}

);






card.addEventListener(

"mouseleave",

()=>{



card.style.background = "";



}

);



});








// ===============================
// 返回顶部按钮
// ===============================



const backTop = document.createElement(

"button"

);



backTop.innerHTML =

"↑";



backTop.className =

"back-top";





document.body.appendChild(

backTop

);







backTop.style.cssText = `

position:fixed;

right:30px;

bottom:30px;

width:50px;

height:50px;

border-radius:50%;

border:none;

background:#fff;

color:#000;

font-size:24px;

cursor:pointer;

display:none;

z-index:999;

transition:.3s;

`;







window.addEventListener(

"scroll",

()=>{



if(window.scrollY > 600){



backTop.style.display =

"block";



}

else{



backTop.style.display =

"none";



}



}

);






backTop.addEventListener(

"click",

()=>{



window.scrollTo({



top:0,



behavior:

"smooth"



});



});








// ===============================
// 产品区域观察
// ===============================



const products = document.querySelectorAll(

".product-item"

);





products.forEach(

(product)=>{



product.addEventListener(

"mouseenter",

()=>{



product.style.transform =

"scale(1.02)";



product.style.transition =

".5s";



}

);






product.addEventListener(

"mouseleave",

()=>{



product.style.transform =

"scale(1)";



}

);



});








// ===============================
// 当前年份自动更新
// ===============================



const yearElements =

document.querySelectorAll(

".year"

);





yearElements.forEach(

(element)=>{



element.textContent =

new Date().getFullYear();



}

);







// ===============================
// 安全初始化
// ===============================



console.log(

`

================================

石头国际股份有限公司

SHITOU INTERNATIONAL

官方网站系统启动完成

================================

`

);



/*
================================================

app.js 完成

================================================
*/