import React,{useState,useEffect} from "react";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../db/products";
import { useParams } from "react-router-dom";


const getProduct=(productId)=> {
    const myPromise = new Promise((resolve,reject)=>{
        const item = Products.filter(item=>item.id === parseInt(productId));
        setTimeout(() => {
            resolve(item[0])
            
        }, 2000);

    });
    return myPromise
    
}
  


const ItemDetailContainer=()=>{
   


    const [product,setProduct] = useState([]);
    const [loading, setLoading]= useState(true);

    const { productId } = useParams();



    useEffect(()=>{
        console.log(productId);
        getProduct(productId).then(res=>{
            setProduct(res);
            setLoading(false);
            console.log("el id es" + res);
        });
    },[productId])

   

    return(
        <div id="ItemDetailContainer">
            {loading && <Loading/>}
            <ItemDetail product={product}/>
        </div>
    )



}

export default ItemDetailContainer;