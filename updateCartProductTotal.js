import { getCartProductFromLS } from "./getCartProducts";
import { increDecrement } from "./increDecrement";

export const updateCartProductTotal=()=>{
    const productSubTotal=document.querySelector(".productSubTotal");
    const productFinalTotal=document.querySelector(".productFinalTotal");
    const productTax=document.querySelector(".productTax");

    let cartProducts=getCartProductFromLS();

    let initialValue=0;
    let totalProductPrice=cartProducts.reduce((accum,curElem)=>{
    let productPrice=parseInt(curElem.price)||0;
     
    return accum+productPrice;
    },initialValue);

   

 

    let tax=productTax.textContent;
    let taxrep=tax.replace("৳",'');
    
    let finalTotal=Number(taxrep)+Number(totalProductPrice);

    productSubTotal.innerText=`৳${totalProductPrice.toString()}`;

    if(Number(totalProductPrice)>0){
        productFinalTotal.innerText= `৳${finalTotal.toString()}`;
    }else{
        productFinalTotal.innerText='';
    }
    

}