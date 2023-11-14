import { useContext } from "react";
import TeamItem from "./TeamItem";
import { TeamContext } from "../../contexts/TeamContext";
import { ITeam } from "../../interfaces/Teams/ITeam";
import { ITeamContext } from "../../interfaces/Teams/ITeamContext";


const TeamList = () => {
  const { teams } = useContext(TeamContext) as ITeamContext;

  const getTeamsJSX = () => {
  
    return teams.map((team: ITeam) => (
      <TeamItem
        key={`team-item-${team.id}`}
        id={team.id}
        manufacturer={team.manufacturer}
        driver1={team.driver1}
        driver2={team.driver2}
        image={`http://localhost:5257/api/Image/car/${team.image}`}
      />
    ));
  };
  
  
  

  return <section className="row g-3">{getTeamsJSX()}</section>;
};

export default TeamList;
