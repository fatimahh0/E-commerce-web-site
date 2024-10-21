// Importation des modules nécessaires depuis React
import { useState } from 'react';
import React, { createContext } from "react";
// Importation des données 'all_product' depuis un fichier local
import all_product from '../components/assets/all_product';

// Création d'un contexte (une boîte partagée) appelé ShopContext
// Ce contexte va permettre de partager des données (ici les produits) à travers plusieurs composants
export const ShopContext = createContext(null);

const getDefaultCart =()=>{
    let cart ={};
    for (let i=0; i<all_product.length+1; i++)
    {
        cart[i] = 0;
    }
    return cart;

}



// Définition d'un composant appelé ShopContextProvider
// Ce composant va "fournir" les données à tous les composants qui sont ses enfants
const ShopContextProvider = (props) => {
    // On définit la valeur que l'on veut partager avec les composants enfants
    // Ici, on partage un objet qui contient les produits (all_product)
    const [cartItems,setCartItems]=useState(getDefaultCart());
   

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1} ));
        console.log(cartItems);
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>(
            {...prev,[itemId]:prev[itemId]-1}
        ))
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for (let key in cartItems) 
        {
            const product = all_product.find((product) => product.id === parseInt(key));
            if (product) {
            total += product.new_price * cartItems[key];
          }
        }
        return total;
      };
    
    const getTotalCartItems =()=>{
        let totalItem = 0;
        for( let item in cartItems )
        {
            if(cartItems[ item]>0)
            {
                totalItem += cartItems[item];
            }
        }   
        return totalItem;     
    }
    
    const contextValue = { getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart };



    // On retourne le composant Provider du contexte
    // ShopContext.Provider va envelopper tous les composants enfants et leur donner accès à contextValue
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}  {/* props.children représente les composants enfants qui seront enveloppés */}
        </ShopContext.Provider>
    );
};

// Exportation du composant ShopContextProvider
// Cela permet de l'utiliser dans d'autres parties de l'application pour fournir le contexte
export default ShopContextProvider;
