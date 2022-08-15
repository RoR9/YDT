const bestSellerBtns=document.querySelectorAll(".best-seller-item__btn")
const checkoutCounter=document.querySelector(".navbar-checkout__counter")

let total=0

bestSellerBtns.forEach(btn=>btn.addEventListener("click",()=>checkoutCounter.textContent=++total))