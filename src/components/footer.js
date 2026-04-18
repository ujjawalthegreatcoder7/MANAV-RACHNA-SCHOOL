import "../styles/navbar.css";
import logo from "../logoo.png";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-coll">
          <div>
          <img src={logo} alt="logo" className="footer-logo" />
          </div>
          <div>
          <h3>The Council</h3>
          <h3>Forum</h3>
          </div>
        </div>

<div  className="footer-coll">
        {/* Empty Sections (structure maintain) */}
        {/* <div className="footer-col">
          <h3>Schools</h3>
        </div>

        <div className="footer-col">
          <h3>Admission</h3>
        </div> */}

        <div className="footer-col">
          <h3>Contact Us</h3>
        </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/thecouncilforum/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/the-council-forum/about/?viewAsMember=true"><FaLinkedinIn /></a>
          </div>
</div>
      </div>
    </footer>
</>
  );
}

export default Footer;