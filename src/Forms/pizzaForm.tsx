import React, { useState, useContext } from "react";
import CustomInput from "../component/Input";
import CustomSelect from "../component/SelectInput";
import ControlBtn from "../component/ControlBtn";
import dummy from "../dummy";
import {PizzaContext} from "../pizzaContext"


const sizes: Array<object> = [
  { name: "small", value: 10 },
  { name: "medium", value: 20 },
  { name: "large", value: 30 },
];

function pizzaForm({
  next,
  previous,
  disable1,
  disable2,
}: {
  next: any;
  previous: any;
  disable1: boolean;
  disable2: boolean;
}) {
 const {pizza} = useContext(PizzaContext);
  const [pizzNum, setPizzNum, pizzTypes, setPizzTypes, pizzSize, setPizzSize, pizzaErr, setPizzaErr] = pizza;

  const checkField = () => {
    if ((pizzNum == "" )||(pizzTypes == "")  || (pizzSize == "")) {
      setPizzaErr("all fields must be filled");
      return;
    } else {
      setPizzaErr("");
      next();
    }
  };
  return (
    <div className="container pt-5 ">
      <div className="row">
        <form className="pt-5 bg-secondary mx-auto col-12 col-md-6 col-lg-4 main-height">
          <CustomInput
            label="Pizza Number"
            type="number"
            value={pizzNum}
            onChange={(e: any) => setPizzNum(e.target.value)}
            placeholder="minimum order number is 1"
          />
          <CustomSelect
            label="Pizza Types"
            options={dummy}
            value={pizzTypes}
            onChange={(e: any) => setPizzTypes(e.target.value)}
          />
          <CustomSelect
            label="Pizza Size"
            options={sizes}
            value={pizzSize}
            onChange={(e: any) => setPizzSize(e.target.value)}
          />
          <p className="text-danger text-center">{pizzaErr}</p>
        </form>
      </div>
      <ControlBtn
        next={checkField}
        disabled1={disable1}
        disabled2={disable2}
        previous={previous}
      />
    </div>
  );
}

export default pizzaForm;
