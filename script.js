const bestSellerBtns=document.querySelectorAll(".best_seller_item_btn")
const checkoutCounter=document.querySelector(".navbar_checkout_counter")

let total=0

bestSellerBtns.forEach(btn=>btn.addEventListener("click",function(e){
    e.preventDefault()
    total++
    return checkoutCounter.textContent=total
    
}))