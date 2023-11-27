import React from "react";


const TeamCarSelect: React.FC<DriverFormProps> = ({ setHandler }) => {
  return (
    <div className="row">
    <div className="form-group col-md-2">
      <label>select your car</label>
      <select
        name="selectedCar"
        className="form-control"
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
  );
};

export default TeamCarSelect;
