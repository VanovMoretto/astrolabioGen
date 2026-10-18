import { useTranslation } from "react-i18next";

export interface ModalTableItem {
  qty?: number | string;
  name: string;
  price: string;
}

export interface ModalCategoryData {
  category: string;
  items: ModalTableItem[];
}

const formatPrice = (price: number): string =>
  `R$ ${price.toFixed(2).replace(".", ",")}`;

export const useFrigobarData = (): ModalCategoryData[] => {
  const { t } = useTranslation();

  return [
    {
      category: t("frigobar.categories.drinks"),
      items: [
        {
          qty: 2,
          name: t("frigobar.items.waterStill"),
          price: formatPrice(8),
        },
        {
          qty: 2,
          name: t("frigobar.items.waterSparkling"),
          price: formatPrice(8),
        },
        {
          qty: 2,
          name: t("frigobar.items.coke"),
          price: formatPrice(10),
        },
        {
          qty: 2,
          name: t("frigobar.items.cokeZero"),
          price: formatPrice(10),
        },
        {
          qty: 2,
          name: t("frigobar.items.beerLongNeck"),
          price: formatPrice(16),
        },
      ],
    },
  ];
};