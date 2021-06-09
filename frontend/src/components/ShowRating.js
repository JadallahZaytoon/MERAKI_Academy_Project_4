import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ShowRating({rate}) {


    return (
        <div>
          <div className="rating">
            {[...Array(rate)].map((element, i) => {
            
              return (
                <label>
                  
                  <FaStar
                    size={30}
                    color={"#424200"}
                
                  />
                </label>
              );
            })}
            
          </div>
          
    
        </div>
      );
}
