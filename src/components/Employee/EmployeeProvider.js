import React, { useState, createContext } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
  const [employees, setemployees] = useState([]);

  const getEmployees = () => {
    return fetch("https://nss-kennels-api.herokuapp.com/employees?_expand=location")
      .then((res) => res.json())
      .then(setemployees);
  };

  const addEmployee = (employeeObj) => {
    return fetch("https://nss-kennels-api.herokuapp.com/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeObj),
    })
      .then((response) => response.json())
      .then(getEmployees());
  };
  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getEmployees,
        addEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
