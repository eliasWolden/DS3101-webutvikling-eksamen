// RaceList.js
import React, { useEffect, useState } from "react";
import MediaService from "../../services/MediaService";
import RaceItem from "./RaceItem"; // Assuming you have a RaceItem component

const RaceList = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await MediaService.getAllRaces();
        if (result.races) {
          setRaces(result.races);
        }
      } catch (error) {
        console.error("Error fetching race data:", error);
      }
    };

    fetchData();
  }, []);

  const getRaceItems = () => {
    return races.map((race, i) => {
      console.log("Race Object:", race); // Log the race object to the console for debugging

      return (
        <RaceItem
          key={`race-item-${i}`}
          winnerName={race.winnerName}
          winnerTime={race.winnerTime}
          grandPrix={race.grandPrix}
          numberOfLaps={race.numberOfLaps}
          image={`http://localhost:5257/api/ImageUpload/race/${race.image}`}
        />
      );
    });
  };

  return <div>{getRaceItems()}</div>;
};

export default RaceList;
