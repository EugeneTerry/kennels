import React, {useState, createContext} from "react"

export const LocationContext = createContext()
export const LocationProvider = (props) =>{
  const [locations, setLocations ] = useState([])

  const getLocations =()=> {
    return fetch("http://localhost:8088/locations?_expand=location")
    .then(res=>res.json())
    .then(setLocations)
  }
  const addLoction = locationObj => {
    return fetch("http://localhost:8088/locations", {
      method: "POST",
      header: {
        "Context-Type": "appliction/json"
      },
      body: JSON.stringify(locationObj)
    })
    .then(getLocations)
  }
  return(
    <LocationContext.Provider value={{
      locations, addLoction, getLocations
    }}>
      {props.children}
    </LocationContext.Provider>
  )
}