import { FC, useState, ChangeEvent, useContext } from 'react';
import { ITeam } from '../../interfaces/Teams/ITeam';
import { IEntityContext } from '../../interfaces/IEntityContext';
import { EntityContext } from '../../contexts/EntityProvider';

const AddTeam: FC = () => {
//fornavn og etternavn blir til navnet til sjaføren med mellomrom
  const [driver1FirstName, setDriver1FirstName] = useState('');
  const [driver1LastName, setDriver1LastName] = useState('');
  const driver1FullName = `${driver1FirstName} ${driver1LastName}`;
  
  const [driver2FirstName, setDriver2FirstName] = useState('');
  const [driver2LastName, setDriver2LastName] = useState('');
  const driver2FullName = `${driver2FirstName} ${driver2LastName}`;


  const [manufacturer, setManufacturer] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [Status, setStatus] = useState("");



  const context = useContext(EntityContext) as IEntityContext<ITeam>;

    const setHandler = (e: ChangeEvent<any>) => {
      const { name, value, files } = e.target;
      console.log(name, value, files);

      switch (name) {
        case 'driver1FirstName':
          setDriver1FirstName(value);
          break;
        case 'driver1LastName':
          setDriver1LastName(value);
          break;
        case 'driver2FirstName':
          setDriver2FirstName(value);
          break;
        case 'driver2LastName':
          setDriver2LastName(value);
          break;
        case 'manufacturer':
          setManufacturer(value);
          break;
        case 'selectedCar':
          setSelectedCar(value);
          break;
      }
    };

    const saveTeam = () => {
      if(driver1FirstName != "" && driver1LastName != ""){

      const newTeam: ITeam = {
        manufacturer: manufacturer,
        image: selectedCar,
        driver1: driver1FullName,
        driver2: driver2FullName,
      }
      handleAdd(newTeam);
      setStatus("You added a team!")
      console.log(newTeam);
    } else {
        setStatus("Please enter a name");
    };
  }

    const handleAdd = async (newTeam: ITeam) => {
      try {
        if(context) 
          await context.postItem(newTeam);
        }
       catch (error) {
        console.log('Error adding Team', error);
        setStatus("Something went wrong with adding...")
      }
    }
    
    
  return (
    <form className="bg-light p-4 m-4 border rounded shadow-lg">
      <h2>Create Team</h2>

      <div className='row'>
        <div className='form-group col-md-4'>
          <label>Driver 1 firstname</label>
          <input
            name='driver1FirstName'
            type="text"
            className='form-control'
            placeholder='Firstname'
            onChange={setHandler}
          />
        </div>

        <div className='form-group col-md-4'>
          <label>Driver 1 lastname</label>
          <input
            name='driver1LastName'
            type="text"
            className='form-control'
            placeholder='Lastname'
            onChange={setHandler}
          />
        </div>
      </div>

      <div className='row'>
        <div className='form-group col-md-4'>
          <label>Driver 2 firstname</label>
          <input
            name='driver2FirstName'
            type="text"
            className='form-control'
            placeholder='Firstname'
            onChange={setHandler}
          />
        </div>

        <div className='form-group col-md-4'>
          <label>driver 2 lastname</label>
          <input
            name='driver2LastName'
            type="text"
            className='form-control'
            placeholder='Lastname'
            onChange={setHandler}
          />
        </div>
      </div>


      <div className='form-group col-md-2'>
        <label>Manufacturer</label>
        <input
          name='manufacturer'
          type="text"
          className='form-control'
          placeholder='Manufacturer'
          onChange={setHandler}
        />
      </div>

      <div className='row'>
        <div className='form-group col-md-2'>
          <label>select your car</label>
          <select
            name='selectedCar'
            className='form-control'
            onChange={setHandler}
          >
            <option value="car-red-bull.png">Red bull</option>
            <option value="car-mercedes.png">Mercedes</option>
            <option value="car-ferrari.png">Ferrari</option>
            <option value="car-mclaren.png">McLaren</option>
            <option value="car-aston-martin.png">Aston Martin</option>
            <option value="car-alpine.png">Alpine</option>
            <option value="car-williams.png">Williams</option>
            <option value="car-alphatauri.png">AlphaTauri</option>
            <option value="car-alfa-romeo.png">Alfa Romeo</option>
            <option value="car-haas-f1-team.png">Haas F1</option>
          </select>
        </div>
      </div>

      <div className='row'>
        <div className='form-group col-md-4'>
          <input type="button" className='btn btn-primary' value="Create Team" onClick={saveTeam}/>
          <span>{Status}</span>
        </div>
      </div>
    </form>
  );
};

export default AddTeam;
