import React, { useState } from "react";
import PizzaForm from "./Forms/pizzaForm";
import UserForm from "./Forms/userForm";
import CardForm from "./Forms/cardForm";
import Button from "./component/Button";
import Summary from "./component/Summary";

const App = () => {
  const [step, setStep] = useState(1);

  const previous = () => {
    if (step == 1) {
      return;
    } else {
      setStep(step - 1);
    }
  };

  const next = () => {
    if (step == 4) {
      return;
    } else {
      setStep(step + 1);
    }
  };
  return (
    <div className="bg-image ">
      <div className="container-fluid">
        {step == 1 && <PizzaForm />}
        {step == 2 && <CardForm />}
        {step == 3 && <UserForm />}
        {step == 4 && <Summary />}

        <div className="col-12  d-flex justify-content-center  pt-5">
          <div className="btn-group me-5">
            <Button
              label="Previous"
              onClick={previous}
              disabled={step == 1 ? true : false}
            />
          </div>
          <div className="btn-toolbar">
            <Button
              label="Next"
              onClick={next}
              disabled={step == 4 ? true : false}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
