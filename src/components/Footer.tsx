import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Phone } from "lucide-react";
import logoFooter from "../assets/logo-footer.png";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}>
            <a
              href="https://www.swangeneration.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Site Swan Generation"
            >
              <img src={logoFooter} alt="Swan Generation" />
            </a>
          </div>
          <div className={styles.footerAddress}>
            <small>R. 24 de Outubro, 1611 - Auxiliadora, Porto Alegre - RS</small>
          </div>
          <div className={styles.footerCopyright}>
            <small>
              &copy; {new Date().getFullYear()} Swan Generation •{" "}
              {t("footer.copyright")}
            </small>
          </div>
        </div>

        <div className={styles.separator} />

        <div className={styles.footerRight}>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/swanhoteis/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Swan Hotéis"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/swangeneration/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Swan Generation"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/swanhoteis/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Swan Hotéis"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <div className={styles.phoneContacts}>
            <div className={styles.contactItem}>
              <Phone size={16} aria-hidden="true" />
              <a href="tel:+555133272222">(51) 3327-2222</a>
            </div>

            <div className={styles.contactItem}>
              <FaWhatsapp size={16} aria-hidden="true" />
              <a
                href="https://wa.me/5551992284510"
                target="_blank"
                rel="noopener noreferrer"
              >
                (51) 9 9228-4510
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.footerDev}>
        {t("footer.devCredit")}
        <a
          href="https://github.com/vanovmoretto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vanov Moretto
        </a>
      </p>
    </footer>
  );
};

export default Footer;