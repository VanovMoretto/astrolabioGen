import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Phone, MapPin, Mail } from "lucide-react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.topSection}>
          {/* LADO ESQUERDO: Marca e Endereço de POA */}
          <div className={styles.brandBlock}>
            <a
              href="https://www.swangeneration.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brandTitle}
            >
              SWAN <span>GENERATION</span>
            </a>
            <p className={styles.tagline}>
              Hospedagem • Coliving • Coworking | Rede Swan Hotéis
            </p>
            <div className={styles.address}>
              <MapPin size={15} className={styles.contactIcon} />
              <span>
                R. 24 de Outubro, 1611 - Auxiliadora, Porto Alegre - RS
              </span>
            </div>
          </div>

          {/* LADO DIREITO: Contatos do Generation e Redes Sociais */}
          <div className={styles.contactsBlock}>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Phone size={15} className={styles.contactIcon} />
                <a href="tel:+555133272222">(51) 3327-2222</a>
                <span>•</span>
                <a href="tel:08007077106">0800 707 7106</a>
              </div>

              <div className={styles.contactItem}>
                <FaWhatsapp size={15} className={styles.contactIcon} />
                <a
                  href="https://wa.me/5551992284510"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recepção: (51) 99228-4510
                </a>
              </div>

              <div className={styles.contactItem}>
                <Mail size={15} className={styles.contactIcon} />
                <a href="mailto:reservas@swanhoteis.com.br">
                  reservas@swanhoteis.com.br
                </a>
              </div>
            </div>

            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/swangeneration/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Swan Generation"
                className={styles.socialLink}
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/swanhoteis/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Swan Hotéis"
                className={styles.socialLink}
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/swanhoteis/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Swan Hotéis"
                className={styles.socialLink}
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        {/* BASE: Copyright + CNPJ + Crédito Dev */}
        <div className={styles.bottomSection}>
          <small>
            &copy; {currentYear} Swan Generation (CNPJ: 94.708.096/0001-90).
            Todos os direitos reservados.
          </small>
          <small className={styles.devCredit}>
            Desenvolvido por{" "}
            <a
              href="https://github.com/vanovmoretto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vanov Moretto
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;