import React, { useState, createContext } from "react";

export const LocationContext = createContext();
export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch("https://nss-kennels-api.herokuapp.com/locations")
      .then((res) => res.json())
      .then(setLocations);
  };
  const addLocation = (locationObj) => {
    return fetch("https://nss-kennels-api.herokuapp.com/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationObj),
    })
      .then((response) => response.json())
      .then(getLocations);
  };

  return (
    <LocationContext.Provider
      value={{
        locations,
        addLocation,
        getLocations,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
