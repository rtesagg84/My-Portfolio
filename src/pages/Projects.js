import React, { Component } from "react";
import Card from "../projectComponent/projectCardUi";
import Cards from "../projectComponent/projectCardUi1";
import img4 from "../assets/image4.gif";
import img3 from "../assets/image3.gif";
import img5 from "../assets/image5.gif";
import img6 from "../assets/image6.gif";

import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  taggleCategoryies() {
    if (this.state.activeTab === 0) {
      return (
        <div className="bodycolor">
        <div className="container-fluod d-flex justfy-content-center Top">
          <div className="row">
            <div className="col-md-4">
              <Cards imgsrc={img4} alt="React Resume Image" />
            </div>
            <div className="col-md-4">
              <Cards imgsrc={img5}alt="React Guessing Image" />
            </div>
            <div className="col-md-4">
              <Cards imgsrc={img3} alt="React Portfolio Image"/>
            </div>
            <div className="col-md-4">
              <Cards imgsrc={img6} alt="React Portfolio Image"/>
            </div>
          </div>

          
        </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="container-fluod d-flex justfy-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card
                imgsrc={img4}
                /*videosrc={video1}*/
                title="Resume using Reactjs"
               /* description="This project shows how to build a resume using React js "*/
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img5}
                title=" Number guessing game using Reactjs"
               /* description="This project shows agame using React js "*/
              />
            </div>
            <div className="col-md-4">
              <Card
                imgsrc={img3}
                title=" React-Portfolio Using Reactjs,React-Router "
              /*description="This is my pesonal portfolio using Reactjs and React natives "*/
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>React-native</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>All</Tab>
          <Tab>React</Tab>
          <Tab>React-Native</Tab>
        </Tabs>

        <div className="content">{this.taggleCategoryies()}</div>
      </div>
    );
  }
}
export default Projects;
