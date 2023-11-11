import React, { useState } from 'react';
import ImageService from '../../services/ImageService';

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
    <section>
      <h3>Last opp bilde</h3>

      <label>Bilde</label>
      <input type="file" onChange={setDriverImage} />

      <label>Navn</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Etternavn</label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <label>Alder</label>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />

      <label>Nasjonalitet</label>
      <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
      
      <label>Team</label>
      <select value={team} onChange={(e) => setTeam(e.target.value)}>
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
      <input type="button" onClick={uploadImage} value="Last opp bilde" />
    </section>
  );
}

export default CreateDriver;