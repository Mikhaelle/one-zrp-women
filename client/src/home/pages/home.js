import React, { useEffect, useState } from "react";

import HeroesList from "../components/heroesList";
import ThreatsList from "../components/threatsList";
import ThreatsEndedList from "../components/threatsEndedList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Home = () => {
  const [isLoadingHeroes, setIsLoadingHeroes] = useState(false);
  const [error, setError] = useState();
  const [loadHeroes, setLoadHeroes] = useState();

  const [isLoadingThreats, setIsLoadingThreats] = useState(false);
  const [loadThreats, setLoadThreats] = useState();

  const [isLoadingThreatsEnd, setIsLoadingThreatsEnd] = useState(false);
  const [loadThreatsEnd, setLoadThreatsEnd] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoadingHeroes(true);
      try {
        const response = await fetch("http://localhost:5000/api/heroes");
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadHeroes(responseData.heroes);
      } catch (err) {
        setError(err.message);
      }
      setIsLoadingHeroes(false);
    };
    sendRequest();
  }, []);

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoadingThreats(true);
      try {
        const response = await fetch("http://localhost:5000/api/threats");
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadThreats(responseData.threats);
      } catch (err) {
        setError(err.message);
      }
      setIsLoadingThreats(false);
    };
    sendRequest();
  }, []);

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoadingThreatsEnd(true);
      try {
        const response = await fetch("http://localhost:5000/api/threatsEnd");
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadThreatsEnd(responseData.threats);
      } catch (err) {
        setError(err.message);
      }
      setIsLoadingThreatsEnd(false);
    };
    sendRequest();
  }, []);


  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {isLoadingHeroes && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoadingHeroes && loadHeroes && <HeroesList items={loadHeroes} />}

      {isLoadingThreats && isLoadingHeroes && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoadingThreats && !isLoadingHeroes && loadThreats && loadHeroes && (
        <ThreatsList threats={loadThreats} heroes={loadHeroes} />
      )}

      {isLoadingThreats && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoadingThreatsEnd && loadThreatsEnd && (
        <ThreatsEndedList items={loadThreatsEnd} />
      )}
    </React.Fragment>
  );
};

export default Home;
