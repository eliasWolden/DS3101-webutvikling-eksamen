import { useContext } from "react";
import { ITeam } from "../../interfaces/Teams/ITeam";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { IService } from "../../interfaces/IService";
import { SelectedDriverListProps } from "../../interfaces/ISelectedDriverListProps";
import SelectedTeamItem from "./SelectedTeamItem";
import { GeneralContext } from "../../contexts/GeneralProvider";

const SelectedTeamList: React.FC<SelectedDriverListProps> = ({ name }) => {
  const context = useContext(GeneralContext) as IGeneralContext<
    IService<ITeam>
  >;
  const TeamsFromContext = context.items as unknown as ITeam[];

  const Teams = TeamsFromContext.filter(
    (Team) =>
      Team.driver1.toLowerCase() === name || Team.driver2.toLowerCase() === name
  );
  const getTeamsJSX = () =>
    Teams.map((team: ITeam) => (
      <div key={team.id}>
        <SelectedTeamItem
          id={team.id}
          manufacturer={team.manufacturer}
          driver1={team.driver1}
          driver2={team.driver2}
          image={`http://localhost:5257/api/Image/car/${team.image}`}
        />
      </div>
    ));

  return <div className="row">{getTeamsJSX()}</div>;
};

export default SelectedTeamList;
