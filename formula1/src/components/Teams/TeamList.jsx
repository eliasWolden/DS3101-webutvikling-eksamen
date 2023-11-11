import React, { useContext, useEffect } from "react";
import TeamItem from "./TeamItem";
import { TeamContext } from "../../contexts/TeamContext";

const TeamList = ({ selectedDriver }) => {
  const { teams, getTeamsFromService } = useContext(TeamContext);

  useEffect(() => {
    getTeamsFromService();
  }, []);

  const getTeamsJSX = () => {
    if (selectedDriver) {
      const selectedTeam = teams.find((team) => team.id === selectedDriver.teamId);
      return selectedTeam ? (
        <TeamItem
          key={`team-item-${selectedTeam.id}`}
          id={`http://localhost:5257/api/Image/emblem/${selectedTeam.id}.png`}
          manufacturer={selectedTeam.manufacturer}
          driver1={selectedTeam.driver1}
          driver2={selectedTeam.driver2}
          image={`http://localhost:5257/api/Image/car/${selectedTeam.image}`}
          isSelected={true} // hvis true så får den en annen css klasse
        />
      ) : null;
    }

    return teams.map((team) => (
      <TeamItem
        key={`team-item-${team.id}`}
        id={`http://localhost:5257/api/Image/emblem/${team.id}.png`}
        manufacturer={team.manufacturer}
        driver1={team.driver1}
        driver2={team.driver2}
        image={`http://localhost:5257/api/Image/car/${team.image}`}
        isSelected={false}
      />
    ));
  };

  return <section className="row g-3">{getTeamsJSX()}</section>;
};

export default TeamList;
