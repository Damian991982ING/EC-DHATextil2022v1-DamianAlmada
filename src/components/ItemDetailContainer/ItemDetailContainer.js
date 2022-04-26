import React,{useState,useEffect} from "react";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import BH1 from "../../assets/BH1.jpg";


const objProducts = [
    {id:1,title:"BH1",description:"Polyamide thread spool",category:"Polyamide",price:100,colors:["red","black","crimson","teal"],sizes:["1d","2d","3d","4d"],stock:10,pictureUrl:BH1}
    
];

const ItemDetailContainer=()=>{
    const [products,setProducts] = useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{

        const getProducts = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(objProducts);
                
            },3000)});

            getProducts.then(
                res=>{
                    setProducts(res)
                    setLoading(false)
        
                },
                err=>{console.log(err)}
            );
            getProducts.catch(err=>{
                console.log(err);
        
            });
            getProducts.finally(()=>{
                console.log("Se resolvio la promesa");
            });

    },[]);


    return(
        <div id="ItemDetailContainer">
            {loading && <Loading/>}
            {products.map(product=>
                <ItemDetail id={product.id} title={product.title} description={product.description} price={product.price} colors={product.colors} sizes={product.sizes} pictureUrl={product.pictureUrl}/>)}

        </div>
    )



}

export default ItemDetailContainer;