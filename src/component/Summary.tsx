import React, { useContext, useState, useEffect } from "react";
import Button from "./Button";
import ControlBtn from "../component/ControlBtn";
import { PizzaContext } from "../pizzaContext";

function Summary({
  next,
  previous,
  disable1,
  disable2,
}: {
  next?: any;
  previous: any;
  disable1: boolean;
  disable2: boolean;
}) {
  const [confirm, setConfirm] = useState<any>(false);

  const { pizza } = useContext(PizzaContext);
  const { user } = useContext(PizzaContext);
  const { card } = useContext(PizzaContext);

  const pizzNum = pizza[0];
  const pizzTypes = pizza[2];
  const pizzSize = pizza[4];

  const cardNum = card[0];
  const cardDate = card[2];
  const cardCode = card[4];

  const lastName = user[0];
  const firstName = user[2];
  const email = user[4];
  const address = user[6];

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="pt-5 bg-secondary mx-auto col-12 col-md-6 col-lg-4 main-height">
          <h1 className="text-white text-center">Summary</h1>
          <Content label="First Name:" resp={firstName} />
          <Content label="Last Name:" resp={lastName} />
          <Content label="Email:" resp={email} />
          <div>
            <p className="text-white me-2">Address:</p>
            <p className="text-white">{address}</p>
          </div>
          <Content label="Piza Name:" resp={pizzTypes} />
          <Content label="Piza Number:" resp={pizzNum} />
          <Content label="Amount:" resp={pizzNum * pizzSize} />

          <div className="d-flex">
            <input
              className="form-check-input mt-1 me-4"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
              checked={confirm}
              onChange={() => setConfirm(!confirm)}
            />
            <p className="text-white">Confirm agreement to terms</p>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              label="Confirm"
              disabled={!confirm}
              onClick={() =>
                console.log(
                  pizzNum,
                  pizzSize,
                  pizzTypes,
                  cardNum,
                  cardDate,
                  cardCode,
                  lastName,
                  firstName,
                  email,
                  address,
                  "logged data"
                )
              }
            />
          </div>
        </div>
      </div>
      <ControlBtn
        disabled1={disable1}
        disabled2={disable2}
        previous={previous}
      />
    </div>
  );
}

export default Summary;

const Content = ({ label, resp }: { label: string; resp: string | number }) => {
  return (
    <div className="d-flex justify-content-start">
      <p className="text-white me-2">{label}</p>
      <p className="text-white">{resp}</p>
    </div>
  );
};
