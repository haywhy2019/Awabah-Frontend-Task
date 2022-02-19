import React from "react";
import Button from "./Button";


function Summary() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="pt-5 bg-secondary mx-auto col-12 col-md-6 col-lg-4 main-height">
            <h1 className="text-white text-center">Summary</h1>
         <div>
             <p className="text-white">order</p>
             <p className="text-white">order</p>
         </div>
         <div className="d-flex justify-content-center">
         <Button label="Confirm" onClick={() => console.log("test")}/>
         </div>
       
        </div>
      
      </div>
    </div>
  );
}

export default Summary;
