import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { DriverPage, HomePage, RacePage, TeamPage } from "../../pages";
import { DriverProvider } from "../../contexts/DriverContext";
import { RaceProvider } from "../../contexts/RaceContext";
import { TeamProvider } from "../../contexts/TeamContext";
import CreateDriverPage from "../../pages/CreateDriverPage";
import CreateRacePage from "../../pages/CreateRacePage";
import '../../css/main.css';
import { useEffect, useState } from "react";

function Routing() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
// Add or remove the 'no-scroll' class to the body based on the 'open' state
  if (open) {
      document.body.classList.add("no-scroll");
} else {
      document.body.classList.remove("no-scroll");
}
// Clean up by removing the 'no-scroll' class when the component is unmounted
  return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <>
    <BrowserRouter>
      <DriverProvider>
        <RaceProvider>
          <TeamProvider>
            {!open && (
                <button className="image-button open-button" onClick={() => setOpen(!open)}>
                  <img src={"public/images/open.jpg"} alt="open button" />
                </button>
            )}

            {open && (
              <div className={`large-box ${open ? 'open' : ''}`}>
                <div className="right-box" onClick={() => setOpen(!open)}></div>
                <div className="left-box">
                  <button className="image-button close-button" onClick={() => setOpen(!open)}>
                    <img src={"public/images/close.png"} alt="close button" />
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