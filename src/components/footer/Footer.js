import "./Footer.css";
import isetLogo from "../../assets/isetlogo.png";
import { FaFacebook, FaTwitter, FaGooglePlusG, FaRss } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Instituts Supérieurs des Etudes Technologiques : Iset KEBILI</p>
      </div>

      <div className="footer-middle">
        <div className="social-icons">
          <p>Suivez nous sur</p>
          <a href="/#" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="/#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="/#" aria-label="Google Plus">
            <FaGooglePlusG />
          </a>
          <a href="/#" aria-label="RSS">
            <FaRss />
          </a>
        </div>

        <div className="contact-info">
          <img src={isetLogo} alt="iset Logo" className="logo-img" />
          <div className="address">
            <p>
              <strong>
                INSTITUT SUPÉRIEUR DES ÉTUDES TECHNOLOGIQUES DE KÉBILI
              </strong>
            </p>
            <p>
              <strong>ADRESSE :</strong> Route de Gabès - BP n°61 - 4200 -
              Kébili Tunisie
            </p>
            <p>
              <strong>TÉL :</strong> +216 75 494 000
            </p>
            <p>
              <strong>FAX :</strong> +216 75 491 000
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2017 Université Virtuelle de KEBILI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
