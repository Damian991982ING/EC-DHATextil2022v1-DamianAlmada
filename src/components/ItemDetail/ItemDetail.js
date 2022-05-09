import React,{ useRef, useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import useCartContext from "../../context/cartContext";

const ItemDetail=({product})=>{
    


    const [isInCart, setIsInCart] = useState(false);

    const { addProduct } = useCartContext();


    function onAdd(counter){
        setIsInCart(true);
        addProduct(product, counter)
        console.log("Agregado al cart:",product, counter)

    }
    
    
    
    
    const imgDiv = useRef();

    const handleMouseMove = e =>{
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }


    return(
        <div className="details">
            
            <div className="img-container" onMouseMove={handleMouseMove}  style={{backgroundImage:`url(${product?.pictureUrl})`}} ref={imgDiv} onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />
            

            <div className="box-details">
                <h2 id={product?.id}>{product.id}</h2>
                <h2 title={product?.title}>{product?.title}</h2>
                <h3>${product.price}</h3>
                <p>{product?.description}</p>
                

                {isInCart?

                <Link to={'/cart'}>
                     <button className="cart">Cart view</button>

                </Link>




                :
                  <ItemCount initial={1} max={product?.stock} min={0} onAdd={onAdd}/>

                }
                
                
            </div>
        </div>

    ) 

}

export default ItemDetail;