import AddRace from "../components/Races/CreateRace";
import DeleteRace from "../components/Races/DeleteRace";
import GetRaceByName from "../components/Races/GetRaceByName";
import { EntityProvider } from "../contexts/EntityProvider";
import { RaceService } from "../services/CreateService";

const CRUDRacePage = () => {
    return(
        <EntityProvider service={RaceService}>
        <div>
            <section>
                <AddRace/>
            </section>
            <section>
                <DeleteRace/>
            </section>
             <section>
                <GetRaceByName/>
            </section>
        </div>
        </EntityProvider>
    )
}

export default CRUDRacePage;