
let inputPrice =document.querySelectorAll('input')

function priceAfterDiscount(){
let originalPrice= inputPrice[0].value;
console.log(originalPrice); 
let discount =inputPrice[1].value * (1/100);
let result = originalPrice-(originalPrice*discount);
let p =document.createElement("p");
p.textContent=result
document.body.appendChild(p);
}