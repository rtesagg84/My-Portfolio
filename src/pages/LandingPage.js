import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  state = {
    headerText: "",
    secondHeaderText: "",
    allHeaderText: "Hello I'm Aster",
    allSecondHeaderText: "Full Stack web Developer",
    intervalId: null
  };

  addLetter = () => {
    const letter = this.state.allHeaderText.charAt(0);
    let newText;
    if (this.state.allHeaderText.length === 1) {
      clearInterval(this.state.intervalId);
      this.setState({
        intervalId: window.setInterval(() => {
          this.addSecondLetter();
        }, 150)
      });
    } else {
      newText = this.state.allHeaderText.substring(1);
    }
    this.setState({
      headerText: this.state.headerText + letter,
      allHeaderText: newText
    });
  };

  addSecondLetter = () => {
    const letter = this.state.allSecondHeaderText.charAt(0);
    let newText;
    if (this.state.allSecondHeaderText.length === 1) {
      clearInterval(this.state.intervalId);
    } else {
      newText = this.state.allSecondHeaderText.substring(1);
    }
    this.setState({
      secondHeaderText: this.state.secondHeaderText + letter,
      allSecondHeaderText: newText
    });
  };

  componentDidMount() {
    this.setState({
      intervalId: window.setInterval(() => {
        this.addLetter();
      }, 80)
    });
  }

  render() {
    return (
      <div className="div-Land">
        <Grid className="Landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h3>{this.state.headerText}</h3>
              <h1>{this.state.secondHeaderText}</h1>
              <p> React | Css | Html | Nod.js | Java script | SQL | Mulesoft(3.9)</p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
