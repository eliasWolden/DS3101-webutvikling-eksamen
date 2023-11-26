import { FC, useState, ChangeEvent, useContext } from 'react';
import { IDriver } from '../../interfaces/Drivers/IDriver';
import { IGeneralContext } from '../../interfaces/IGeneralContext';
import { GeneralContext } from '../../contexts/GeneralProvider';

const AddDriver: FC = () => {
//fornavn og etternavn blir til navnet til sjaføren med mellomrom
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = `${firstName} ${lastName}`;
  const [Status, setStatus] = useState("");

  const [age, setAge] = useState<number>(Number);
  const [nationality, setNationality] = useState('');
  const [teamid, setTeamid] = useState<number>(Number);
  const [image, setImage] = useState<File | null>(null);

  const subfolder = "Drivers";


  const context = useContext(GeneralContext) as IGeneralContext<IDriver>;

    const setHandler = (e: ChangeEvent<any>) => {
      const { name, value, files } = e.target;

      switch (name) {
        case 'Firstname':
          setFirstName(value);
          break;
        case 'Lastname':
          setLastName(value);
          break;
        case 'Age':
          setAge(Number(value));
          break;
        case 'nationality':
          setNationality(value);
          break;
        case 'teamid':
          setTeamid(parseInt(value));
          break;
        case 'image':
          if (files != null) {
            const file = files[0];

            const imageFileName = `${firstName}-${lastName}.png`;

            const renamedImage = new File([file], imageFileName, { type: file.type });
    
            setImage(renamedImage);
          }
          break;
      }
    };


const saveDriver = () => {
  if (firstName && lastName && age && nationality && teamid && image) {
    const newDriver: IDriver = {
      name: fullName,
      age: age,
      nationality: nationality,
      image: image.name,
      teamId: teamid,
    };
    handleAdd(newDriver, image, subfolder);
    setStatus("Driver created");
    console.log(newDriver);
  } else {
    setStatus("Please fill out all fields");
  }
};


    const handleAdd = async (newItem : IDriver,  image : File, subfolder : string) => {
      try {
        if(context) {
          await context.postItem(newItem);
          await context.postImage(image, subfolder);
          console.log(image);
        }

      } catch (error) {
        console.log('Error adding driver', error);
      }
    }


  return (
    <form className="bg-light p-4 m-4 border rounded shadow-lg">
      <h2>Create driver</h2>

      <div className='row'>
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
        <label>Age</label>
        <input
          name='Age'
          type="text"
          className='form-control'
          placeholder='Age'
          onChange={setHandler}
        />
      </div>

      <div className='form-group col-md-2'>
        <label>Nationality</label>
        <input
          name='nationality'
          type="text"
          className='form-control'
          placeholder='Nationality'
          onChange={setHandler}
        />
      </div>

      <div className='row'>
        <div className='form-group col-md-2'>
          <label>Team</label>
          <select
            name='teamid'
            className='form-control'
            onChange={setHandler}
          >
            <option value="1">Red bull</option>
            <option value="2">Mercedes</option>
            <option value="3">Ferrari</option>
            <option value="4">McLaren</option>
            <option value="5">Aston Martin</option>
            <option value="6">Alpine</option>
            <option value="7">Williams</option>
            <option value="8">AlphaTauri</option>
            <option value="9">Alfa Romeo</option>
            <option value="10">Haas F1</option>
          </select>
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
          <input type="button" className='btn btn-primary' value="Create driver" onClick={saveDriver}/>
          <span className={Status === 'Driver created' ? 'success-message' : 'text-danger'}>{Status}</span>
        </div>
      </div>
    </form>
  );
};

export default AddDriver;
