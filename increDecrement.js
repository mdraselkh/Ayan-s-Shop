import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const increDecrement=(event,id,stock,price)=>{
    const currentProElement=document.querySelector(`#card${id}`);

    let proQuantity=currentProElement.querySelector(".productQuantity");
    let proPrice=currentProElement.querySelector(".productPrice");

    let quantity=1;
    let localStoragePrice=0;

    let localCartProduct=getCartProductFromLS();
    
    let existingProd=localCartProduct.find((curProd)=>(curProd.id===id));
    if(existingProd){
        quantity=existingProd.quantity;
        localStoragePrice=existingProd.price;
    }else{
        localStoragePrice=price;
        price=price;
    }

    if(event.target.className==="cartIncrement"){
        if(quantity<stock)
            {
                quantity+=1;
            }
        else if(quantity===stock){
            quantity=stock;
            localCartProduct=price*stock;
        }
    }

    if(event.target.className==="cartDecrement"){
        if(quantity>1){
            quantity-=1;
            
        }
    }

    localStoragePrice=price*quantity;
    localStoragePrice=Number(localStoragePrice.toFixed(2))

    let updatedCart={id,quantity,price:localStoragePrice};

        updatedCart=localCartProduct.map((curProd)=>{

           return (curProd.id===id) ? updatedCart:curProd;
            

        });


        localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));

    proQuantity.innerText=quantity;
    proPrice.innerText=localStoragePrice;

    updateCartProductTotal();
    
    
}