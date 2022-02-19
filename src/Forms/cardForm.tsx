import React from "react";
import CustomInput from "../component/Input";

function CardForm() {
  return (
    <div className="container pt-5">
      <div className="row">
        <form className="pt-5 bg-secondary mx-auto col-12 col-md-6 col-lg-4 main-height">
          <CustomInput
            label="CardNumber"
            type="number"
            onChange={() => console.log("pizza number")}
            placeholder="Enter card No"
          />
          <CustomInput
            label="Card Expiration Date"
            type="date"
            onChange={() => console.log("pizza number")}
            placeholder="YYYY/MM"
          />
          <CustomInput
            label="Card Security Code"
            type="number"
            onChange={() => console.log("pizza number")}
            placeholder="Enter Security No"
          />
        </form>
      </div>
    </div>
  );
}

export default CardForm;
