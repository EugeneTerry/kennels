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
import { AnimalDetail } from "./animal/AnimalDetails";
import { LocationForm } from "./Location/LocationForm";

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
              <Route exact path="/animals">
                <AnimalList />
              </Route>
              <Route path="/detail/:animalId(\d+)">
                <AnimalDetail />
              </Route>
              <Route path="/animals/create">
                <AnimalForm />
              </Route>
              <Route path="/animals/edit/:animalId(\d+)">
                <AnimalForm />
              </Route>
              <Route exact path="/locations">
                <LocationList />
              </Route>
              <Route path="/locations/create">
                <LocationForm />
              </Route>
              <Route exact path="/customers">
                <CustomerList />
              </Route>
              <Route exact path="/employees">
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
