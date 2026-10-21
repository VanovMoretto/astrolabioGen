import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingWhatsApp.module.css";

const FloatingWhatsApp: React.FC = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLElement>(null);

  // Empurra o botão para cima quando o rodapé entra na tela,
  // para que ele pare acima do rodapé em vez de sobrepô-lo
  useEffect(() => {
    const container = containerRef.current;
    const footer = document.querySelector("footer");
    if (!container || !footer) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const overlap = window.innerHeight - footer.getBoundingClientRect().top;
      container.style.setProperty(
        "--footer-overlap",
        `${Math.max(0, overlap)}px`
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // O conteúdo muda de altura ao abrir acordeões, sem disparar scroll
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside
      ref={containerRef}
      className={styles.floatingContainer}
      aria-label="Contatos Rápidos"
    >
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
    </aside>
  );
};

export default FloatingWhatsApp;
