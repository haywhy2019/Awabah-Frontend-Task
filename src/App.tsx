import React, { useState } from "react";
import PizzaForm from "./Forms/pizzaForm";
import UserForm from "./Forms/userForm";
import CardForm from "./Forms/cardForm";
import Button from "./component/Button";
import Summary from "./component/Summary";
import CustomInput from "./component/Input";
import dummy from "./dummy";



const App = () => {
  const [step, setStep] = useState(1);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<any>({});


  const searchPizza = (e: any) => {
    e.preventDefault();
    const found: any = dummy.find(
      (element: any) => element.name.toLowerCase() === search.toLowerCase()
    );
    setSearchResult(found);
  };
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
    <div className="bg-image">
      <p className="text-white text-center py-4">
        search only works for pizza names that appear on the pizza type drop
        down. any other search value would return pizza not found
      </p>
      <div className="col-12 col-md-6 col-lg=4 d-md-flex  mx-auto align-items-center ">
        <CustomInput
          type="search"
          placeholder="search "
          onChange={(e: any) => setSearch(e.target.value)}
        />
        <div className="py-2 text-center mx-auto">
          <Button label="Search" onClick={searchPizza} />
        </div>
      </div>
      <div>
        <p className="text-white text-center">
          {searchResult ? searchResult.name : "Pizza not found"}
        </p>
      </div>
      <div className="container-fluid mb-4">
        {step == 1 && (
          <PizzaForm
            next={next}
            previous={previous}
            disable1={true}
            disable2={false}
          />
        )}
        {step == 2 && (
           <CardForm   
            next={next}
            previous={previous}
            disable1={false}
            disable2={false}/>)}
        {step == 3 && <UserForm  
         next={next}
            previous={previous}
            disable1={false}
            disable2={false}/>}
        {step == 4 && <Summary 
         
         previous={previous}
         disable1={false}
         disable2={true}
        />}
      </div>
    </div>
  );
};

export default App;
