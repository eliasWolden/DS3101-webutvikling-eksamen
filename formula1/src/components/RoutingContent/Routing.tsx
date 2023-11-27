import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { DriverPage, HomePage, RacePage, TeamPage } from "../../pages";
import CRUDDriverPage from "../../pages/CRUDDriverPage";
import CRUDRacePage from "../../pages/CRUDRacePage";
import "../../css/main.css";
import { useEffect, useState } from "react";
import CRUDTeamPage from "../../pages/CRUDTeamPage";
import { GeneralProvider } from "../../contexts/GeneralProvider";
import {
  DriverService,
  RaceService,
  TeamService,
} from "../../services/CreateService";

function Routing() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <>
      <BrowserRouter>
        <GeneralProvider service={DriverService}>
          <GeneralProvider service={RaceService}>
            <GeneralProvider service={TeamService}>
              {!open && (
                <button
                  className="image-button open-button"
                  onClick={() => setOpen(!open)}
                >
                  <div className="hamburger"></div>
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
                      <div className="cross"></div>
                    </button>
                    <div className="list-box">
                      <ul className="list-1-in-box">
                        <li className="list-text-1">
                          <Link to="/" className="navbar-brand">
                            Home
                          </Link>
                        </li>
                        <br />
                        <h3>Register:</h3>
                        <li className="list-text-2">
                          <Link to="/CRUDDriverPage" className="nav-link">
                            Driver
                          </Link>
                        </li>
                        <li className="list-text-2">
                          <Link to="/CRUDRacePage" className="nav-link">
                            Race
                          </Link>
                        </li>
                        <li className="list-text-2">
                          <Link to="/CRUDTeamPAge" className="nav-link">
                            Team
                          </Link>
                        </li>
                      </ul>

                      <ul className="list-2-in-box">
                        <li>
                          <Link
                            to="http://localhost:5257/index.html"
                            className="nav-link"
                          >
                            Docs
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
            </GeneralProvider>
          </GeneralProvider>
        </GeneralProvider>
      </BrowserRouter>
    </>
  );
}

export default Routing;
