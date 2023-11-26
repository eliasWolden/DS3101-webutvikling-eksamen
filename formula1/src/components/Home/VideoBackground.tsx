import { FC } from "react";
import "../../css/HomePage.css";

const VideoBackground: FC = () => {
  return (
    <section>
      <div className="video-background position-relative">
        <div className="overlay"></div>
        <video className="w-100" autoPlay muted loop>
          <source src="./videos/Formula1Video.mp4" type="video/mp4" />
        </video>
        <div className="docs-button position-absolute start-0 translate-middle-y ms-3">
          <a href="http://localhost:5257/index.html">
            <button className="btn btn-secondary">Docs</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoBackground;
