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
      allocated: false,
    },
    {
      id: "h2",
      name: "Genos",
      rank: "S",
      img:
        "https://vignette.wikia.nocookie.net/onepunchman/images/8/84/Genos_Anime_portrait.png/revision/latest?cb=20190928203642",
      allocated: false,
    },
    {
      id: "h2",
      name: "Amai Mask",
      rank: "A",
      img:
        "https://vignette.wikia.nocookie.net/onepunchman/images/f/fc/SweetMaskProfile.png/revision/latest?cb=20191130211509",
      allocated: false,
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
