import React from "react";
import { Route,Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Resume from "../components/ResumeHomePage";
import Contact from "./Contact";
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
  </Switch>
);
export default Main;
