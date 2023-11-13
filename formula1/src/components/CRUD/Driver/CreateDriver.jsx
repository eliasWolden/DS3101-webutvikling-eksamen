import React, { useState } from 'react';
import ImageService from '../../../services/ImageService';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

const CreateDriver = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [nationality, setNationality] = useState('');
  const [team, setTeam] = useState('');

  const setDriverImage = (event) => {
    const files = event.target.files;
    if (files !== null) {
      const file = files[0];
      setImage(file);
    }
  };

  const generateImageName = () => {
    //lager et navn basert på navn og etternavn som brukes for å lagre bildet
    const fullName = `${name.toLowerCase()} ${lastName.toLowerCase()}`;
    return `${fullName.replace(/\s+/g, '-')}.png`;
  };

  const uploadImage = () => {
    if (image !== null) {
      const imageName = generateImageName();
      //sender bildet videre til ImageService
      ImageService.uploadImage(image, imageName).then((imageUrl) => {
        console.log('Image uploaded:', imageUrl);

        createDriver({ name }); // sender navnet til createDriver
      });
    }
  };

  const createDriver = (additionalData) => {
    const driverData = {
      name: additionalData.name,
    };
//sender en driver til ImageService
    ImageService.createDriver(driverData).then((response) => {
      console.log('Driver created:', response);
    });
  };

  return (
<form class="bg-light p-4 m-4 border rounded shadow-lg">
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
    <label htmlFor='exampleControlinput2'>LastName</label>
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
  <label htmlFor='exampleControlinput3'>Age</label>
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
  <label htmlFor='exampleControlinput4'>Nationality</label>
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
  <option value="6">Apline</option>
  <option value="7">Williams</option>
  <option value="8">AplhaTauri</option>
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
        onChange={setDriverImage}
      />
    </div>
  </div>
</div>

<div className='row'>
  <div className='form-group col-md-4'>
    <input type="submit" className='btn btn-primary' onClick={uploadImage} value="Create driver" />
  </div>
</div>

</form>
  );
}

export default CreateDriver;