import React from "react";

interface NameInputProps {
  grandPrix: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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