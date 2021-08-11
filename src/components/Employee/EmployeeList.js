import React, { useEffect, useContext } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeList = () => {
  const history = useHistory()
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);

  return (
    <>
    <h2>Employees</h2>
      <button onClick={
        () => history.push("/employees/create")
      }>
            New Employee
      </button>
    <section className="employees">
      {employees.map((employee) => {
        return (
          <div className="employee" id={`employee--${employee.id}`}>
            <div className="employee__name">{employee.name}</div>
            <div className="employee__location">Location: {employee.location.name}</div>
          </div>
        );
      })}
    </section>
    </>
  );
};
