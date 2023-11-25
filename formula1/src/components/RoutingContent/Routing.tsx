import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { DriverPage, HomePage, RacePage, TeamPage } from "../../pages";
import CRUDDriverPage from "../../pages/CRUDDriverPage";
import CRUDRacePage from "../../pages/CRUDRacePage";
import "../../css/main.css";
import { useEffect, useState } from "react";
import CRUDTeamPage from "../../pages/CRUDTeamPage";
import { EntityProvider } from "../../contexts/EntityProvider";
import { DriverService, RaceService, TeamService } from "../../services/CreateService";

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
        <EntityProvider service={DriverService}>
          <EntityProvider service={RaceService}>
            <EntityProvider service={TeamService}>
              {!open && (
                <button
                  className="image-button open-button"
                  onClick={() => setOpen(!open)}
                >
                  <img src={"public/images/open.jpg"} alt="open button" />
                </button>
              )}

              {open && (
                <div className={`large-box ${open ? "open" : ""}`}>
                  <div
                    className="right-box"
                    onClick={() => setOpen(!open)}
                  ></div>
                  <div className="left-box">
                    <button
                      className="image-button close-button"
                      onClick={() => setOpen(!open)}
                    >
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
                        <li className="list-text-1">
                          <Link to="/TeamPage" className="nav-link">
                            Team
                          </Link>
                        </li>
                      </ul>

                      <ul className="list-2-in-box">
                        <li className="list-text-2">
                          <Link to="/CRUDDriverPage" className="nav-link">
                            CRUD Driver
                          </Link>
                        </li>
                        <li className="list-text-2">
                          <Link to="/CRUDRacePage" className="nav-link">
                            CRUD Race
                          </Link>
                        </li>
                        <li className="list-text-2">
                          <Link to="/CRUDTeamPAge" className="nav-link">
                            CRUD Team
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/DriverPage/:name" element={<DriverPage />} />
                <Route path="/RacePage" element={<RacePage />} />
                <Route path="/TeamPage" element={<TeamPage />} />
                <Route path="/CRUDRacePage" element={<CRUDRacePage />} />
                <Route path="/CRUDDriverPage" element={<CRUDDriverPage />} />
                <Route path="/CRUDTeamPage" element={<CRUDTeamPage />} />
              </Routes>
            </EntityProvider>
          </EntityProvider>
        </EntityProvider>
      </BrowserRouter>
    </>
  );
}

export default Routing;
