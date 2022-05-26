import { Item } from "../../@types/entities";
import { toCurrency } from "../../utils/formatters";
import { IconButton } from "../IconButton";
import { ItemUnavailableFeedback } from "../ItemUnavailableFeedback";

import closeIcon from "/icons/close.svg";
import editIcon from "/icons/edit.svg";

import styles from "./styles.module.scss";

interface ItemDetailsCardProps {
  isVisible: boolean;
  item: Item;
  onRequestClose: () => void;
}

export function ItemDetailsCard({ item, ...props }: ItemDetailsCardProps) {
  console.log(props.isVisible);

  const visibleClass = props.isVisible ? styles.active : "";

  function renderUnavailableTite() {
    if (item.amountAvailable > 1) return null;
    return <ItemUnavailableFeedback />;
  }

  const getItemLocationInfo = (): string => {
    const hall = item.location?.hall;
    const shelf = item.location?.shelf;
    const block = item.location?.block;

    return `C${hall} | P${shelf} | B${block}`;
  };

  return (
    <section className={`${styles.itemDetailsCard} ${visibleClass}`}>
      <header>
        <IconButton icon={closeIcon} onClick={props.onRequestClose} />
        <h2>Detalhes do item</h2>
        <IconButton icon={editIcon} onClick={() => {}} />
      </header>
      <div className={styles.image}>
        <img src={item.image} alt={item.name} />
        {renderUnavailableTite()}
      </div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <span className={styles.price}>{toCurrency(item.unitPrice)}</span>
      <div className={styles.otherInfos}>
        <div>
          <span>Quantidade</span>
          <p>
            <span className={styles.amountAvailable}>
              {item.amountAvailable}{" "}
            </span>
            {item.amountAvailable > 1 ? "disponíveis" : "disponível"}
          </p>
        </div>
        <div>
          <span>Código</span>
          <p>{item.itemCode}</p>
        </div>
        <div>
          <span>Localização</span>
          <p>{getItemLocationInfo()}</p>
        </div>
      </div>
    </section>
  );
}
