import React from "react";
import { getImageProps } from "../../interfaces/IGetImage";



const GetImage: React.FC<getImageProps> = ({ imagePath, subfolder }) => {
  return (
    <img
      className={`image-size-${subfolder}`}
      src={`http://localhost:5257/api/Image/${subfolder}/${imagePath}`}
      alt="Not found"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = "public/images/uknown.png";
        console.log(subfolder, imagePath);
        console.log(`http://localhost:5257/api/Image/${subfolder}/${imagePath}`);
      }}
    />
  );
};

export default GetImage;
