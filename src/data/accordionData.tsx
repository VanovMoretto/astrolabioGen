import React from "react";
import { useTranslation, Trans } from "react-i18next";
import {
  Wifi,
  Coffee,
  Clock,
  ShieldAlert,
  BedDouble,
  Baby,
  Users,
  Dog,
  Utensils,
  Tv,
  ConciergeBell,
  MapPin,
} from "lucide-react";
import SubAccordion from "../components/SubAccordion";

export interface AccordionContentProps {
  onOpenFrigobarModal?: () => void;
  onOpenSkyModal?: () => void;
}

export interface AccordionItemData {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: React.FC<AccordionContentProps>;
}

const linkStyle: React.CSSProperties = {
  fontWeight: 700,
  textDecoration: "none",
  color: "var(--color-text-strong)",
  cursor: "pointer",
};

const noteStyle: React.CSSProperties = {
  display: "block",
  marginTop: "16px",
  fontStyle: "italic",
  fontWeight: 700,
  color: "var(--color-primary)",
  fontSize: "0.85rem",
};

/* ==========================================
   1. INTERNET E TELEFONES
   ========================================== */
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
          <Trans
            i18nKey="accordion.internet.wifiAltPass"
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
        <strong>{t("accordion.internet.phonesTitle")}</strong>
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
        <span style={noteStyle}>{t("accordion.internet.noExtensionsNote")}</span>
      </p>
    </>
  );
};

/* ==========================================
   2. CAFÉ DA MANHÃ
   ========================================== */
const ContentCafe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("accordion.breakfast.description")}</p>
      <p>
        <strong>{t("accordion.breakfast.weekdaysTitle")}</strong>
        <br />
        {t("accordion.breakfast.weekdaysTime")}
      </p>
      <p>
        <strong>{t("accordion.breakfast.weekendsTitle")}</strong>
        <br />
        {t("accordion.breakfast.weekendsTime")}
      </p>
    </>
  );
};

/* ==========================================
   3. FRIGOBAR, RESTAURANTE E ROOM SERVICE
   ========================================== */
const ContentRestaurante: React.FC<AccordionContentProps> = ({
  onOpenFrigobarModal,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <strong>{t("accordion.restaurant.restaurantTitle")}</strong>
        <br />
        {t("accordion.restaurant.restaurantHours")}
      </p>

      <p>
        <strong>{t("accordion.restaurant.roomServiceTitle")}</strong>
        <br />
        {t("accordion.restaurant.roomServiceHours")}
      </p>

      <div style={{ textAlign: "center", margin: "12px 0 18px 0" }}>
        <button
          className="button-primary"
          onClick={() =>
            window.open("https://minhaestadia.com/swan-generation", "_blank")
          }
        >
          {t("accordion.restaurant.menuButton")}
        </button>
      </div>

      <p>
        <strong>{t("accordion.restaurant.minibarTitle")}</strong>
        <br />
        {t("accordion.restaurant.minibarDesc")}
      </p>

      <div style={{ textAlign: "center", margin: "12px 0 4px 0" }}>
        <button className="button-primary" onClick={onOpenFrigobarModal}>
          {t("accordion.restaurant.menuButton")}
        </button>
      </div>
    </>
  );
};

/* ==========================================
   4. CHECK-IN E CHECK-OUT
   ========================================== */
const ContentCheckInOut: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <strong>{t("accordion.checkin.checkinTitle")}</strong>{" "}
        {t("accordion.checkin.checkinTime")}
        <br />
        <strong>{t("accordion.checkin.checkoutTitle")}</strong>{" "}
        {t("accordion.checkin.checkoutTime")}
      </p>

      <div style={{ fontSize: "0.82rem", marginTop: "10px" }}>
        <ul style={{ paddingLeft: "20px", margin: "0 0 10px 0" }}>
          <li style={{ marginBottom: "6px" }}>
            <strong>{t("accordion.checkin.earlyCheckinTitle")}</strong>{" "}
            {t("accordion.checkin.earlyCheckinDesc")}
          </li>
          <li>
            <strong>{t("accordion.checkin.lateCheckoutTitle")}</strong>{" "}
            {t("accordion.checkin.lateCheckoutDesc")}
          </li>
        </ul>
        <span style={{ fontStyle: "italic", opacity: 0.9 }}>
          {t("accordion.checkin.availabilityNote")}
        </span>
      </div>
    </>
  );
};

/* ==========================================
   5. SERVIÇOS (ESTACIONAMENTO E LAVANDERIA)
   ========================================== */
