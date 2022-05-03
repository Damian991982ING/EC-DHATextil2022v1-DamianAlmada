import React from "react";
import { Link } from "react-router-dom";
//import "./Item.css";

const Item=({item})=>{
    
    
    return(
        
        
        <div className="products">
            
            <div className="card">
                
                    <img src={item?.pictureUrl} alt=""/>
                
                <div className="box">
                    <h3 title={item.title}>
                        
                    </h3>
                    <p>{item?.description}</p>
                    <h4>${item?.price}</h4>
                    <Link to={`/product/` + item?.id}>
                       <button>Add to cart</button>

                    </Link>
                   
                    
                    
                </div>
            </div>
            
        </div>
        

        
    )

}
export default Item;