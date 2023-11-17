import DeleteRace from "../components/CRUD/Races/DeleteRace";
import GetRaceByName from "../components/CRUD/Races/GetRaceByName";

const CreateRacePage = () => {
    return(
        <div>
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