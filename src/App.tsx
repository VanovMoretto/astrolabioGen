import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAccordionData } from "./data/accordionData";
import { useFrigobarData, type ModalCategoryData } from "./data/frigobarData";
import { useSkyData } from "./data/skyData";
import Accordion from "./components/Accordion";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import logoSvg from "./assets/logo.png";
import "./App.css";

interface ModalState {
  title: string;
  data: ModalCategoryData[];
  note?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  customHeaders?: {
    qty?: string;
    item: string;
    value: string;
  };
}

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src={logoSvg} alt="Logo Astrolábio Swan Generation" />
    </div>
  );
};

const App: React.FC = () => {
  const { t } = useTranslation();
  const accordionData = useAccordionData();
  const frigobarPriceList = useFrigobarData();
  const skyChannelList = useSkyData();

  const [modalContent, setModalContent] = useState<ModalState | null>(null);

  const openFrigobarModal = () =>
    setModalContent({
      title: t("modal.frigobarTitle"),
      data: frigobarPriceList,
      searchable: false,
    });

  const openSkyModal = () =>
    setModalContent({
      title: t("modal.skyTitle"),
      data: skyChannelList,
      searchable: true,
      searchPlaceholder: t("modal.skySearchPlaceholder"),
      customHeaders: {
        qty: t("modal.table.vc"),
        item: t("modal.table.channel"),
        value: t("modal.table.tech"),
      },
    });

  const closeModal = () => setModalContent(null);

  return (
    <div className="app-wrapper">
      <FloatingWhatsApp />

      <div className="app-container">
        <LanguageSwitcher />

        <Logo />

        <section className="intro-text">
          <p>{t("introText")}</p>
        </section>

        <main className="accordion-list">
          {accordionData.map((item) => {
            const ContentComponent = item.content;
            return (
              <Accordion key={item.id} icon={item.icon} title={item.title}>
                <ContentComponent
                  onOpenFrigobarModal={
                    item.id === "restaurant" ? openFrigobarModal : undefined
                  }
                  onOpenSkyModal={item.id === "sky" ? openSkyModal : undefined}
                />
              </Accordion>
            );
          })}
        </main>

        <Modal
          isOpen={!!modalContent}
          onClose={closeModal}
          title={modalContent?.title}
          data={modalContent?.data}
          note={modalContent?.note}
          searchable={modalContent?.searchable}
          searchPlaceholder={modalContent?.searchPlaceholder}
          customHeaders={modalContent?.customHeaders}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;