import React from "react";
import "../projectComponent/Project.css";
//import video1 from "../assets/video1.mp4"
const Cards = props => {
  
    return (
    <div className="cards">
    <div className="cards-overflow">
<img src={props.imgsrc} alt="image1" className="cards img" />
      {/* <video src={props.videosrc} type="video/mp4" className="card-video-top"/>*/}
      </div>
    </div>
  );
};
export default Cards;
