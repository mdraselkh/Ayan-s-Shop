const cartValue=document.querySelector("#cartValue");

export const updateCartValue=(cartProductLs)=>{
  return (cartValue.innerHTML=`<i class="fa-solid fa-cart-shopping">${cartProductLs.length}</i>`);
}