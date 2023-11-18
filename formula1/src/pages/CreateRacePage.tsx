import AddRace from "../components/CRUD/Races/CreateRace";
import DeleteRace from "../components/CRUD/Races/DeleteRace";
import GetRaceByName from "../components/CRUD/Races/GetRaceByName";

const CreateRacePage = () => {
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

export default CreateRacePage;