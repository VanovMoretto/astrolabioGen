import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./SubAccordion.module.css";

interface SubAccordionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const SubAccordion: React.FC<SubAccordionProps> = ({
  icon,
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.subAccordion}>
      <button
        className={`${styles.subAccordionHeader} ${isOpen ? styles.open : ""}`}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <div className={styles.icon}>{icon}</div>
        <span className={styles.title}>{title}</span>
        <ChevronDown
          className={`${styles.chevron} ${isOpen ? styles.open : ""}`}
          size={18}
        />
      </button>

      <div
        className={`${styles.subAccordionContent} ${isOpen ? styles.open : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.contentPadding}>{children}</div>
      </div>
    </div>
  );
};

export default SubAccordion;