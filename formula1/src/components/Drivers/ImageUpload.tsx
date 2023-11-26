import React from "react";
interface ImageUploadProps {
  setHandler: (e: React.ChangeEvent<any>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setHandler }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="image" className="form-label">
          Upload image
        </label>
        <div className="custom-file">
          <input
            id="image"
            name="image"
            type="file"
            className="custom-file-input"
            onChange={setHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
