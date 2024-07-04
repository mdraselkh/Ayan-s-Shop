import {homeQuantityToggle} from './homeQuantityToggle.js'
import {addToCart} from './addToCart.js'

const productContainer =document.querySelector("#productContainer");
const productTemplate =document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
    if(!products){
        return false;
    }

    products.forEach((cartPro) => {
        const {id,name,category,price,stock,description,image}=cartPro;

        const productClone=document.importNode(productTemplate.content, true );

        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".productImage").alt=name;
        productClone.querySelector(".productStock").textContent=stock;
        productClone.querySelector(".productDescription").textContent=description;
        productClone.querySelector(".productPrice").textContent=`৳${price}`;
        productClone.querySelector(".productActualPrice").textContent=`৳${price * 1.8}`;

        productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
            homeQuantityToggle(event,id,stock);
        });

        productClone.querySelector(".add-to-cart-button").addEventListener('click',(event)=>{
          addToCart(event,id,stock);
        });



        productContainer.append(productClone);
    });
};