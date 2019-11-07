


import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Grid,Cell} from 'react-mdl'

import image  from '../assets/image1.jpg'
class AboutMe extends Component {
  render() {
    return (
      <div >
        <Paper className="aboutMe-Paper">
          <Grid >
            <Cell col={6} style={{paddingLeft:"50px"}}>
              <ButtonBase style={{ width: 300, height: 400 }}>
                <img className="aboutMe-img"
                  alt="complex"
                  src={image}
                  
                />
              </ButtonBase>
            </Cell>
            <Cell
              col={6}
              style={{ fontSize: 20,paddingRight: "30px" }}
            >
              <h3>About Me</h3>
              <p>I am Aster Ghebreyesus</p>
              <p>
                I am a full stack web developer.I like dabbling in various parts
                of frontend development and like to learn about new
                technologies, write technical articles or simply play games in
                my free time.
              </p>
              <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/13XljeRGh2egGagH3d1417uez_gjzAyNm8UeZL_K3qlM/edit" target="_blank" rel="noopener noreferrer">Download CV<i className="icon-download4" /></a></p>{/* i  have to redirect to the my pdf insted of to google drv */}
            </Cell>
          </Grid>
        </Paper>
      </div>

    
  );
}}
export default AboutMe;



 