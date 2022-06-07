import { Item } from "../../@types/entities";
import { toCurrency } from "../../utils/formatters";

import { IconButton } from "../IconButton";
import { ItemUnavailableFeedback } from "../ItemUnavailableFeedback";

import closeIcon from "/icons/close.svg";
import editIcon from "/icons/edit.svg";

import styles from "./styles.module.scss";
import { TitleTile } from "../TitleTile";

interface ItemDetailsCardProps {
  item: Item;
  onRequestClose: () => void;
}

export function ItemDetailsCard({ item, ...props }: ItemDetailsCardProps) {
  const getItemLocationInfo = (): string => {
    const hall = item.location?.hall;
    const shelf = item.location?.shelf;
    const block = item.location?.block;

    return `C${hall} | P${shelf} | B${block}`;
  };

  return (
    <div className={`${styles.itemDetailsCard} `}>
      <header>
        <IconButton icon={closeIcon} onClick={props.onRequestClose} />
        <TitleTile title="Detalhes do item" />
        <IconButton icon={editIcon} onClick={() => {}} />
      </header>
      <div className={styles.image}>
        <img src={item.image} alt={item.name} />
        {item.amountAvailable > 1 ? null : <ItemUnavailableFeedback />}
      </div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <span className={styles.price}>{toCurrency(item.unitPrice)}</span>
      <div className={styles.otherInfos}>
        <div>
          <span>Quantidade</span>
          <strong>
            <span className={styles.amountAvailable}>
              {`${item.amountAvailable} `}
            </span>
            {item.amountAvailable > 1 ? "disponíveis" : "disponível"}
          </strong>
        </div>
        <div>
          <span>Código</span>
          <strong>{item.itemCode}</strong>
        </div>
        <div>
          <span>Localização</span>
          <strong>{getItemLocationInfo()}</strong>
        </div>
      </div>
    </div>
  );
}
