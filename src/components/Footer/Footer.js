import React from "react";
import { Link } from "react-router-dom";

import linkedin from "../../assets/images/linkedin.png";

const Footer = () => {
  return (
    <div className="gb-footer">
      <div className="container p-4">
        <div className="row">
          <div className="col">
            <div>
              GREENBORD <br /> Patratu Ramgarh,
              <br /> Jharkhand - 829126
            </div>
            <div className="pt-1">
              <Link to="/about-us" className="link-text">
                About Us
              </Link>
            </div>
            <div className="p-2">
              <a
                href="https://in.linkedin.com/company/greenbord"
                target="_blank"
              >
                <img src={linkedin} width="40" />
              </a>
            </div>
          </div>
          <div className="col">
            <div>
              Contact us <br />
              Email ID: greenbord2020@gmail.com <br />
              WhatsApp Chat: 7970601950
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          © 2020 GreenBord. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