const ContentServicos: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>
        <strong>{t("accordion.services.parkingTitle")}</strong>
        <br />
        {t("accordion.services.parkingDesc")}
      </p>

      <p>
        <strong>{t("accordion.services.laundryTitle")}</strong>
        <br />
        <Trans
          i18nKey="accordion.services.laundryDesc1"
          components={{ 1: <strong /> }}
        />
      </p>

      <div style={{ textAlign: "center", margin: "10px 0 14px 0" }}>
        <button
          className="button-primary"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/search/?api=1&query=Lavanderia+Quatro+Estacoes+Porto+Alegre",
              "_blank"
            )
          }
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <MapPin size={16} />
          {t("accordion.services.mapButton")}
        </button>
      </div>

      <p>
        <Trans
          i18nKey="accordion.services.laundryDesc2"
          components={{ 1: <strong /> }}
        />
      </p>
    </>
  );
};

/* ==========================================
   6. GUIA DE CANAIS SKY
   ========================================== */
const ContentSky: React.FC<AccordionContentProps> = ({ onOpenSkyModal }) => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("accordion.sky.description")}</p>
      <div style={{ textAlign: "center", margin: "12px 0 4px 0" }}>
        <button className="button-primary" onClick={onOpenSkyModal}>
          {t("accordion.sky.button")}
        </button>
      </div>
    </>
  );
};

/* ==========================================
   7. POLÍTICAS DO HOTEL (SUB-ACCORDIONS)
   ========================================== */
const ContentPoliticas: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ paddingTop: "4px" }}>
      <SubAccordion
        icon={<BedDouble size={18} />}
        title={t("accordion.policies.rulesTitle")}
      >
        <p>
          <strong>{t("accordion.policies.nonSmokingTitle")}</strong>
          <br />
          {t("accordion.policies.nonSmokingDesc")}
        </p>
        <p>
          <strong>{t("accordion.policies.linensTitle")}</strong>
          <br />
          {t("accordion.policies.linensDesc")}
        </p>
        <p>
          <strong>{t("accordion.policies.lostKeyTitle")}</strong>
          <br />
          {t("accordion.policies.lostKeyDesc")}
        </p>
      </SubAccordion>

      <SubAccordion
        icon={<Baby size={18} />}
        title={t("accordion.policies.minorsTitle")}
      >
        <p>{t("accordion.policies.minorsP1")}</p>
        <p>{t("accordion.policies.minorsP2")}</p>
      </SubAccordion>

      <SubAccordion
        icon={<Users size={18} />}
        title={t("accordion.policies.guestsTitle")}
      >
        <p>{t("accordion.policies.guestsP1")}</p>
      </SubAccordion>

      <SubAccordion
        icon={<Dog size={18} />}
        title={t("accordion.policies.petTitle")}
      >
        <ul>
          <li>{t("accordion.policies.petLi1")}</li>
          <li>{t("accordion.policies.petLi2")}</li>
          <li>{t("accordion.policies.petLi3")}</li>
          <li>{t("accordion.policies.petLi4")}</li>
          <li>{t("accordion.policies.petLi5")}</li>
          <li>{t("accordion.policies.petLi6")}</li>
          <li>{t("accordion.policies.petLi7")}</li>
        </ul>
      </SubAccordion>
    </div>
  );
};

/* ==========================================
   ORDEM DOS ACCORDIONS
   ========================================== */
export const useAccordionData = (): AccordionItemData[] => {
  const { t } = useTranslation();

  return [
    {
      id: "internet",
      icon: <Wifi size={24} />,
      title: t("accordion.internet.title"),
      content: ContentInternet,
    },
    {
      id: "breakfast",
      icon: <Coffee size={24} />,
      title: t("accordion.breakfast.title"),
      content: ContentCafe,
    },
    {
      id: "restaurant",
      icon: <Utensils size={24} />,
      title: t("accordion.restaurant.title"),
      content: ContentRestaurante,
    },
    {
      id: "checkin",
      icon: <Clock size={24} />,
      title: t("accordion.checkin.title"),
      content: ContentCheckInOut,
    },
    {
      id: "sky",
      icon: <Tv size={24} />,
      title: t("accordion.sky.title"),
      content: ContentSky,
    },
    {
      id: "services",
      icon: <ConciergeBell size={24} />,
      title: t("accordion.services.title"),
      content: ContentServicos,
    },
    {
      id: "policies",
      icon: <ShieldAlert size={24} />,
      title: t("accordion.policies.title"),
      content: ContentPoliticas,
    },
  ];
};