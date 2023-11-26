// SelectedDriverList.tsx
import React, { useContext } from "react";
import { IEntityContext } from "../../interfaces/IEntityContext";
import { IDriver } from "../../interfaces/Drivers/IDriver";
import { SelectedDriverListProps } from "../../interfaces/ISelectedDriverListProps";
import "../../css/main.css";
import { EntityContext } from "../../contexts/EntityProvider";



const SelectedDriverList: React.FC<SelectedDriverListProps> = ({ name }) => {
  const context = useContext(EntityContext) as IEntityContext<IDriver>;

  const getDriverByNameFromContext = (name: string) => {
    try {
      const driver = context.items.find((driver) => driver.name.toLowerCase() === name);
      return driver;
    } catch (error) {
      console.log(error);
    }
  };

  const selectedDriver = getDriverByNameFromContext(name);


  return (
<div className="selected-driver">
  <div className="selected-driver-image-container">
    <div className="selected-content">
        <img
        src={`http://localhost:5257/api/Image/driver/${selectedDriver?.image}`}
        alt="bilde av sjafør"
        className=""
        draggable="false"
        />        
      </div>
  </div>
</div>
  );
};

export default SelectedDriverList;
