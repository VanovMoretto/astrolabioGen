import React, { useState, useEffect } from "react";
import { X, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ModalCategoryData } from "../data/frigobarData";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  note?: string;
  data?: ModalCategoryData[];
  searchable?: boolean;
  searchPlaceholder?: string;
  customHeaders?: {
    qty?: string;
    item: string;
    value: string;
  };
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  note,
  data,
  searchable = false,
  searchPlaceholder,
  customHeaders,
}) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
    }
  }, [isOpen]);

  if (!isOpen || !data) {
    return null;
  }

  const hasQuantity = data[0]?.items[0]?.qty !== undefined;

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredData =
    searchable && normalizedSearch
      ? data
          .map((categoryData) => ({
            ...categoryData,
            items: categoryData.items.filter(
              (item) =>
                item.name.toLowerCase().includes(normalizedSearch) ||
                item.price.toLowerCase().includes(normalizedSearch) ||
                String(item.qty ?? "")
                  .toLowerCase()
                  .includes(normalizedSearch)
            ),
          }))
          .filter((categoryData) => categoryData.items.length > 0)
      : data;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
        </div>

        {/* BARRA DE BUSCA (GUIA SKY) */}
        {searchable && (
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                className={styles.searchInput}
                placeholder={searchPlaceholder || t("modal.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        )}

        {note && <div className={styles.modalNote}>{note}</div>}

        {/* CORPO DA TABELA */}
        <div className={styles.modalBody}>
          {filteredData.length === 0 ? (
            <p className={styles.emptySearch}>{t("modal.noResults")}</p>
          ) : (
            filteredData.map((categoryData, index) => (
              <div key={index} className={styles.categoryWrapper}>
                <h3 className={styles.categoryTitle}>{categoryData.category}</h3>

                <table className={styles.priceTable}>
                  {(hasQuantity || customHeaders) && (
                    <thead>
                      <tr>
                        {hasQuantity && (
                          <th className={styles.qtyCol}>
                            {customHeaders?.qty || t("modal.table.qty")}
                          </th>
                        )}
                        <th
                          className={
                            hasQuantity
                              ? styles.productCol
                              : styles.productColOnly
                          }
                        >
                          {customHeaders
                            ? customHeaders.item
                            : t("modal.table.item")}
                        </th>
                        <th className={styles.priceCol}>
                          {customHeaders
                            ? customHeaders.value
                            : t("modal.table.unitPrice")}
                        </th>
                      </tr>
                    </thead>
                  )}

                  <tbody>
                    {categoryData.items.map((item, itemIndex) => (
                      <tr key={itemIndex}>
                        {hasQuantity && (
                          <td className={styles.qtyCol}>{item.qty}</td>
                        )}
                        <td
                          className={
                            hasQuantity
                              ? styles.productColLeft
                              : styles.productColOnly
                          }
                        >
                          {item.name}
                        </td>
                        <td className={styles.priceCol}>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;