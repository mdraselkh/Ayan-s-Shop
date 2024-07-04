import {getCartProductFromLS} from './getCartProducts.js';
import { showToast } from './showToast.js';
import { updateCartProductTotal } from './updateCartProductTotal.js';
import { updateCartValue } from './updateCartValue';


export const removeProductData=(id)=>{
    let cartProducts=getCartProductFromLS();
    cartProducts=cartProducts.filter((curProd)=>(curProd.id!==id));

    console.log(cartProducts);

    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

    let removeDiv=document.getElementById(`card${id}`);

    if(removeDiv){
        removeDiv.remove();

        showToast("delete",id);
    }

    updateCartValue(cartProducts);
    updateCartProductTotal();
}