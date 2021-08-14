import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useHistory } from "react-router-dom";

export const LocationList = () => {
  const history = useHistory();
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations");
    getLocations();
  }, []);

  return (
    <>
      <h2>Locations</h2>
      <button onClick={() => history.push("/locations/create")}>
        New Location
      </button>
      <section className="locations">
        {locations.map((location) => {
          return (
            <div className="location" id={`location--${location.id}`}>
              <div className="location__name"> {location.name}</div>
              <div className="location__breed"> {location.address}</div>
            </div>
          );
        })}
      </section>
    </>
  );
};
