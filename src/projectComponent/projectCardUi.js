import React from "react";
import "../projectComponent/Project.css";
const Card = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
  <img src={props.imgsrc} alt="image1" className="card-img-top" />

   <div className="card-body text-dark">
          <h4 className="card-title">{props.title}</h4>
         {/*} <p className="card-text text-secondary">{props.description}</p>*/}

          <a
            href="https://github.com/rtesagg84/"
            className="btn btn-outline-success"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
