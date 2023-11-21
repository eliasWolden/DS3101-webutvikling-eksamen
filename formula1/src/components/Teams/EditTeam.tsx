import { useState, ChangeEvent, useContext } from 'react';
import { TeamContext } from '../../contexts/TeamContext';
import '../../../css/main.css';
import { ITeam } from '../../interfaces/Teams/ITeam';

const EditTeam = () => {
    const [id, setId] = useState<string>("1");



  const context = useContext(TeamContext);

    const [teamsToUpdate, setteamsToUpdate] = useState<ITeam>({ manufacturer: "", image: "", driver1: "", driver2: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      switch (e.currentTarget.name) {
        case "id":
          setId(e.currentTarget.value);
          break;
        case "manufacturer":
          setteamsToUpdate({ ...teamsToUpdate, manufacturer: e.currentTarget.value });
          break;
        case "Driver1":
          setteamsToUpdate({ ...teamsToUpdate, driver1: (e.currentTarget.value) });
          break;
        case "Driver2":
          setteamsToUpdate({ ...teamsToUpdate, driver2: e.currentTarget.value });
          break;
      }
    };

    const getByIdFromContext = async () => {
        const teamsFromContext = await context?.getById(id);
        setteamsToUpdate(teamsFromContext.teamsById);
        console.log(teamsFromContext.teamsById);

    };

    const saveChanges = () => {
        if(context){
        context.editTeams(teamsToUpdate);
        console.log(teamsToUpdate);
        }
    };
  
  


  return (
    <form className="bg-light p-4 m-4 border rounded shadow-lg">
      <h2>Edit team</h2>
      <div className='row'>
        <div className='col'>

        <div className='form-group col-md-6'>
          <label>id</label>
          <input
            name='id'
            type="text"
            className='form-control'
            placeholder='id'
            onChange={handleChange}
          />
        </div>

        <div className='form-group col-md-6'>
          <label>Manufacturer</label>
          <input
            name='manufacturer'
            type="text"
            className='form-control'
            placeholder='Manufacturer'
            value={teamsToUpdate?.manufacturer}
            onChange={handleChange}
          />
        </div>

      <div className='form-group col-md-6'>
        <label>Driver 1</label>
        <input
          name='Driver1'
          type="text"
          className='form-control'
          placeholder='Driver 1'
          value={teamsToUpdate?.driver1}

          onChange={handleChange}
        />
      </div>

      <div className='form-group col-md-6'>
        <label>Driver 2</label>
        <input
          name='Driver2'
          type="text"
          className='form-control'
          placeholder='Driver 2'
          value={teamsToUpdate?.driver2}
          onChange={handleChange}
        />
      </div>

      <div className='row'>
        <div className='form-group col-md-4'>
          <input type="button" className='btn btn-primary' value="get team" onClick={getByIdFromContext}/>
        </div>
      </div>
      <div className='row'>
        <div className='form-group col-md-4'>
          <input type="button" className='btn btn-warning' value="save team" onClick={saveChanges}/>
        </div>
      </div>

      </div>
      <div className='col'>
        <img className='image-size-car'
          src={`http://localhost:5257/api/Image/car/${teamsToUpdate.image}`}
          alt='Not found'
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "public/images/uknown.png"; // Adjust the path based on your project structure
          }}
          />
      </div>
      <div className='col'>
        <img className='image-size-emblem'
          src={`http://localhost:5257/api/Image/emblem/${teamsToUpdate.id}.png`}
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


export default EditTeam;