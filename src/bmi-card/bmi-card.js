import React from "react";

const BMICard =()=>{
    const handledelete = ()=>{
    }
    return (
        <div className="bmi-card" data-tag="bmi-card">
             <div className="row">
               <div className="col"> 
                <div className="bmi">  BMI : ? </div>
                 <div>Height :? </div>
                   </div>
                   <div className="col"> 
                    <div>Weight : ? </div>
                  <div>Date : ? </div>
                  </div>
            </div>
           <button data-tag="delete-card" onClick={handledelete}>X</button>
        </div>
    )
}

export default BMICard ; 