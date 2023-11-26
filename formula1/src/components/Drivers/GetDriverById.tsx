import { useState, ChangeEvent, useContext } from 'react';
import { IDriver } from '../../interfaces/Drivers/IDriver';
import '../../css/main.css';
import { IGeneralContext } from '../../interfaces/IGeneralContext';
import { GeneralContext } from '../../contexts/GeneralProvider';

const EditDriver = () => {
    const [id, setId] = useState<number>(0);

    const context = useContext(GeneralContext) as IGeneralContext<IDriver>;
    const [Status, setStatus] = useState("");


    const [driversToUpdate, setDriversToUpdate] = useState<IDriver>({ name: "", age: 0, nationality: "", image: "", teamId: 0 });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      switch (e.currentTarget.name) {
        case "id":
          setId(parseInt(e.currentTarget.value));
          break;
        case "name":
          setDriversToUpdate({ ...driversToUpdate, name: e.currentTarget.value });
          break;
        case "Age":
          setDriversToUpdate({ ...driversToUpdate, age: parseInt(e.currentTarget.value) });
          break;
        case "nationality":
          setDriversToUpdate({ ...driversToUpdate, nationality: e.currentTarget.value });
          break;
        case "teamid":
          setDriversToUpdate({ ...driversToUpdate, teamId: parseInt(e.currentTarget.value) });
          break;
      }
    };

    const getByIdFromContext = async () => {
      if(id === 0) {
        setStatus("Please enter an id");
        return;
      }
      try {
        const driversToUpdate = await context?.getById(id);
        setDriversToUpdate(driversToUpdate);
        console.log(driversToUpdate);
        setStatus('');
      }
      catch {
        setStatus("Error getting driver");
      }

    };

    const saveChanges = () => {
      try {
        if(context){
        context.editItem(driversToUpdate);
        }
    }
    catch(error) {
      setStatus("Error editing driver");
  }
  } 

  

  return (
    <form className="bg-light p-4 m-4 border rounded shadow-lg">
      <h2>Edit driver</h2>
      <div className='row'>
        <div className='col'>

        <div className='form-group col-md-6'>
          <label>id</label>
          <input
            name='id'
            type="number"
            className='form-control'
            placeholder='id'
            onChange={handleChange}
          />
          <span className={Status === 'Please enter an id' ? 'text-danger' : 'success-message'}>{Status}</span>
        </div>

        <div className='form-group col-md-6'>
          <label>Name</label>
          <input
            name='name'
            type="text"
            className='form-control'
            placeholder='name'
            value={driversToUpdate?.name}
            onChange={handleChange}
          />
        </div>

      <div className='form-group col-md-6'>
        <label>Age</label>
        <input
          name='Age'
          type="text"
          className='form-control'
          placeholder='Age'
          value={isNaN(driversToUpdate?.age) ? '' : Number(driversToUpdate?.age)}

          onChange={handleChange}
        />
      </div>

      <div className='form-group col-md-6'>
        <label>Nationality</label>
        <input
          name='nationality'
          type="text"
          className='form-control'
          placeholder='Nationality'
          value={driversToUpdate?.nationality}
          onChange={handleChange}
        />
      </div>

        <div className='form-group col-md-6'>
          <label>Team</label>
          <input
            name='teamid'
            type='text'
            className='form-control'
            placeholder='Age'
            value={isNaN(driversToUpdate?.teamId) ? '' : Number(driversToUpdate?.teamId)}
            onChange={handleChange}
          />

        </div>

      <div className='row'>
        <div className='form-group col-md-4'>
          <input type="button" className='btn btn-primary' value="get driver" onClick={getByIdFromContext}/>
        </div>
      </div>
      <div className='row'>
        <div className='form-group col-md-4'>
          <input type="button" className='btn btn-warning' value="save driver" onClick={saveChanges}/>
        </div>
      </div>

      </div>
      <div className='col'>
        <img className='image-size-medium'
          src={`http://localhost:5257/api/Image/driver/${driversToUpdate?.image}`}
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


export default EditDriver;