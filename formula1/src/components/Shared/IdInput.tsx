import React from "react";

interface IdInputProps {
  id: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IdInput: React.FC<IdInputProps> = ({ id, onChange }) => {
  return (
    <div className="form-group col-md-8">
      <label>id</label>
      <input
        name="id"
        type="number"
        className="form-control"
        placeholder="id"
        value={id}
        onChange={onChange}
      />
    </div>
  );
};

export default IdInput;
