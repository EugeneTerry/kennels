import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../Location/LocationProvider";
import { AnimalContext } from "./AnimalProvider";
import { CustomerContext } from "../Customers/CustomerProvider";
import "./Animal.css";
import { useHistory, useParams } from "react-router-dom";

export const AnimalForm = () => {
  const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    customerId: 0,
    locationId: 0,
  });

  const[isLoading, setIsLoading] = useState(true);
  const {animalId} = useParams()
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newAnimal = { ...animal };
    newAnimal[event.target.id] = event.target.value;
    setAnimal(newAnimal);
  };
  

  
  
  const handleClickSaveAnimal = () => {
    if (parseInt(animal.locationId) === 0) {
      window.alert("Please select a location")
    } else {
      setIsLoading(true);
      if (animalId){
        updateAnimal({
          id: animal.id,
          name: animal.name,
          breed: animal.breed,
          locationId: parseInt(animal.locationId),
          customerId: parseInt(animal.customerId)
        })
        .then(() => history.push(`/animals/detail/${animal.id}`))
      } else {
        addAnimal({
          name: animal.name,
          breed: animal.breed,
          locationId: parseInt(animal.locationId),
          customerId: parseInt(animal.customerId)
        })
          .then(()=> history.push("/animals"))
        }
      };
    }

    useEffect(() => {
      getCustomers().then(getLocations).then(() => {
        if (animalId){
          getAnimalById(animalId)
          .then(animal => {
              setAnimal(animal)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal name:</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="Animal name"
            value={animal.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal breed:</label>
          <input
            type="text"
            id="breed"
            required
            autoFocus
            className="form-control"
            placeholder="Animal breed"
            value={animal.breed}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            name="locationId"
            id="locationId"
            className="form-control"
            value={animal.locationId}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a location</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Customer: </label>
          <select
            name="customer"
            id="customerId"
            className="form-control"
            value={animal.customerId}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a customer</option>
            {customers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary"
        disabled={isLoading}
        onClick={event =>{
          event.preventDefault()
          handleClickSaveAnimal()
        }}>
        {animalId ? <>Save Animal</> : <>Add Animal</>}
      </button>
      </form>
    )
}