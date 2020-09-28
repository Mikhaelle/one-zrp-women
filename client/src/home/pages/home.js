import React, { useEffect, useState } from "react";

import HeroesList from "../components/heroesList";
import ThreatsList from "../components/threatsList";
import ThreatsEndedList from "../components/threatsEndedList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../hooks/http-hook";

const Home = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadHeroes, setLoadHeroes] = useState();

  const [loadThreats, setLoadThreats] = useState();

  const [loadThreatsEnd, setLoadThreatsEnd] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/heroes"
        );

        setLoadHeroes(responseData.heroes);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/threats"
        );

        setLoadThreats(responseData.threats);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/threatsEnd"
        );

        setLoadThreatsEnd(responseData.threats);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);
  

  /*useEffect(() => {
    if (!isLoadingThreats) {
      if (loadThreats != null) {
        loadThreats.map((monster) => {
          if (monster.monsterName === "God") {
            const sendRequest1 = async () => {
              const heroResponse = await fetch(
                "http://localhost:5000/api/heroes/rank/s"
              );
              const heroResponseData = await heroResponse.json();

              if (!heroResponse.ok) {
                throw new Error(heroResponseData.message);
              } else {
                if (heroResponseData.heroes != null) {
                  const sendRequest2 = async () => {
                    const response = await fetch(
                      "http://localhost:5000/api/heroes/threatsEnd",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          monsterName: monster.monsterName,
                          dangerLevel: monster.dangerLevel,
                          name: heroResponseData.heroes.name,
                          rank: heroResponseData.heroes.rank,
                        }),
                      }
                    );
                    const responseData = await response.json();
                    console.log(responseData);
                    sendRequest2();
                  };
                }
              }
            };
            sendRequest1();
          }
        });
      }
    }

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
  }, []);*/


  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadHeroes && <HeroesList items={loadHeroes} />}

      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading  && loadThreats && loadHeroes && (
        <ThreatsList threats={loadThreats} heroes={loadHeroes} />
      )}

      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadThreatsEnd && (
        <ThreatsEndedList items={loadThreatsEnd} />
      )}
    </React.Fragment>
  );
};

export default Home;
