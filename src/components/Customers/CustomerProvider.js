import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const CustomerContext = createContext();

// This component establishes what data can be used.
export const CustomerProvider = (props) => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    return fetch("https://nss-kennels-api.herokuapp.com/customers")
      .then((res) => res.json())
      .then(setCustomers);
  };

  const addCustomer = (customerObj) => {
    return fetch("https://nss-kennels-api.herokuapp.com/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerObj),
    }).then(getCustomers);
  };

  return (
    <CustomerContext.Provider
      value={{
        customers,
        getCustomers,
        addCustomer,
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};
