import React, { Component } from "react";
import { Layout, Navigation, Header, Drawer, Content} from "react-mdl";
import { Link } from "react-router-dom";
import "./App.css";

import Main from "./pages/Main";
import Footer from "./pages/Footer";
class App extends Component {
  

  render() {
    return (
      
      <div  className="nav">
        <Layout>
          <Header className="header-color" title="My Portfolio" scroll>
            <Navigation >
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">AboutMe</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>

          <Drawer  title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">AboutMe</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
         

          <Content>
            <div className="page-content" />
            <Main />
          </Content>
<Footer/>
        
        </Layout>
      </div>
    );
  }
}

export default App;
