import React from "react";

import "./heroesList.css";
import HeroItem from "./heroItem.js";


const HeroesList = props => {
  
  if (props.items.lenght === 0) {
    return (
      <div className="center">
        <h2> No Heroes Avaiable </h2>
      </div>
    );
  }

  return (
    <div className = "heroes">
    <div className= "heroes-header">
        <h2>ZRP Heroes </h2>
    </div>
    <ul className = "heroes-list">
      {props.items.map(hero => (
        
        <HeroItem
          key={hero.id}
          id={hero.id}
          img = {hero.img}
          name={hero.name}
          rank={hero.rank}
        />
      ))}
    </ul>
    </div>
  );
};

export default HeroesList;
