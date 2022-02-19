import React from 'react'
import CustomInput from "../component/Input";
import CustomSelect from "../component/SelectInput"
import dummy from "../dummy"

const sizes: Array<object> = [
    {name: "small", value: 10},
    {name: "medium", value: 20},
    {name: "large", value: 30}
  ]

function pizzaForm() {
  return (
    <div className='container pt-5 '>
    <div className='row'>
    <form className='pt-5 bg-secondary mx-auto col-12 col-md-6 col-lg-4 main-height'>

    <CustomInput
        label="Pizza Number"
        type="number"
        onChange={() => console.log("pizza number")}
        placeholder="minimum order number is 1"
      />
      <CustomSelect 
      label="Pizza Types"
      options={dummy}
      onChange={() => console.log("pizza")}
      />
       <CustomSelect 
      label="Pizza Size"
      options={sizes}
      onChange={() => console.log("pizza sizes")}
      />
    </form>
    </div>

    </div>
   
  )
}

export default pizzaForm