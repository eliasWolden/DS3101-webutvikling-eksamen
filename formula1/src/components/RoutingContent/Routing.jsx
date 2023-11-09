import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { DriverPage, HomePage, RacePage, TeamPage } from "../../pages";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/DriverPage">Driver</Link>
            </li>
            <li>
              <Link to="/RacePage">Race</Link>
            </li>
            <li>
              <Link to="/TeamPage">Team</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DriverPage" element={<DriverPage />} />
          <Route path="/RacePage" element={<RacePage />} />
          <Route path="/TeamPage" element={<TeamPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;
