import "../App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";



function Footer () {
    return(
        <div className="Footer">
            <div className="FooterContainer">
                <div id="LogoTop"><img src="https://github.com/DefHex/LittleLemmon/blob/master/public/android-chrome-192x192.png?raw=true" alt="Logo" /></div>
                <nav className="FooterSectionsContainer">
                    <ul>
                        <h2 className="FooterSections">Navigation</h2>
                        <li><a href='#Home'>Home</a></li>
                        <li><a href='#About'>About</a></li>
                        <li><a href='#Menu'>Menu</a></li>
                        <li><a href='#Reservations'>Reservations</a></li>
                        <li><a href='#Order online'>Order online</a></li>
                        <li><a href='#Login'>Login</a></li>
                    </ul>
                </nav>
                <div className="FooterContact">
                    <h2 className="FooterSections">Contact</h2>
                    <ul>
                    <li><address>Address : Chicago</address></li>
                    <li><a href="tel:+4953435453453">Phone : +4953435453453 </a></li>
                    <li><a href= "mailto: testEmail@gmail.com"> Email : testEmail@gmail.com </a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="FooterSections">Social Media Links</h2>
                    <ul>
                        <li><a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/> Facebook</a></li>
                        <li><a href='https://www.instagram.com/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/> Instagram</a></li>
                        <li><a href='https://www.youtube.com/'target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/> YouTube</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;