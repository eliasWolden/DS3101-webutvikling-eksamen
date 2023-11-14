import { useState, ChangeEvent } from 'react';
import ImageService from '../../../services/ImageService';
import "bootstrap/dist/css/bootstrap.css?inline";


const uploadDriver = () => {
  const [image, setImage] = useState<File | null>(null);
// variabler for å lagre input fra bruker
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [nationality, setNationality] = useState<string>('');
  const [team, setTeam] = useState<string>('');


  const setImageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {files} = event.target;
      if (files != null) {
        const file = files[0];
        setImage(file);
      }
  }

  const uploadImage = () => {
    if (image !== null) {
      ImageService.uploadImage(image);
    }
  }



  return (
    <form className="bg-light p-4 m-4 border rounded shadow-lg">
      <h2>Create driver</h2>

      <div className='row'>
        <div className='form-group col-md-4'>
          <label htmlFor="exampleFormControlInput1">Firstname</label>
          <input
            type="text"
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Firstname'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-group col-md-4'>
          <label htmlFor='exampleControlInput2'>LastName</label>
          <input
            type="text"
            className='form-control'
            id='exampleFormControlInput2'
            placeholder='Lastname'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className='form-group col-md-2'>
        <label htmlFor='exampleControlInput3'>Age</label>
        <input
          type="text"
          className='form-control'
          id='exampleFormControlInput3'
          placeholder='Age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className='form-group col-md-2'>
        <label htmlFor='exampleControlInput4'>Nationality</label>
        <input
          type="text"
          className='form-control'
          id='exampleFormControlInput4'
          placeholder='Nationality'
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
      </div>

      <div className='row'>
        <div className='form-group col-md-2'>
          <label htmlFor="exampleFormControlSelect1">Team</label>
          <select
            className='form-control'
            id='exampleFormControlSelect1'
            value={team}
            onChange={(e) => setTeam(e.target.value)}
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
          <label htmlFor="exampleFormControlFile1">Upload image</label>
          <div className="custom-file">
            <input
              type="file"
              className='custom-file-input'
              id='exampleFormControlFile1'
              onChange={setImageHandler}
            />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='form-group col-md-4'>
          <input type="submit" className='btn btn-primary' onClick={uploadDriver} value="Create driver" />
        </div>
      </div>

    </form>
  );
};

export default uploadDriver;
