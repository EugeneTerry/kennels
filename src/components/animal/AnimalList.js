import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { AnimalDetail } from "./AnimalDetails";

export const AnimalList = () => {
  const history = useHistory();

  const { animals, getAnimals, searchTerms } = useContext(AnimalContext);

  const [ filteredAnimals, setFiltered ] = useState([])

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    debugger
    getAnimals();
  }, []);

  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
    getAnimals()
}, [])

// useEffect dependency array with dependencies - will run if dependency changes (state)
// searchTerms will cause a change
useEffect(() => {
  if (searchTerms !== "") {
    // If the search field is not blank, display matching animals
    const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
    setFiltered(subset)
  } else {
    // If the search field is blank, display all animals
    setFiltered(animals)
  }
}, [searchTerms, animals])

  return (
    <>
      <h2>Animals</h2>
      <button onClick={() => history.push("/animals/create")}>
        Add Animal
      </button>
      <div className="animals">
        {
          filteredAnimals.map(animal => {
            return <AnimalDetail key={animal.id} animal={animal} />
          })
        }
      </div>
    </>
  );
};