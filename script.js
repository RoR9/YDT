const bestSellerBtns=document.querySelectorAll(".best-seller-item__btn")
const checkoutCounter=document.querySelector(".navbar-checkout__counter")

let total=0

bestSellerBtns.forEach(btn=>btn.addEventListener("click",function(e){
    e.preventDefault()
    total++
    return checkoutCounter.textContent=total
    
}))