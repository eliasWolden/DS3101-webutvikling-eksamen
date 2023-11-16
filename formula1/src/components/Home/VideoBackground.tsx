import React from "react";
import "../../css/HomePage.css";

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background position-relative">
      <video className="w-100" autoPlay muted loop>
        <source src="./videos/Formula1Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="docs-button position-absolute start-0 translate-middle-y ms-3">
        <button className="btn btn-secondary">Docs</button>
      </div>
    </div>
  );
};

export default VideoBackground;
