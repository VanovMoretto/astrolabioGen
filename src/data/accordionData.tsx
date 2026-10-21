import React from "react";
import { useTranslation } from "react-i18next";
import {
  Wifi,
  Coffee,
  Clock,
  ShieldAlert,
  Utensils,
  Tv,
  ConciergeBell,
} from "lucide-react";
import {
  ContentInternet,
  ContentCafe,
  ContentRestaurante,
  ContentCheckInOut,
  ContentServicos,
  ContentSky,
  ContentPoliticas,
} from "../components/AccordionContents";

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