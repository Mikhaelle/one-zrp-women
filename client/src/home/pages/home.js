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

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadHeroes && <HeroesList items={loadHeroes} />}

      {!isLoading && loadThreats && loadHeroes && (
        <ThreatsList threats={loadThreats} />
      )}

      {!isLoading && loadThreatsEnd && (
        <ThreatsEndedList items={loadThreatsEnd} />
      )}
    </React.Fragment>
  );
};

export default Home;
