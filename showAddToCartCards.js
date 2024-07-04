import products from "./api/products.json";
import {getCartProductFromLS} from './getCartProducts.js';
import {fetchQuantityFromCartLS} from './fetchQuantityFromCartLS.js';
import {removeProductData} from './removeProductData.js';
import { increDecrement } from "./increDecrement.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

let cartProducts=getCartProductFromLS();

let filterProducts=products.filter((curProd)=>{

    return cartProducts.some((curElem)=> curElem.id===curProd.id);
});

const productCartContainer =document.querySelector("#productCartContainer");
const productCartTemplate =document.querySelector("#productCartTemplate");

const showCartProduct=()=>{
    filterProducts.forEach((cartPro)=>{
        const {id,name,category,price,stock,image}=cartPro;
        let productClone=document.importNode(productCartTemplate.content, true );

        const LSactualdata=fetchQuantityFromCartLS(id,price);
        console.log(LSactualdata);
        
        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);

        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".productPrice").textContent=LSactualdata.price;
        productClone.querySelector(".productQuantity").textContent=LSactualdata.quantity;

        productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
            increDecrement(event,id,stock,price);
        });

        productClone.querySelector('.remove-to-cart-button').addEventListener("click",()=>{removeProductData(id)})

        productCartContainer.append(productClone);
        
    });
}

showCartProduct();

updateCartProductTotal();