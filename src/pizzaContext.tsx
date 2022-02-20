import React, { useState, createContext } from "react";

export const PizzaContext: any = createContext(null);

export const Provider = (props: any) => {
  const [cardNum, setCardNum] = useState<any>("");
  const [cardDate, setCardDate] = useState<any>("");
  const [cardCode, setCardCode] = useState<any>("");
  const [cardErr, setCardErr] = useState<any>("");

  const [pizzNum, setPizzNum] = useState<any>("");
  const [pizzTypes, setPizzTypes] = useState<any>("");
  const [pizzSize, setPizzSize] = useState<any>("");
  const [pizzaErr, setPizzaErr] = useState<any>("");
  const [lastName, setLastName] = useState<any>("");
  const [firstName, setFirstName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [address, setAddress] = useState<any>("");
  const [userErr, setUserErr] = useState<any>("");


  return (
    <PizzaContext.Provider
      value={{
        card: [
          cardNum,
          setCardNum,
          cardDate,
          setCardDate,
          cardCode,
          setCardCode,
          cardErr,
          setCardErr,
        ],
        pizza: [
          pizzNum,
          setPizzNum,
          pizzTypes,
          setPizzTypes,
          pizzSize,
          setPizzSize,
          pizzaErr,
          setPizzaErr,
        ],
        user: [
          lastName,
          setLastName,
          firstName,
          setFirstName,
          email,
          setEmail,
          address,
          setAddress,
          userErr,
          setUserErr,
        ],
      }}
    >
      {props.children}
    </PizzaContext.Provider>
  );
};
