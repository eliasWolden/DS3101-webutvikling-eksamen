import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { DriverPage, HomePage, RacePage, TeamPage } from "../../pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { DriverProvider } from "../../contexts/DriverContext";
import { RaceProvider } from "../../contexts/RaceContext";
import { TeamProvider } from "../../contexts/TeamContext";
import CreateDriverPage from "../../pages/CreateDriverPage";
import CreateRacePage from "../../pages/CreateRacePage";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <DriverProvider>
          <RaceProvider>
            <TeamProvider>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <Link to="/" className="navbar-brand">
                    Home
                  </Link>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to="/DriverPage" className="nav-link">
                          Driver
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/RacePage" className="nav-link">
                          Race
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/TeamPage" className="nav-link">
                          Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/CreateDriverPage" className="nav-link">
                          DriverPage
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/DriverPage" element={<DriverPage />} />
                <Route path="/RacePage" element={<RacePage />} />
                <Route path="/TeamPage" element={<TeamPage />} />
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