import React from 'react'
import Button from "./Button";

const ControlBtn = ({
    previous,
    next,
    step,
    disabled1,
    disabled2,
  }: {
    previous?: any;
    next?: any;
    step?: any;
    disabled1: boolean;
    disabled2: boolean;
  }) => {
    return (
      <div className="col-12  d-flex justify-content-center  pt-5">
        <div className="btn-group me-5">
          <Button
            label="Previous"
            onClick={previous}
            // disabled={step == 1 ? true : false}
            disabled={disabled1}
          />
        </div>
        <div className="btn-toolbar">
          <Button
            label="Next"
            onClick={next}
            // disabled={step == 4 ? true : false}
            disabled={disabled2}
          />
        </div>
      </div>
    );
  };

export default ControlBtn