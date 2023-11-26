import { useState, ChangeEvent, useContext } from "react";
import { IRace } from "../../interfaces/Races/IRace";
import "../../css/main.css";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { GeneralContext } from "../../contexts/GeneralProvider";
import "../../css/CRUD.css";

const EditRace = () => {
  const context = useContext(GeneralContext) as IGeneralContext<IRace>;
  const [GrandPrix, setGrandPrix] = useState<string>("");
  const [Status, setStatus] = useState("");
  const [driverObtained, setDriverObtained] = useState(false);

    const [RacesToUpdate, setRacesToUpdate] = useState<IRace>({ 
      grandPrix: "",
      winnerName: "",
      winnerTime: "",
      numberOfLaps: 0,
      image: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      switch (e.currentTarget.name) {
        case "grandPrix":
          setGrandPrix(e.currentTarget.value.toLowerCase());
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
            setDriverObtained(true);
            } 
            else {
              setStatus("Please enter a GrandPrix");
              setDriverObtained(false);
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
        setStatus("You´ve edited a race");
        setDriverObtained(false);
        } else{
            setStatus("Error saving changes");
        }
      }
    } catch (error) {
      setStatus("Grand Prix not found");
    }
  };

  const saveChanges = () => {
    if (context) {
      context.editItem(RacesToUpdate);
      console.log(RacesToUpdate);
      setStatus("You´ve edited a race");
      setDriverObtained(false);
    } else {
      setStatus("Error saving changes");
    }
  };

  return (
    <section className="d-flex justify-content-center">
      <form className="bg-light p-4 border shadow w-75 rounded mb-3">
        <h2>Edit Race</h2>
        <div className="row">
          <div className="col">
            <div className="form-group form-group col-md-8">
              <label>GrandPrix</label>
              <input
                name="grandPrix"
                type="text"
                className="form-control"
                placeholder="GrandPrix"
                onChange={handleChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label>Name</label>
              <input
                name="winnerName"
                type="text"
                className="form-control"
                placeholder="winnerName"
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

      {!driverObtained && (
  <div className='row'>
    <div className='form-group col-md-4'>
      <span className='text-danger'>{Status}</span>
    </div>
  </div>
)}

      {driverObtained && (
      <div className='row'>
        <div className='form-group col-md-4'>
          <input type="button" className='btn btn-warning' value="save Race" onClick={saveChanges}/>
        </div>
      </div>
      )}

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
    </form>
 </section>
  );
};

export default EditRace;
