import React from "react";
import footerLogo from "../../assets/footerLogo.svg";
import "./Footer.scss";
import twitterIcon from "../../assets/twitter.svg";
import youtubeIcon from "../../assets/youtube.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-section1">
          <img src={footerLogo} />
        </div>

        <div className="footer-section2">
          <div className="part1">
            <h3>
              <a style={{ fontWeight: "700" }} href="#">
                Contact Info
              </a>
            </h3>
            <div>
              <a href="#">Lagos State & Edo State, Nigerai</a> |
              <a href="#">contact@naweeng.com</a> |<a href="#">2347025544587</a>
            </div>
          </div>
          <div className="part2">
            <h3>
              <a style={{ fontWeight: "700" }} href="#">
                Value Links
              </a>
            </h3>
            <div>
              <a href="#">Terms & Conditions</a> |<a href="#">Privacy Policy</a>{" "}
              |<a href="#">FAQ</a> |<a href="#">FeedBack</a>
            </div>
          </div>
          <div className="part3">
            <h3>
              <a style={{ fontWeight: "700" }} href="#">
                Our Services
              </a>
            </h3>
            <div>
              <a href="#">Send Parcel</a> | <a href="#">Customers</a> |
              <a href="#">Agents</a> |<a href="#">Booths</a>
            </div>
          </div>
        </div>
        <div className="footer-section3">
          <img src={twitterIcon} />
          <img src={youtubeIcon} />
          <img src={facebookIcon} />
          <img src={instagramIcon} />
        </div>
      </footer>
      <div className="copyright-section">
        Copyright &#169; 2022 Nawee Services - All rights reserved
      </div>
    </>
  );
};

export default Footer;
