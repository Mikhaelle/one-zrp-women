import React from "react";

import "./threatsList.css";
import Table from "react-bootstrap/Table";

const ThreatsList = (props) => {
  if (props.items.lenght === 0) {
    return (
      <div className="center">
        <h2> The word is safe. Is no threats </h2>
      </div>
    );
  }

  return (
    <div className="threats">
      <div className="threats-header">
        <h2>Threats</h2>
      </div>

      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Monster Name</th>
            <th>Danger Level</th>
            <th>Lat Location</th>
            <th>Lng Location</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((monster, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{monster.monsterName}</td>
              <td>{monster.dangerLevel}</td>
              <td>{monster.lat}</td>
              <td>{monster.lng}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ThreatsList;
