import { useState, ChangeEvent, useContext } from 'react';
import { IRace } from '../../interfaces/Races/IRace';
import '../../css/main.css';
import { IEntityContext } from '../../interfaces/IEntityContext';
import { EntityContext } from '../../contexts/EntityContext';

const EditRace = () => {
  const [GrandPrix, setGrandPrix] = useState<string>("");
  const [Status, setStatus] = useState("");
  const context = useContext(EntityContext) as IEntityContext<IRace>;

    const [RacesToUpdate, setRacesToUpdate] = useState<IRace>({ grandPrix: "",  winnerName: "", winnerTime: "", numberOfLaps: 0, image: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      switch (e.currentTarget.name) {
        case "grandPrix":
          setGrandPrix(e.currentTarget.value);
          break;
        case "winnerName":
          setRacesToUpdate({ ...RacesToUpdate, winnerName: e.currentTarget.value });
          break;
        case "winnerTime":
          setRacesToUpdate({ ...RacesToUpdate, winnerTime: e.currentTarget.value });
          break;
        case "numberOfLaps":
            setRacesToUpdate({ ...RacesToUpdate, numberOfLaps: parseInt(e.currentTarget.value) });
            break;
      }
    };

    const getByGrandPrixFromContext = async () => {
      try {
          if (context) {
            if (GrandPrix !== "") {
            const RacesFromContext = await context?.getByName(GrandPrix);
            setRacesToUpdate(RacesFromContext);
            console.log(RacesFromContext);
            } 
            else {
              setStatus("Please enter a name");
            }
          }
          } catch (error) {
          setStatus("Grand Prix not found");
          }
        };
      
    const saveChanges = () => {
        if(context){
        context.editItem(RacesToUpdate);
        console.log(RacesToUpdate);
        } else{
            setStatus("Error saving changes");
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
          value={RacesToUpdate?.winnerTime}

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
          <span>{Status}</span>
        </div>
      </div>

      </div>
      <div className='col'>
        <img className='image-size-medium'
           src={`http://localhost:5257/api/Image/Race/${RacesToUpdate?.image}`}
           alt='Not found'
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "public/images/uknown.png";
          }}
          />
      </div>
    </div>
    </form>
  );
};


export default EditRace;