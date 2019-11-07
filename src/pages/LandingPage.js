import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
//import Particles from "react-particles-js";
const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 200
      }
    }
  }
};
class LandingPage extends Component {
  render() {
    return (
      <div className="div-Land" >
        <Grid className="Landing-grid">
          <Cell col={12}>
          
            <div className="banner-text">
              <h3>Hello I'm Aster</h3>
              <h1>Full Stack web Developer</h1>
              <p> React|Css|Html|Nod.js|Java script|SQL|Mulesoft(3.9)</p>
              {/*<div className="social-links">
                {/* LinkedIn 
                <a
                  href="https://www.linkedin.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >{/*I have a problem with the Icon code
                  <i className="fa fa-linkedin-square" aria-hidden="true" />LinkedIn
                </a>

                {/* Github 
                <a
                  href="https://github.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github" aria-hidden="true" />
                  Github
                </a>
                </div>*/}
              {/* problem with particles ajustment with my background*/}
              {/*<Particles>{particleOpt}</Particles>*/}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
/*<Footer size="mini">
<FooterSection type="left" logo="Title">
<FooterLinkList>
    <a href="#">Help</a>
    <a href="#">Privacy & Terms</a>
</FooterLinkList>
</FooterSection>
</Footer>*/
