// DriverImage.tsx
import React from "react";

interface getImageProps {
  imagePath: string;
  subfolder: string;
}

const GetImage: React.FC<getImageProps> = ({ imagePath, subfolder }) => {
  return (
    <img
      className="image-size-medium"
      src={`http://localhost:5257/api/Image/${subfolder}/${imagePath}`}
      alt="Not found"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = "public/images/uknown.png";
      }}
    />
  );
};

export default GetImage;
