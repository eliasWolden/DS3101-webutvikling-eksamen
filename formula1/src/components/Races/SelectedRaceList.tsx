import { useContext } from "react";
import { IRace } from "../../interfaces/Races/IRace";
import { EntityContext } from "../../contexts/EntityContext";
import { IEntityContext } from "../../interfaces/IEntityContext";
import { IService } from "../../interfaces/IService";
import { SelectedDriverListProps } from "../../interfaces/ISelectedDriverListProps";
import SelectedRaceItem from "./SelectedRaceItem";

const SelectedRaceList: React.FC<SelectedDriverListProps> = ({ name }) => {
    const context = useContext(EntityContext) as IEntityContext<IService<IRace>>;
    const racesFromContext = (context.items as unknown) as IRace[];

    const races = racesFromContext.filter((race) => race.winnerName.toLowerCase() === name);

    const getRacesJSX = () =>
        races.map((race: IRace) => (
            <div key={race.id} className="col-md-6">
                <SelectedRaceItem
                    id={race.id}
                    winnerName={race.winnerName}
                    winnerTime={race.winnerTime}
                    grandPrix={race.grandPrix}
                    numberOfLaps={race.numberOfLaps}
                    image={`http://localhost:5257/api/Image/race/${race.image}`}
                />
            </div>
        ));

    return (
        <div className="row selected-race-container">
            {getRacesJSX()}
        </div>
    );
};

export default SelectedRaceList;
