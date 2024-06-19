import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route, Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="Footer">
        <div className="FooterContainer">
          <div id="LogoTop">
            <img
              src="https://github.com/DefHex/LittleLemmon/blob/master/public/android-chrome-192x192.png?raw=true"
              alt="Logo"
            />
          </div>
          <nav className="FooterSectionsContainer">
            <h2 className="FooterSections">Navigation</h2>
            <ul>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Menu">Menu</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
              <li>
                <a href="#Testimonials">Testimonials</a>
              </li>
            </ul>
          </nav>
          <div className="FooterContact" id="Contact">
            <h2 className="FooterSections">Contact</h2>
            <address>
              <ul>
                <li>
                <a href="http://maps.google.com/?q=Chicago restaurant" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLocationDot} /> {" "} Address : Chicago</a>
                </li>
                <li>
                  <a href="tel:+4953435453453"><FontAwesomeIcon icon={faPhone} /> Phone : +4953435453453 </a>
                </li>
                <li>
                  <a href="mailto: testEmail@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                    {" "}
                    Email : testEmail@gmail.com{" "}
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <div>
            <h2 className="FooterSections">Social Media Links</h2>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
