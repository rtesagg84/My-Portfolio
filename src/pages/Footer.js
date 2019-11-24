import React from "react";
function Footer() {
  return (
    <div>
      <div className="footer-phantom " />
      <div className="footer-style  ">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true" />
          LinkedIn
        </a>

        {/* Github */}
        <a
          href="https://github.com/rtesagg84"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true" />
          Github
        </a>
      </div>
    </div>
  );
}

export default Footer;
