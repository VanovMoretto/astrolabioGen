import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Accordion.module.css";

interface AccordionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ icon, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.accordionHeader} ${isOpen ? styles.open : ""}`}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <div className={styles.icon}>{icon}</div>
        <span className={styles.title}>{title}</span>
        <ChevronDown
          className={`${styles.chevron} ${isOpen ? styles.open : ""}`}
          size={20}
        />
      </button>
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.contentPadding}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;