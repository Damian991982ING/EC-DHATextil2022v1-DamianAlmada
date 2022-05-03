import React,{useRef} from "react";


import ItemCount from "../ItemCount/ItemCount";




import "./ItemDetail.css";

const ItemDetail=({product})=>{
    
    
    
    
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
                <h2 id={product?.id}>{product?.id}</h2>
                <h2 title={product?.title}>{product?.title}</h2>
                <h3>${product?.price}</h3>
                <p>{product?.description}</p>
                <ItemCount initial={1} max={product?.stock} min={0}/>
                
            </div>
        </div>

    ) 

}

export default ItemDetail;