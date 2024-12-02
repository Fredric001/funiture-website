
// 
let mainTwoCont= document.getElementById("main-two-cont")
let goToCart= document.getElementById("go-Cart")

goToCart.addEventListener("click",()=>{
    mainTwoCont.style.display="grid"
    mainTwoCont.style.position="absolute" 
})
// 

let closePaymentBtn =document.getElementById("close-payment-btn")
closePaymentBtn.addEventListener("click",()=>{
    mainTwoCont.style.display="none"
})


// 
let increaseBtn=document.getElementById("increase-btn")
let decreaseBtn=document.getElementById("decrease-btn")
let countPlace=document.getElementById("count-place")
let itemPrice=document.getElementById("item-price")

let itemCount= 0;
let itemPriceMultipliction= 0;
increaseBtn.addEventListener("click",()=>{
 itemCount ++;
 countPlace.innerText=itemCount;
 if (itemCount=>2) {

 }


})
decreaseBtn.addEventListener("click",()=>{
 itemCount --;
 countPlace.innerText=itemCount;
 if (itemCount<=0) {
   itemCount=0;
   countPlace.innerText=itemCount;
   alert("alert please add item to cart")

 }
 
})