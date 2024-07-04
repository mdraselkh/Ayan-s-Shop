import {getCartProductFromLS} from './getCartProducts.js';
import { showToast } from './showToast.js';
import {updateCartValue} from './updateCartValue.js';

getCartProductFromLS();

export const addToCart = (event,id,stock)=>{

    let arrLocalStorageProduct=getCartProductFromLS();

    const currentProElement=document.querySelector(`#card${id}`);

    let quantity=currentProElement.querySelector(".productQuantity").innerText;
    let price=currentProElement.querySelector(".productPrice").innerText;

    // console.log(price,quantity);

    price=price.replace("৳","");

    let existingProd=arrLocalStorageProduct.find((cartProd)=> cartProd.id===id);

    
    
    

    if(existingProd && quantity>1 ){
        
        quantity=Number(existingProd.quantity)+Number(quantity);
        price=Number(price*quantity);

        let updatedCart={id,quantity,price};

        updatedCart=arrLocalStorageProduct.map((curProd)=>{

           return (curProd.id===id) ? updatedCart:curProd;
            

        });


        localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));

       
        
    }


    

    if(existingProd){
        // alert("This product is already in cart!");
        return false;
    }

    price=Number(price*quantity);
    quantity=Number(quantity);


    arrLocalStorageProduct.push({id,quantity,price});
    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);
    showToast("add",id);

}