import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./Location/LocationProvider";
import { LocationList } from "./Location/LocationList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeProvider } from "./Employee/EmployeeProvider";
import { CustomerProvider } from "./Customers/CustomerProvider";
import { EmployeeList } from "./Employee/EmployeeList";
import { CustomerList } from "./Customers/CustomerList";
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeForm } from "./Employee/EmployeeForm";

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <AnimalProvider>
          <CustomerProvider>
            <EmployeeProvider>
              <Route exact path="/">
                <LocationList />
              </Route>
              <Route path="/animals">
                <AnimalList />
              </Route>
              <Route path="/animals/create">
                <AnimalForm />
              </Route>
              <Route path="/locations">
                <LocationList />
              </Route>
              <Route path="/customers">
                <CustomerList />
              </Route>
              <Route path="/employees">
                <EmployeeList />
              </Route>
              <Route path="/employees/create">
                <EmployeeForm />
              </Route>
            </EmployeeProvider>
          </CustomerProvider>
        </AnimalProvider>
      </LocationProvider>
    </>
  );
};
