import React from "react";

import HeroesList from "../components/heroesList";
import ThreatsList from "../components/threatsList";
import ThreatsEndedList from "../components/threatsEndedList";
const Home = () => {
  const HEROES = [
    {
      id: "h1",
      name: "Saitama",
      rank: "B",
      img: "https://miro.medium.com/max/5760/1*2bjwCLaA8TfH40OXcyLNvA.png",
    },
    {
      id: "h2",
      name: "Saitama",
      rank: "B",
      img: "https://miro.medium.com/max/5760/1*2bjwCLaA8TfH40OXcyLNvA.png",
    },
  ];

  const THREATS = [
    {
      id: "t1",
      monsterName: "Black Dragon",
      dangerLevel: "Dragon",

      lat: -5.836597,
      lng: -35.236007,
    },
    {
      id: "t2",
      monsterName: "Black Dragon",
      dangerLevel: "Dragon",
      lat: -5.836597,
      lng: -35.236007,
    },
  ];

  const THREATSENDED = [
    {
      id: "td1",
      monsterName: "Black Dragon",
      dangerLevel: "Dragon",
      heroName: "Saitama",
      heroRank: "S",
    },
  ];
  return (
    <div>
      <HeroesList items={HEROES} />
      <ThreatsList items={THREATS} />
      <ThreatsEndedList items={THREATSENDED} />
    </div>
  );
};

export default Home;
