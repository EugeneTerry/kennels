import React, { useEffect, useContext } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees");
    getEmployees();
  }, []);

  return (
    <section className="employees">
      {employees.map((employee) => {
        return (
          <div className="employee" id={`employee--${employee.id}`}>
            <div className="employee__name">{employee.name}</div>
            <div className="employee__location">{employee.locationId}</div>
          </div>
        );
      })}
    </section>
  );
};
