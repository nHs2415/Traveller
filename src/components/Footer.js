import "./FooterStyles.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Traveller</h1>
                    <p>Choose Your favourite destination.</p>
                </div>
                <div>
                    <a href="/">
                        <i><FaFacebookSquare /></i>    
                    </a>

                    <a href="/">
                    <i><FaInstagram /></i>
                    </a>

                    <a href="/">
                    <i><FaTwitter /></i>
                    </a>

                    <a href="/">
                    <i><BiLogoGmail /></i>
                    </a>

                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Commmunity</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">TroubleShooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;