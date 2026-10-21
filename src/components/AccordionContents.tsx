import React from "react";
import { useTranslation, Trans } from "react-i18next";
import {
  BedDouble,
  Baby,
  Users,
  Dog,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SubAccordion from "./SubAccordion";
import contactStyles from "./ContactList.module.css";
import type { AccordionContentProps } from "../data/accordionData";

interface ContactRowProps {
  type: "whatsapp" | "phone";
  /** Número só com dígitos (wa.me) ou no formato tel: */
  value: string;
  display: string;
  label: string;
}

// Linha inteira tocável: ícone da ação, setor + número e a ação à direita
const ContactRow: React.FC<ContactRowProps> = ({ type, value, display, label }) => {
  const { t } = useTranslation();
  const isWhatsapp = type === "whatsapp";

  return (
    <a
      className={contactStyles.contactRow}
      href={isWhatsapp ? `https://wa.me/${value}` : `tel:${value}`}
      {...(isWhatsapp && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <span
        className={`${contactStyles.iconCircle} ${isWhatsapp ? contactStyles.whatsapp : ""}`}
        aria-hidden="true"
      >
        {isWhatsapp ? <FaWhatsapp size={18} /> : <Phone size={17} />}
      </span>
      <span className={contactStyles.text}>
        <span className={contactStyles.label}>{label}</span>
        <span className={contactStyles.number}>{display}</span>
      </span>
      <span className={contactStyles.action}>
        {isWhatsapp
          ? t("accordion.internet.actionWhatsapp")
          : t("accordion.internet.actionCall")}
        <ChevronRight size={16} aria-hidden="true" />
      </span>
    </a>
  );
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
export const ContentInternet: React.FC = () => {
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

      <div>
        <strong>{t("accordion.internet.phonesTitle")}</strong>
        <div className={contactStyles.contactList}>
          <ContactRow
            type="whatsapp"
            value="5551992284510"
            display="(51) 99228-4510"
            label={t("accordion.internet.whatsappReception")}
          />
          <ContactRow
            type="whatsapp"
            value="5551984008942"
            display="(51) 98400-8942"
            label={t("accordion.internet.whatsappRestaurant")}
          />
          <ContactRow
            type="phone"
            value="+555133272222"
            display="(51) 3327-2222"
            label={t("accordion.internet.phonesHotel")}
          />
          <ContactRow
            type="phone"
            value="08007077106"
            display="0800 707 7106"
            label={t("accordion.internet.phonesReservation")}
          />
        </div>
        <span style={noteStyle}>{t("accordion.internet.noExtensionsNote")}</span>
      </div>
    </>
  );
};

/* ==========================================
   2. CAFÉ DA MANHÃ
   ========================================== */
export const ContentCafe: React.FC = () => {
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
export const ContentRestaurante: React.FC<AccordionContentProps> = ({
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
        <button
          className="button-primary"
          onClick={() => window.open("https://wa.me/5551984008942", "_blank")}
        >
          {t("accordion.restaurant.orderButton")}
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
export const ContentCheckInOut: React.FC = () => {
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
export const ContentServicos: React.FC = () => {
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
export const ContentSky: React.FC<AccordionContentProps> = ({ onOpenSkyModal }) => {
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
export const ContentPoliticas: React.FC = () => {
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
