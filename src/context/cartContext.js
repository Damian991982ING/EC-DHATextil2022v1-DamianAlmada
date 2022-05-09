import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const useCartContext=()=>useContext(CartContext);

export function CartContextProvider({children}){
    const [cart, setCart] = useState([]);

    const contextFunction=()=>console.log("Contexto listo!");

    const addProduct=(product,quantity)=>{
       if(isInCart(product.id)){
           const newCart = cart.map(cartItem=>{
               if(cartItem.id === product.id){
                   const copyProduct = {...cartItem};
                   copyProduct.quantity += quantity;
                   return copyProduct
               }
               else
                return cartItem
               
           })
           setCart(newCart);
       }else{
           const newProduct={...product,quantity};
           setCart([...cart, newProduct])
       }
        

    }

    const removeProduct=(id)=>{
        setCart(cart.filter(i=>i.id !== id));

    }

    const clearProducts=()=>{
        setCart([]);

    }

    const isInCart=(id)=>{
        return cart.some((i)=>{
            if(i.id===id)
                return true;
            else
               return false;
            
        })

    }


    return(
        <CartContext.Provider value={{contextFunction,cart , addProduct, removeProduct, clearProducts, isInCart}}>
            {children}
        </CartContext.Provider>
    )

}

export default useCartContext