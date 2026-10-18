import React from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { Utensils } from "lucide-react";
import styles from "./FloatingWhatsApp.module.css";

const FloatingWhatsApp: React.FC = () => {
  const { t } = useTranslation();

  return (
    <aside className={styles.floatingContainer} aria-label="Contatos Rápidos">
      {/* Botão WhatsApp Recepção */}
      <a
        href="https://wa.me/5551992284510"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingBtn}
        aria-label={t("floating.receptionAria")}
        title={t("floating.reception")}
      >
        <span className={styles.label}>{t("floating.reception")}</span>
        <span className={styles.iconWrapper}>
          <FaWhatsapp size={20} />
        </span>
      </a>

      {/* Botão WhatsApp Restaurante */}
      <a
        href="https://wa.me/5551984008942"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingBtn}
        aria-label={t("floating.restaurantAria")}
        title={t("floating.restaurant")}
      >
        <span className={styles.label}>{t("floating.restaurant")}</span>
        <span className={styles.iconWrapper}>
          <Utensils size={19} />
        </span>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;