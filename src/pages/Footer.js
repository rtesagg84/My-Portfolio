import React from "react";

import Icon from 'react-fontawesome'
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
          <i className="fa fa-linkedin-square" aria-hidden="true"  />
          LinkedIn
        </a>

        {/* Github */}
        <a href="https://github.com/" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github" aria-hidden="true" />
          Github
        </a>
        
      </div>
      
    </div>
  );
}

export default Footer;
