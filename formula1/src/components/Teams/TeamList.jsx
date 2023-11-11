import React, { useContext, useEffect } from "react";
import TeamItem from "./TeamItem";
import { TeamContext } from "../../contexts/TeamContext";

const TeamList = () => {
  const { teams, getTeamsFromService } = useContext(TeamContext);

  useEffect(() => {
    getTeamsFromService();
  }, []);
  
  const getTeamsJSX = () => {
    if (teams.length === 0) {
      return <p>No teams available.</p>;
    }

    return teams.map((team) => (
      <TeamItem
        key={`team-item-${team.id}`}
        id={`http://localhost:5257/api/Image/emblem/${team.id}.png`}
        manufacturer={team.manufacturer}
        driver1={team.driver1}
        driver2={team.driver2}
        image={`http://localhost:5257/api/Image/car/${team.image}`}
      />
    ));
  };

  return (
    <section>
      {getTeamsJSX()}
    </section>
  );
};

export default TeamList;
