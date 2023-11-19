import { useState, ChangeEvent, useContext } from 'react';
import { RaceContext } from '../../../contexts/RaceContext';
import { IRace } from '../../../interfaces/Races/IRace';
import '../../../css/main.css';

const EditRace = () => {
    const [GrandPrix, setGrandPrix] = useState<string>("");



  const context = useContext(RaceContext);

    const [RacesToUpdate, setRacesToUpdate] = useState<IRace>({ grandPrix: "",  winnerName: "", winnerTime: 0, numberOfLaps: 0, image: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      switch (e.currentTarget.name) {
        case "grandPrix":
          setGrandPrix(e.currentTarget.value);
          break;
        case "winnerName":
          setRacesToUpdate({ ...RacesToUpdate, winnerName: e.currentTarget.value });
          break;
        case "winnerTime":
          setRacesToUpdate({ ...RacesToUpdate, winnerTime: parseInt(e.currentTarget.value) });
          break;
        case "numberOfLaps":
            setRacesToUpdate({ ...RacesToUpdate, numberOfLaps: parseInt(e.currentTarget.value) });
            break;
      }
    };

    const getByGrandPrixFromContext = async () => {
        const RacesFromContext = await context?.getByName(GrandPrix);
        setRacesToUpdate(RacesFromContext.racesByName);
        console.log(RacesFromContext.racesByName);

    };

    const saveChanges = () => {
        if(context){
        context.editRaces(RacesToUpdate);
        console.log(RacesToUpdate);
        }
    };
  
  


  return (
    <form className="bg-light p-4 m-4 border rounded shadow-lg">
      <h2>Edit Race</h2>
      <div className='row'>
        <div className='col'>

        <div className='form-group col-md-6'>
          <label>GrandPrix</label>
          <input
            name='grandPrix'
            type="text"
            className='form-control'
            placeholder='GrandPrix'
            onChange={handleChange}
          />
        </div>

        <div className='form-group col-md-6'>
          <label>Name</label>
          <input
            name='winnerName'
            type="text"
            className='form-control'
            placeholder='winnerName'
            value={RacesToUpdate?.winnerName}
            onChange={handleChange}
          />
        </div>

      <div className='form-group col-md-6'>
        <label>Winner time</label>
        <input
          name='winnerTime'
          type="text"
          className='form-control'
          placeholder='Winner time'
          value={isNaN(RacesToUpdate?.winnerTime) ? '' : Number(RacesToUpdate?.winnerTime)}

          onChange={handleChange}
        />
      </div>

      <div className='form-group col-md-6'>
        <label>Number of laps</label>
        <input
          name='numberOfLaps'
          type="text"
          className='form-control'
          placeholder='Number of laps'
          value={isNaN(RacesToUpdate?.numberOfLaps) ? '' : Number(RacesToUpdate?.numberOfLaps)}
          onChange={handleChange}
        />
      </div>

      <div className='row'>
        <div className='form-group col-md-4'>
          <input type="button" className='btn btn-primary' value="get Race" onClick={getByGrandPrixFromContext}/>
        </div>
      </div>
      <div className='row'>
        <div className='form-group col-md-4'>
          <input type="button" className='btn btn-warning' value="save Race" onClick={saveChanges}/>
        </div>
      </div>

      </div>
      <div className='col'>
        <img className='image-size-medium'
           src={`http://localhost:5257/api/Image/Race/${RacesToUpdate?.image}`}
           alt='Not found'
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "public/images/uknown.png"; // Adjust the path based on your project structure
          }}
          />
      </div>
    </div>
    </form>
  );
};


export default EditRace;