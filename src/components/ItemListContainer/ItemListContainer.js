import React,{useState,useEffect, useContext} from "react";
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import Products from "../../db/products";
import { useParams } from "react-router-dom";
import CartContext from "../../context/cartContext";


const getProducts =(nameCat)=> {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(nameCat !== undefined) {
                const arrayFiltered = Products.filter((product)=> {
                    
                    return product.category === nameCat;
                      
                });
                resolve(arrayFiltered);
                
            }
            else{
                resolve(Products);


            }
            
        }, 2000);

    });

};

const ItemListContainer = ({titleSection}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading]= useState(true);

    const {nameCat} = useParams();

    const cartCtx = useContext(CartContext);

    

    useEffect(()=>{
        getProducts(nameCat).then((res)=>{
            setProducts(res)
            setLoading(false);
            
        });

    },[nameCat]);


    return(
        <div id="ItemListContainer">
            <h1>{titleSection}</h1>
            {loading && <Loading/>}
            <ItemList items={products}/>
            
        </div>
       

        

    );

}

export default ItemListContainer;