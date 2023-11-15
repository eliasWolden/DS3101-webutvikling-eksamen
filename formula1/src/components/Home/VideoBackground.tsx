import React from "react";
import "../../css/HomePage.css";

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video className="w-100" autoPlay muted loop>
        <source src="./videos/Formula1Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="docs-button">
        <button>Docs</button>
      </div>
    </div>
  );
};

export default VideoBackground;
