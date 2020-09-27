import React from "react";

import "./threatsEndedList.css";
import Table from "react-bootstrap/Table";

const ThreatsEndedList = (props) => {
  if (props.items.lenght === 0) {
    return (
      <div className="center">
        <h2> The heroes don't fight against enemies! </h2>
      </div>
    );
  }

  return (
    <div className="threats">
      <div className="threats-header">
        <h2>Attacked Threats</h2>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Monster Name</th>
            <th>Danger Level</th>
            <th>Hero Name</th>
            <th>Hero Hank</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.monsterName}</td>
              <td>{item.dangerLevel}</td>
              <td>{item.heroName}</td>
              <td>{item.heroRank}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ThreatsEndedList;
