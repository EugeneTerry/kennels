import React, { useState, createContext} from 'react'

export const EmployeeContext = createContext()

export const EmployeeProvider=(props)=> {
  const [employees, setemployees] = useState([])

  const getemployees = ()=>{
    return fetch("http://localhost:8088/employees?_expand=location")
    .then(res=>res.json())
    .then(setemployees)
  }

  const addemployee = employeeObj => {
    return fetch("http://localhost:8088/employees",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
      body: JSON.stringify(employeeObj)
    })
    .then(getemployees)
  }
  return (
    <EmployeeContext.Provider value={{
      employees, getemployees, addemployee
    }}>
      {props.children}
    </EmployeeContext.Provider>
  )
}
