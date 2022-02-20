import React, {useState, useContext} from "react";
import CustomInput from "../component/Input";
import ControlBtn from "../component/ControlBtn";
import {PizzaContext} from "../pizzaContext"

function UserForm({
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

const {user} = useContext(PizzaContext);
  const [lastName, setLastName, firstName, setFirstName, email, setEmail, address, setAddress, userErr, setUserErr] = user
 

  const checkField = () => {
    if ((lastName == "") || (firstName == "") || (email == "") || (address == "")) {
      setUserErr("all fields must be filled");
      return;
    } else {
      setUserErr("");
      console.log(lastName,"first", firstName,'last', email,"mail", address)
      next();
    }
  };
  return (
    <div className="container pt-5">
      <div className="row">
        <form className="pt-5 bg-secondary mx-auto col-12 col-md-6 col-lg-4 main-height">
          <CustomInput
            type="text"
            placeholder="Last name"
            label="Last Name"
            value={lastName}
            onChange={(e:any) => setLastName(e.target.value)}
          />
          <CustomInput
            type="text"
            placeholder="First name"
            label="First Name"
            value={firstName}
            onChange={(e:any) => setFirstName(e.target.value)}
          />
          <CustomInput
            type="email"
            placeholder="Email"
            label="Email"
            value={email}
            onChange={(e:any) => setEmail(e.target.value)}
          />
          <CustomInput
            type="text"
            placeholder="Address"
            label="Address"
            value={address}
            onChange={(e:any) => setAddress(e.target.value)}
          />
           <p className="text-danger text-center">{userErr}</p>
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

export default UserForm;
