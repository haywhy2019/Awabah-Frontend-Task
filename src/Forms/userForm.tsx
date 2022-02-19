import React from "react";
import CustomInput from "../component/Input";

function UserForm() {
  return (
    <div className="container pt-5">
      <div className="row">
        <form className="pt-5 bg-secondary mx-auto col-12 col-md-6 col-lg-4 main-height">
          <CustomInput
            type="text"
            placeholder="Last name"
            label="Last Name"
            onChange={() => console.log("name")}
          />
          <CustomInput
            type="text"
            placeholder="First name"
            label="First Name"
            onChange={() => console.log("name")}
          />
          <CustomInput
            type="email"
            placeholder="Email"
            label="Email"
            onChange={() => console.log("name")}
          />
          <CustomInput
            type="text"
            placeholder="Address"
            label="Address"
            onChange={() => console.log("name")}
          />
        </form>
      </div>
    </div>
  );
}

export default UserForm;
