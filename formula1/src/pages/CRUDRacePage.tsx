import AddRace from "../components/Races/CreateRace";
import DeleteRace from "../components/Races/DeleteRace";
import GetRaceByName from "../components/Races/GetRaceByName";

const CRUDRacePage = () => {
    return(
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
    )
}

export default CRUDRacePage;