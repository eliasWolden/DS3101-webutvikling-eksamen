import { FC, useState, ChangeEvent, useContext } from 'react';
import { IRace } from '../../interfaces/Races/IRace';
import { RaceContext } from '../../contexts/RaceContext';

const AddRace: FC = () => {
//fornavn og etternavn blir til navnet til sjaføren med mellomrom
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = `${firstName} ${lastName}`;
  const subfolder = "Races";



  const [winnerTime, setWinnerTime] = useState('');
  const [grandPrix, setGrandPrix] = useState('');
  const [numberOfLaps, setNumberOfLaps] = useState<number>(Number);
  const [image, setImage] = useState<File | null>(null);

  const context = useContext(RaceContext);

    const setHandler = (e: ChangeEvent<any>) => {
      const { name, value, files } = e.target;

      switch (name) {
        case 'Firstname':
          setFirstName(value);
          break;
        case 'Lastname':
          setLastName(value);
          break;
        case 'winnerTime':
          setWinnerTime(value);
          break;
        case 'grandPrix':
          setGrandPrix(value);
          break;
        case 'teamid':
          setNumberOfLaps(parseInt(value));
          break;
        case 'image':
          if (files != null) {
            const file = files[0];
            setImage(file);
          }
          break;
      }
    };

    const saveDriver = () => {
      const newDriver: IRace = {
        winnerName: fullName,
        winnerTime: winnerTime,
        grandPrix: grandPrix,
        image: image!.name,
        numberOfLaps: numberOfLaps,
      }
      handleAdd(newDriver, image!, subfolder);
      console.log(newDriver);
    };

    const handleAdd = async (newRace: IRace, image : File, subfolder : string) => {
      try {
        if(context) {
          await context.postRace(newRace);
          await context.postImage(image, subfolder);
        }

      } catch (error) {
        console.log('Error adding driver', error);
      }
    }


  return (
    <form className="bg-light p-4 m-4 border rounded shadow-lg">
      <h2>Create race</h2>

      <div className='row'>
        <h3>Name of Winner</h3>
        <div className='form-group col-md-4'>
          <label>Firstname</label>
          <input
            name='Firstname'
            type="text"
            className='form-control'
            placeholder='Firstname'
            onChange={setHandler}
          />
        </div>

        <div className='form-group col-md-4'>
          <label>LastName</label>
          <input
            name='Lastname'
            type="text"
            className='form-control'
            placeholder='Lastname'
            onChange={setHandler}
          />
        </div>
      </div>

      <div className='form-group col-md-2'>
        <label>Race time</label>
        <input
          name='winnerTime'
          type="text"
          className='form-control'
          placeholder='Race time'
          onChange={setHandler}
        />
      </div>

      <div className='form-group col-md-2'>
        <label>Name of Grand Prix</label>
        <input
          name='grandPrix'
          type="text"
          className='form-control'
          placeholder='Grand Prix'
          onChange={setHandler}
        />
      </div>

      <div className='row'>
        <div className='form-group col-md-2'>
          <label>Number of laps</label>
          <input
            name='numberOfLaps'
            className='form-control'
            placeholder='Number of laps'
            onChange={setHandler}
          />
        </div>
      </div>

      <div className='row'>
        <div className='form-group col-md-4 mb-2'>
          <label>Upload image</label>
          <div className="custom-file">
            <input
              name='image'
              type="file"
              className='custom-file-input'
              onChange={setHandler}
            />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='form-group col-md-4'>
          <input type="button" className='btn btn-primary' value="Create race" onClick={saveDriver}/>
        </div>
      </div>
    </form>
  );
};

export default AddRace;
