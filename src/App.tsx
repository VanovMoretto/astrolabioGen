import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Utensils, Tv } from "lucide-react";
import styles from "./App.module.css";
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.appContainer}>
        {/* CABEÇALHO DO ASTROLÁBIO GEN */}
        <header className={styles.header}>
          <span className={styles.badgeGen}>Guia Digital do Hóspede</span>
          <h1 className={styles.title}>
            Astrolábio <span className={styles.titleHighlight}>GEN</span>
          </h1>
          <p className={styles.subtitle}>
            Swan Generation • Porto Alegre
          </p>
        </header>

        {/* CARD DE BOAS-VINDAS / CONCEITO */}
        <section className={styles.introCard}>
          <p>
            O <strong>Astrolábio</strong> é o seu guia oficial de navegação no{" "}
            <strong>Swan Generation</strong>. Aqui você encontra Wi-Fi, horários,
            serviços e políticas da nossa hospedagem, coliving e coworking de
            forma rápida e direta.
          </p>
        </section>

        {/* AÇÕES RÁPIDAS (Como o hotel não possui ramais internos, isso facilita muito a vida do hóspede) */}
        <section className={styles.quickActionsSection}>
          <span className={styles.sectionLabel}>Atendimento Rápido (Sem Ramal)</span>
          <div className={styles.quickActionsGrid}>
            <a
              href="https://wa.me/5551992284510"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quickActionBtn}
            >
              <span className={styles.quickActionIcon}>
                <FaWhatsapp size={22} />
              </span>
              <div className={styles.quickActionText}>
                <span>Recepção</span>
                <small>WhatsApp 24h</small>
              </div>
            </a>

            <a
              href="https://wa.me/5551984008942"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quickActionBtn}
            >
              <span className={styles.quickActionIcon}>
                <Utensils size={20} />
              </span>
              <div className={styles.quickActionText}>
                <span>Restaurante</span>
                <small>Room Service</small>
              </div>
            </a>
          </div>
        </section>

        {/* CONTEÚDO PRINCIPAL (ONDE ENTRARÃO OS ACCORDIONS) */}
        <main className={styles.accordionList}>
          <div className={styles.placeholderBox}>
            Próximo passo: Aqui entrarão os Accordions (Wi-Fi, Check-in/out, Café
            da Manhã, Frigobar, Lavanderia, Guia Sky e Políticas).
          </div>
        </main>
      </div>

      {/* RODAPÉ */}
      <Footer />
    </div>
  );
};

export default App;