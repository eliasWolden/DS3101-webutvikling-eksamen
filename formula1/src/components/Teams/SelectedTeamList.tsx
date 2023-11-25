import { useContext } from "react";
import { ITeam } from "../../interfaces/Teams/ITeam";
import { EntityContext } from "../../contexts/EntityContext";
import { IEntityContext } from "../../interfaces/IEntityContext";
import { IService } from "../../interfaces/IService";
import { SelectedDriverListProps } from "../../interfaces/ISelectedDriverListProps";
import SelectedTeamItem from "./SelectedTeamItem";

const SelectedTeamList: React.FC<SelectedDriverListProps> = ({ name }) => {
    const context = useContext(EntityContext) as IEntityContext<IService<ITeam>>;
    const TeamsFromContext = (context.items as unknown) as ITeam[];

    const Teams = TeamsFromContext.filter((Team) => Team.driver1.toLowerCase() === name || Team.driver2.toLowerCase() === name);
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

    return (
        <div className="row">
            {getTeamsJSX()}
        </div>
    );
};

export default SelectedTeamList;
