import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider} from "./Location/LocationProvider"
import {LocationList} from "./Location/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList} from "./animal/AnimalList"
import { EmployeeProvider} from "./Employee/EmployeeProvider"
import { CustomerProvider} from "./Customers/CustomerProvider"
import { EmployeeList } from "./Employee/EmployeeList"
import { CustomerList } from "./Customers/CustomerList"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>
            <AnimalProvider>
                <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>
            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

        </>
    )
}
