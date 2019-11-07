import React from "react";
import {
  Layout,
  Navigation,
  Header,
  Drawer,
  Content,
  FooterSection,
  FooterLinkList
} from "react-mdl";
var style = {
  backgroundColor: "purple",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footer() {
  return (
    <div>
      <div className="footer-phantom " />
      <div className="footer-style  ">
     
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/*I have a problem with the Icon code*/}
            <i className="fa fa-linkedin-square" aria-hidden="true" />
            LinkedIn
          </a>

          {/* Github */}
          <a
            href="https://github.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true" />
            Github
          </a>
        
      </div>
    </div>
  );
}

export default Footer;
