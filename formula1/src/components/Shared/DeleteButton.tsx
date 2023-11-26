import React from "react";

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <div className="form-group col-md-4 p-3">
      <input
        type="button"
        className="btn btn-danger"
        onClick={onClick}
        value="Delete"
      />
    </div>
  );
};

export default DeleteButton;
