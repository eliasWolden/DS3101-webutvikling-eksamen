import React from "react";
import { TeamDetailsInputsProps } from "../../../interfaces/Teams/ITeamDetailsInputsProps";

const TeamInputForm: React.FC<TeamDetailsInputsProps> = ({
    manufacturer,
    driver1,
    driver2,
    onChange,
}) => {
    return (
        <>
            <div className="form-group col-md-6">
              <label>Manufacturer</label>
              <input
                name="manufacturer"
                type="text"
                className="form-control"
                placeholder="Manufacturer"
                value={manufacturer}
                onChange={onChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label>Driver 1</label>
              <input
                name="Driver1"
                type="text"
                className="form-control"
                placeholder="Driver 1"
                value={driver1}
                onChange={onChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label>Driver 2</label>
              <input
                name="Driver2"
                type="text"
                className="form-control"
                placeholder="Driver 2"
                value={driver2}
                onChange={onChange}
              />
            </div>

        </>
    );
};

export default TeamInputForm;