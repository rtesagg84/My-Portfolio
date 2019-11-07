import React, { Component } from "react";
import Card from "../projectComponent/projectCardUi";
import img4 from "../assets/images4.jpg";
import img3 from "../assets/image3.jpg";
import img5 from "../assets/image5.jpg";
import video1 from "../assets/video1.mp4"
import {
  Tabs,
  Tab,
  
  
  
} from "react-mdl";
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
        <div className="container-fluod d-flex justfy-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card
               imgsrc={img4}
               
              /*videosrc={video1}*/
                title="Resume using react"
                description="This project shows how to build a resume using React js "
      />
            </div>
            <div className="col-md-4">
              <Card
               imgsrc={img5}
                title=" Number guessing game"
                description="This project shows agame using React js "
              />
            </div>
            <div className="col-md-4">
              <Card
              imgsrc={img3}
                title=" React-Portfolio"
                description="This is my pesonal portfolio using Reactjs and React natives "
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Mulesoft</h1>
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
        <Tab>React</Tab>
        <Tab>Mulesoft</Tab>
      </Tabs>
      
                <div className="content">{this.taggleCategoryies()}</div>
     
      </div>
    );
  }
}
export default Projects;

// {/* imgsrc={img2}*/}