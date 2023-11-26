// DriverImage.tsx
import React from "react";

interface DriverImageProps {
  imagePath: string;
}

const DriverImage: React.FC<DriverImageProps> = ({ imagePath }) => {
  return (
    <img
      className="image-size-medium"
      src={`http://localhost:5257/api/Image/driver/${imagePath}`}
      alt="Not found"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = "public/images/uknown.png";
      }}
    />
  );
};

export default DriverImage;
