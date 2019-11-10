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
      <div className="div-Land">
        <Grid className="Landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h3>Hello I'm Aster</h3>
              <h1>Full Stack web Developer</h1>
              <p> React|Css|Html|Nod.js|Java script|SQL|Mulesoft(3.9)</p>
             
              {/* problem with particles ajustment with my background*/}
             {/* <Particles>{particleOpt}</Particles>*/}


            </div>
           

          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
