import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useHistory } from "react-router-dom";

export const LocationForm = () => {
  const { addLocation } = useContext(LocationContext);

  const [location, setLocation] = useState({
    name: "",
    address: "",
  });
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newLocation = { ...location };
    newLocation[event.target.id] = event.target.value;
    setLocation(newLocation);
  };

  const handleClickSaveLocation = (event) => {
    event.preventDefault();
    if (!location.name || !location.address) {
      window.alert("Please select a name and location"); 
    } else{
    const newLocation = {
      name: location.name,
      address: location.address,
      };
    addLocation(newLocation).then(() => history.push("/locations"));
    }
  };

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name"> Location Name:</label>
          <input
            type="text"
            id="name"
            required
            utoFocus
            className="form-control"
            placeholder="Location name"
            value={location.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address"> Location Address:</label>
          <input
            type="text"
            id="address"
            required
            utoFocus
            className="form-control"
            placeholder="Location address"
            value={location.address}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveLocation}>
        Save Location
      </button>
    </form>
  );
};
