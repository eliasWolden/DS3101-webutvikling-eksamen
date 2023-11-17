import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { DriverPage, HomePage, RacePage, TeamPage } from "../../pages";
import { DriverProvider } from "../../contexts/DriverContext";
import { RaceProvider } from "../../contexts/RaceContext";
import { TeamProvider } from "../../contexts/TeamContext";
import CreateDriverPage from "../../pages/CreateDriverPage";
import CreateRacePage from "../../pages/CreateRacePage";
import '../../css/main.css';
import { useState } from "react";

function Routing() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <BrowserRouter>
        <DriverProvider>
          <RaceProvider>
            <TeamProvider>
{!open &&
<div className="open-button">
  <button className="image-button" onClick={() => setOpen(!open)}>
    <img src={"public/images/open.jpg"} alt="poen button"/>
  </button>
</div>
}

{open && (
<div className="large-box">
  <div className="right-box" onClick={() => setOpen(!open)}></div>
  <div className="left-box">
    <button className="image-button" onClick={() => setOpen(!open)}>
      <img src={"public/images/close.png"} alt="close button"/>
    </button>

  <div className="list-box">
    <ul className="list-1-in-box">
      <li className="list-text-1">
        <Link to="/" className="navbar-brand">
          Home
          </Link>
      </li>
      <li className="list-text-1">
          <Link to="/DriverPage" className="nav-link">
            Driver
          </Link>
      </li>
      <li className="list-text-1">
          <Link to="/RacePage" className="nav-link">
            Race
          </Link>
      </li>
    </ul>

    <ul className="list-2-in-box">
      <li className="list-text-2">
        <Link to="/TeamPage" className="nav-link">
          Team
        </Link>
      </li>
      <li className="list-text-2">
        <Link to="/CreateDriverPage" className="nav-link">
          DriverPage
        </Link>
      </li>
      <li className="list-text-2">
        <Link to="/CreateRacePage" className="nav-link">
          CreateRacePage
        </Link>
      </li>
    </ul>
    </div>
  </div>
</div>
            )}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/DriverPage" element={<DriverPage />} />
                <Route path="/RacePage" element={<RacePage />} />
                <Route path="/TeamPage" element={<TeamPage />} />
                <Route path="/CreateRacePage" element={<CreateRacePage />} />
                <Route
                  path="/CreateDriverPage"
                  element={<CreateDriverPage />}
                />
              </Routes>
            </TeamProvider>
          </RaceProvider>
        </DriverProvider>
      </BrowserRouter>
    </>
  );
}

export default Routing;