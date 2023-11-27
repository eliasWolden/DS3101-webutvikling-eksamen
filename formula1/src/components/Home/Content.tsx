import React, { FC } from "react";
import "../../css/HomePage.css";
import "../../css/QuizGame.css";
import TeamList from "../Teams/TeamList";
import DriverList from "../Drivers/DriverList";
import RaceList from "../Races/RaceList";
import Quiz from "./Quiz";
import { GeneralProvider } from "../../contexts/GeneralProvider";
import {
  DriverService,
  RaceService,
  TeamService,
} from "../../services/CreateService";

const Section: FC<{
  title: string;
  service: any;
  children: React.ReactNode;
}> = ({ title, service, children }) => (
  <section>
    <div>
      <h3 className="header-f1 text-center p-4 text-uppercase">{title}</h3>
    </div>
    <GeneralProvider service={service}>{children}</GeneralProvider>
  </section>
);

const Content: FC = () => {
  return (
    <article>
      <Section title="Formula 1 Drivers" service={DriverService}>
        <DriverList />
      </Section>
      <Section title="Formula 1 Teams" service={TeamService}>
        <TeamList />
      </Section>
      <Section title="Formula 1 Races" service={RaceService}>
        <RaceList />
      </Section>
      <Section title="Quiz" service={null}>
        <Quiz />
      </Section>
    </article>
  );
};

export default Content;
