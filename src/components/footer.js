import "../styles/navbar.css";
import logo from "../logoo.png";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-col">
          <img src={logo} alt="logo" className="footer-logo" />
          <h3>Follow Us On</h3>

          <div className="social-icons">
            <a href="https://www.facebook.com/MRISchoolsofficial/"><FaFacebookF /></a>
            <a href="https://x.com/MrisEdu?s=20&t=ubdf7a4nCty4757rDZDFjQ"><FaXTwitter /></a>
            <a href="https://www.youtube.com/user/MRISVIDEO"><FaYoutube /></a>
            <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fmanavrachnaschools_mris%2F&is_from_rle"><FaInstagram /></a>
            <a href="https://www.linkedin.com/school/manav-rachna-international-school/"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Who We Are */}
        <div className="footer-col">
          <h3>Who We Are</h3>
          <p>About MRIS</p>
          <p>Life at MRIS</p>
          <p>Vision & Mission</p>
          <p>Network Schools</p>
          <p>Alumni</p>
          <p>Blog</p>

          <h3 className="mt">Curriculum</h3>
          <p>CBSE Board</p>
          <p>IB Board</p>
        </div>

        {/* Schools */}
        <div className="footer-col">
          <h3>Schools</h3>

          <strong>Faridabad</strong>
          <p>Sector 14 (CBSE)</p>
          <p>Sector 14 (IB)</p>
          <p>Sector 21C (CBSE)</p>
          <p>Charmwood (CBSE)</p>

          <strong>Gurugram</strong>
          <p>Sector 46 (CBSE)</p>
          <p>Sector 46 (IB)</p>
          <p>Sector 51 (CBSE)</p>

          <strong>Noida</strong>
          <strong>Ludhiana</strong>
          <strong>Mohali</strong>
        </div>

        {/* Admission */}
        <div className="footer-col">
          <h3>Admission</h3>
          <p>Admissions</p>
          <p>Scholarship Test</p>
          <p>Apply Now</p>
          <p>Book a Tour</p>

          <h3 className="mt">Other Links</h3>
          <p>MR Universe</p>
          <p>Toddler</p>
          <p>Pre Primary</p>
          <p>Sitemap</p>
          <p>Disclaimer</p>
          <p>Terms & Conditions</p>
          <p>Policy</p>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@mris.edu.in">info@mris.edu.in</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919098991000">+91 90989 91000</a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;