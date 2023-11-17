import { useState, ChangeEvent, useContext } from 'react';
import { DriverContext } from '../../../contexts/DriverContext';
import { IDriver } from '../../../interfaces/Drivers/IDriver';

const EditDriver = () => {
    const [id, setId] = useState<string>("1");



  const context = useContext(DriverContext);

/*     const setHandler = (e: ChangeEvent<any>) => {
      switch (e.currentTarget.name) {
        case 'id':
            setId(e.currentTarget.value);
            break;
        case 'name':
          setDriversToUpdate({ ...driversToUpdate, driver: e.currentTarget.value });
          break;
        case 'Age':
          setDriversToUpdate({ ...driversToUpdate, driver: e.currentTarget.value });
          break;
        case 'nationality':
          setDriversToUpdate({ ...driversToUpdate, driver: e.currentTarget.value });
          break;
        case 'teamid':
          setDriversToUpdate({ ...driversToUpdate, driver: e.currentTarget.value });
          break;
      }
    }; */
    const [driversToUpdate, setDriversToUpdate] = useState<IDriver>({ name: "", age: 0, nationality: "", image: "", teamId: 0 });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      switch (e.currentTarget.name) {
        case "id":
          setId(e.currentTarget.value);
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
        const driversFromContext = await context?.getById(id);
        setDriversToUpdate(driversFromContext.driversById);
        console.log(driversFromContext.driversById);

    };

    const saveChanges = () => {
        if(context){
        context.editDrivers(driversToUpdate);
        }
    };
  
  


  return (
    <form className="bg-light p-4 m-4 border rounded shadow-lg">
      <h2>Edit driver</h2>

        <div className='form-group col-md-4'>
          <label>id</label>
          <input
            name='id'
            type="text"
            className='form-control'
            placeholder='id'
            onChange={handleChange}
          />
        </div>

        <div className='form-group col-md-4'>
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

      <div className='form-group col-md-4'>
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

      <div className='form-group col-md-4'>
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

        <div className='form-group col-md-4'>
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
          <input type="button" className='btn btn-danger' value="save driver" onClick={saveChanges}/>
        </div>
      </div>
    </form>
  );
};


export default EditDriver;