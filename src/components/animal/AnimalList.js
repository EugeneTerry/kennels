import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useHistory } from "react-router-dom";
import { Animal } from "./Animal";
import { Link } from "react-router-dom";

export const AnimalList = () => {
  const history = useHistory();

  const { animals, getAnimals } = useContext(AnimalContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals();
  }, []);

  return (
    <>
      <h2>Animals</h2>
      <button onClick={() => history.push("/animals/create")}>
        Add Animal
      </button>
        <div className="animals">
          {animals.map((animal) => (
            <Link className="animal" to={`/detail/${animal.id}`}>{animal.name}</Link>
          ))}
        </div>
    </>
  );
};
