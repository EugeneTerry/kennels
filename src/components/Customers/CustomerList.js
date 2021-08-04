import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import "./Customer.css";

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    console.log("CustomerList: useEffect - getCustomers");
    getCustomers();
  }, []);

  return (
    <section className="customers">
      {customers.map((customer) => {
        return (
          <div className="customer" id={`customer--${customer.id}`}>
            <div className="customer__name">{customer.name}</div>
            <div className="customer__address">{customer.address}</div>
          </div>
        );
      })}
    </section>
  );
};
