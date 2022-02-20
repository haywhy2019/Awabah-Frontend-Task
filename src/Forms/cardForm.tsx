import React, {useState, useContext} from "react";
import CustomInput from "../component/Input";
import ControlBtn from "../component/ControlBtn";
import {PizzaContext} from "../pizzaContext"

function CardForm({
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
  const {card }  = useContext(PizzaContext);
  const [cardNum, setCardNum, cardDate, setCardDate,cardCode, setCardCode,cardErr, setCardErr] = card
  const checkField = () => {
    if ((cardNum == "") || (cardDate == "") ||( cardCode == "")) {
      setCardErr("all fields must be filled");
      return;
    } else {
      // setCardErr("");
      console.log(cardNum, "num", cardDate, "date", cardCode, "code")
      next();
    }
  };

  return (
    <div className="container pt-5">
      <div className="row">
        <form className="pt-5 bg-secondary mx-auto col-12 col-md-6 col-lg-4 main-height">
          <CustomInput
            label="CardNumber"
            type="number"
            value={cardNum}
            onChange={(e:any) => setCardNum(e.target.value)}
            placeholder="Enter card No"
          />
          <CustomInput
            label="Card Expiration Date"
            type="date"
            value={cardDate}
            onChange={(e:any) => setCardDate(e.target.value)}
            placeholder="YYYY/MM"
          />
          <CustomInput
            label="Card Security Code"
            type="number"
            value={cardCode}
            onChange={(e:any) => setCardCode(e.target.value)}
            placeholder="Enter Security No"
          />
            <p className="text-danger text-center">{cardErr}</p>
        </form>
      </div>
      <ControlBtn
        next={checkField}
        disabled1={disable1}
        disabled2={disable2}
        previous={previous}
        // step={step}
      />
    </div>
  );
}

export default CardForm;
