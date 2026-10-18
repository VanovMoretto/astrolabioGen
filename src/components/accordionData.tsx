import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Wifi } from "lucide-react";

export interface AccordionItemData {
  id: number;
  icon: React.ReactNode;
  title: string;
  content: React.FC;
}

const linkStyle: React.CSSProperties = {
  fontWeight: 700,
  textDecoration: "none",
  color: "var(--color-text-strong)",
  cursor: "pointer",
};

const ContentInternet: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <strong>{t("accordion.internet.wifiTitle")}</strong>{" "}
        {t("accordion.internet.wifiDesc")}
        <br />
        <small>
          <Trans
            i18nKey="accordion.internet.wifiNet"
            components={{ 1: <strong /> }}
          />
          <br />
          {t("accordion.internet.wifiLogin")}
          <br />
          <Trans
            i18nKey="accordion.internet.wifiUser"
            components={{ 1: <strong /> }}
          />
          <br />
          <Trans
            i18nKey="accordion.internet.wifiPass"
            components={{ 1: <strong /> }}
          />
        </small>
      </p>

      <p>
        <strong>{t("accordion.internet.wifiAltTitle")}</strong>
        <br />
        <small>
          <Trans
            i18nKey="accordion.internet.wifiAltNet"
            components={{ 1: <strong /> }}
          />
          <br />
          {t("accordion.internet.wifiAltNote")}
        </small>
      </p>

      <p>
        <strong>{t("accordion.internet.phonesTitle")}</strong>
        <br />
        <small>{t("accordion.internet.noExtensionsNote")}</small>
        <br />
        <Trans
          i18nKey="accordion.internet.whatsappReception"
          components={{
            1: (
              <a
                href="https://wa.me/5551992284510"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              />
            ),
          }}
        />
        <br />
        <Trans
          i18nKey="accordion.internet.whatsappRestaurant"
          components={{
            1: (
              <a
                href="https://wa.me/5551984008942"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              />
            ),
          }}
        />
        <br />
        <Trans
          i18nKey="accordion.internet.phonesHotel"
          components={{
            1: <a href="tel:+555133272222" style={linkStyle} />,
          }}
        />
        <br />
        <Trans
          i18nKey="accordion.internet.phonesReservation"
          components={{
            1: <a href="tel:08007077106" style={linkStyle} />,
          }}
        />
      </p>
    </>
  );
};

export const useAccordionData = (): AccordionItemData[] => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      icon: <Wifi size={24} />,
      title: t("accordion.internet.title"),
      content: ContentInternet,
    },
  ];
};