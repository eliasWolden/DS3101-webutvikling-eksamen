import React from "react";
import "../../../interfaces/Races/INameInputProps";

const NameInput: React.FC<NameInputProps> = ({ grandPrix, onChange }) => {
  return (
    <div className="form-group col-md-8">
      <label>Grand Prix</label>
      <input
        name="grandPrix"
        type="text"
        className="form-control"
        placeholder="Grand Prix"
        value={grandPrix}
        onChange={onChange}
      />
    </div>
  );
};

export default NameInput;
