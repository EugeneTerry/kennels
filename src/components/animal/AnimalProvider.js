import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const AnimalContext = createContext();

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([]);
  const [ searchTerms, setSearchTerms ] = useState("")
  

  const getAnimals = () => {
    return fetch(
      "https://nss-kennels-api.herokuapp.com/animals?_expand=location&_expand=customer&_sort=location.id"
    )
      .then((res) => res.json())
      .then(setAnimals);
  };

  const getAnimalById = (animalId) => {
    return fetch(
      `https://nss-kennels-api.herokuapp.com/animals/${animalId}`)
      .then((res) => res.json())
  };


  const addAnimal = (animal) => {
    return fetch("https://nss-kennels-api.herokuapp.com/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    })
      .then((response) => response.json())
      .then(getAnimals());
  };

  // this call adds edits to your api
  const updateAnimal = animal => {
    return fetch(`https://nss-kennels-api.herokuapp.com/animals/${animal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animal)
    })
      .then(getAnimals)
  }
  

  const releaseAnimal = animalId => {
    return fetch(`https://nss-kennels-api.herokuapp.com/animals/${animalId}`, {
        method: "DELETE"
    })
        .then(getAnimals)
}


  /*
      You return a context provider which has the
      `animals` state, `getAnimals` function,
      and the `addAnimal` function as keys. This
      allows any child elements to access them.
  */
  return (
    <AnimalContext.Provider
      value={{
        animals,
        getAnimals,
        addAnimal,
        releaseAnimal,
        updateAnimal,
        getAnimalById,
        searchTerms,
        setSearchTerms
      }}
    >
      {props.children}
    </AnimalContext.Provider>
  );
};
