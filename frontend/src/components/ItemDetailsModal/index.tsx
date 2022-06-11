import { Item } from "../../@types/entities";
import { toCurrency } from "../../utils/formatters";
import { IconButton } from "../IconButton";
import { Modal } from "../Modal";
import { ItemDetailTile } from "./ItemDetailTile";
import { LocationCard } from "./LocationCard";

import styles from "./styles.module.scss";

interface ItemDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onRequestEditItem: () => void;
  item: Item;
}

export function ItemDetailsModal(props: ItemDetailsModalProps) {
  const item = props.item;
  if (!item) return null;

  const isAvailable = item.status !== "UNAVAILABLE" && item.amountAvailable > 0;

  function renderActionSet() {
    return (
      <IconButton icon={"/public/icons/edit.svg"} onClick={props.onRequestEditItem} />
    );
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      className={styles.grid}
      actionSet={renderActionSet()}
    >
      <section className={styles.itemPresentationSection}>
        <img src={item.image} alt={item.name} />
        <h3>Localização</h3>
        <div className={styles.locationBlock}>
          <LocationCard title={item.location?.column} description="Corredor" />
          <LocationCard title={item.location?.hall} description="Prateleira" />
          <LocationCard title={item.location?.column} description="Coluna" />
        </div>
      </section>

      <section className={styles.itemInfoSection}>
        <strong>Código - {item.code}</strong>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <div className={styles.priceTile}>
          <span>Preço</span>
          <strong>{toCurrency(item.unitPrice)}</strong>
        </div>

        <div className={styles.itemDetailsBlock}>
          <ItemDetailTile
            title="Quantidade"
            info={`${item.amountAvailable}`}
            highlightInfo="uni"
          />
          <ItemDetailTile
            title="Disponibilidade"
            info={isAvailable ? "Disponível" : "Indisponível"}
          />
          <ItemDetailTile title="Categoria" info={item.category} />
        </div>
      </section>
    </Modal>
  );
}
