import React from "react"
import "./Kennel.css"
// import { Animal } from "./animal/Animal"
// import { Customer } from "./Customers/Customer"
// import { Employee } from "./Employee/Employee"
// import { Location } from "./Location/Location"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import { EmployeeList } from "./Employee/EmployeeList"
import { CustomerProvider } from "./Customers/CustomerProvider"
import { CustomerList } from "./Customers/CustomerList"
import { LocationProvider } from "./Location/LocationProvider"
import { LocationList } from "./Location/LocationList"

export const Kennel = () => (
  <>
    <h2>Nashville Kennels</h2>
    <medium>Loving care when you're not there.</medium>
    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>
    
    <h2>Animals</h2>
    <article className="animals">
      <AnimalProvider>
        <AnimalList />
      </AnimalProvider>
    </article>

    <h2>Employees</h2>
    <article className="employees">
      <EmployeeProvider>
        <EmployeeList />
      </EmployeeProvider>
    </article>

   <h2>Customers</h2>
   <article className="customers">
      <CustomerProvider>
        <CustomerList />
      </CustomerProvider>
    </article>

    <h2>Locations</h2>
    <article className="locations">
      <LocationProvider>
        <LocationList />
      </LocationProvider>
    </article>

    
  </>
)
