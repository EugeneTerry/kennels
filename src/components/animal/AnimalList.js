import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useHistory } from "react-router-dom";
import {Animal} from "./Animal"
import { Link } from "react-router-dom";



export const AnimalList = ({history}) => {

  const { animals, getAnimals } = useContext(AnimalContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals();
  }, []);

  return (
    <>
      <h2>Animals</h2>
      <button onClick={
        () => history.push("/animals/create")
      }>
            Add Animal
      </button>

      <div className="animals">
          {
              animals.map(animal => <Link to={`/animals/detail/${animal.id}`}>
                    { animal.name }
                  </Link>
              )
          }
      </div>
{/* 
    <section className="animals">
      {animals.map((animal) => {
        return (
          <div className="animal" id={`animal--${animal.id}`}>
            <div className="animal__name">Name: {animal.name}</div>
            <div className="animal__breed">Breed: {animal.breed}</div>
            <div className="animal__location">
              Location: {animal.location.name}
            </div>
            <div className="animal__location">
              Customer: {animal.customer.name}
            </div>
          </div>
        );
      })}
    </section> */}
    </>
  );
};
