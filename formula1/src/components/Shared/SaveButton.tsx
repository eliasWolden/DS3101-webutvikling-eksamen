import React from "react";
import { DeleteButtonProps } from "./DeleteButton";


const SaveButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <div className="form-group col-md-4 p-3">
      <input
        type="button"
        className="btn btn-primary"
        onClick={onClick}
        value="Save"
      />
    </div>
  );
};

export default SaveButton;
