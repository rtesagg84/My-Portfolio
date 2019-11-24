import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Grid, Cell } from "react-mdl";
import img4 from "../assets/imagecode.png";
import image from "../assets/image1.jpg";
import Cards from "../projectComponent/projectCardUi1";

class AboutMe extends Component {

  
  render() {
   
    return (
      <div>
        <Paper className="aboutMe-Paper">
          <Grid className="aboutMe-grid-container">
            <Grid className="aboutMe-row-head">
              <h3  className="aboutMe-h3">ABOUT ME</h3>
            </Grid>
            <Grid className="aboutMe-container1">
              <Cell col={6} >
                <Grid className="row1">
                  <ButtonBase className="aboutMe-buttenBase">
                    <img className="aboutMe-img" alt="complex" src={image}  />
                  </ButtonBase>
                </Grid>
                <Grid className="row2">
                  <p>
                    I am Aster Ghebreyesus. I am a full stack web developer.I
                    like dabbling in various parts of frontend development and
                    like to learn about new technologies, write technical
                    articles or simply play games in my free time.
                  </p>
                </Grid>
              </Cell>
              <Cell col={6} className="aboutMe-card">
                {/* inserting same descriptive your descriptive code*/}
              <Cards imgsrc={img4}/>
               </Cell>
            </Grid>
            <Grid
              className="aboutMe-container2"
              
            >
              <Grid className="aboutMe-what-I-Do">
                <h3 className="aboutMe-h3">WHAT I DO</h3>
              </Grid>
              <Grid className="aboutMe-list-Items">
                <Cell col={4} className="">
                  <h4> Web Application</h4>
                  <Grid>
                    <p>
                    I have  experience building Middle ware applications using mulesoft 3.9 Integration Platform.
                    </p>
                  </Grid>
                </Cell>
                <Cell col={4}>
                  <h4>WebSites</h4>
                  <Grid>
                    <p>
                     I know how to create your website to run across devices using the latest technologies available.
                     I have extensive experience with HTML5, CSS3 and JavaScript  I'm currently building most of the front-end projects using React,material UI
              </p>
                  </Grid>
                </Cell>
                <Cell col={4}>
                  <h4> Environments</h4>
                  <Grid>
                    <p>
                     I have an experience working  with different IDE environment.
                    </p>
                  </Grid>
                </Cell>
              </Grid>
              
              <Grid className="aboutMe-row1">
                <Cell col={12}>
                <h5> If you have any cool projects or opportunities,get in touch!!</h5>
              </Cell> 
              <Grid className="aboutMe-row2" >
                <Cell col={6}>
              <a href="/Contact" className="btn btn-primary btn-learn"
              >
                Contact Me
                <i className=" fa-usert" aria-hidden="true"  />
              </a>
              </Cell>
              <Cell col={6}>
              <a
                className="btn btn-primary btn-learn" 
                href="https://docs.google.com/document/d/13XljeRGh2egGagH3d1417uez_gjzAyNm8UeZL_K3qlM/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
                <i className="fa fa-download" aria-hidden="true"  />
              </a>
              </Cell>
            </Grid>
              
            </Grid>
            </Grid>
          </Grid>
          
        </Paper>
      </div>
    );
  }
}
export default AboutMe;
