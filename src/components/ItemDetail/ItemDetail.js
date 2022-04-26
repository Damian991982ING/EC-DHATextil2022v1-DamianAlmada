import React,{useRef} from "react";
import Colors from "../Colors/Colors";

import Sizes from "../Sizes/Sizes";
import "./ItemDetail.css";

const ItemDetail=({id, title, description, price, colors, sizes, pictureUrl})=>{
    
    const imgDiv = useRef();

    const handleMouseMove = e =>{
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }




    return(
        <div className="details">
            <div className="img-container" onMouseMove={handleMouseMove} style={{backgroundImage:`url(${pictureUrl})`}} ref={imgDiv} onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />

            <div className="box-details">
                <h2 title={title}>{title}</h2>
                <h3>${price}</h3>
                <h2>Colors</h2>
                <Colors colors={colors}/>
                <h2>Sizes</h2>
                <Sizes sizes={sizes}/>
                <p>{description}</p>
                

            </div>
               
                

        

        </div>
    ) 

}
export default ItemDetail;