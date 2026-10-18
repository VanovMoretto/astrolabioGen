import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const SUPPORTED_LANGUAGES = ["pt", "en", "es", "zh"] as const;
type SupportedLang = (typeof SUPPORTED_LANGUAGES)[number];

const langToCountryCode: Record<SupportedLang, string> = {
  pt: "br",
  en: "us",
  es: "es",
  zh: "cn",
};

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const rawLang = (i18n.language || "pt").split("-")[0] as SupportedLang;
  const currentLang: SupportedLang = SUPPORTED_LANGUAGES.includes(rawLang)
    ? rawLang
    : "pt";

  const changeLanguage = (lng: SupportedLang) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentCountryCode = langToCountryCode[currentLang];

  return (
    <div className={styles.switcherWrapper} ref={dropdownRef}>
      <button
        className={styles.currentLangButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Alterar idioma"
      >
        <span className={`fi fi-${currentCountryCode} ${styles.flagIcon}`} />
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {SUPPORTED_LANGUAGES.filter((lng) => lng !== currentLang).map(
            (lng) => {
              const countryCode = langToCountryCode[lng];
              return (
                <button
                  key={lng}
                  className={styles.dropdownItem}
                  onClick={() => changeLanguage(lng)}
                >
                  <span className={`fi fi-${countryCode} ${styles.flagIcon}`} />
                </button>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;