import {getCartProductFromLS} from './getCartProducts.js';
export const fetchQuantityFromCartLS=(id,price)=>{

    let cartProducts=getCartProductFromLS();

    console.log(cartProducts);

    let existingProd=cartProducts.find((cartProd)=> cartProd.id===id);
    let quantity=1;

    console.log(existingProd);

    if(existingProd){
        quantity=existingProd.quantity;
        price=existingProd.price;
    }

    return {quantity,price};
}