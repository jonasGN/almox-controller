import { useState } from "react";
import { Item } from "../../@types/entities";
import { FormField } from "../FormField";
import { TitleTile } from "../TitleTile";
import { UploadImageBox } from "../UploadImageBox";
import { FormHeader } from "./FormHeader";

import styles from "./styles.module.scss";

interface FieldsConfig {
  labels?: {
    amount?: string;
  };
}

type ButtonEventHandler = React.MouseEventHandler<HTMLButtonElement>;
// type ButtonEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface ItemFormProps {
  config?: FieldsConfig;
  onSaveItem: (item: Item) => void;
  onDeleteItem?: ButtonEventHandler;
}

export function ItemForm(props: ItemFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [hall, setHall] = useState("");
  const [shelf, setShelf] = useState("");
  const [column, setColumn] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const item: Item = {
    name,
    description,
    unitPrice: price,
    amountAvailable: amount,
    category,
    image,
    location: { hall, shelf, column },
  };

  function isFormValid(): boolean {
    if (name && description && category) return false;
    if (price > 0) return false;
    if (hall && shelf && column) return false;
    if (image) return false;
    return true;
  }

  function handleOnlyNumbers(event: ChangeEvent, callback: (value: any) => void) {
    const { value } = event.target;
    if (value.match(/^[0-9]*$/)) callback(value);
  }

  function handleOnChangePrice(event: ChangeEvent) {
    handleOnlyNumbers(event, (value) => setPrice(Number(value)));
  }

  function handleOnChangeAmount(event: ChangeEvent) {
    handleOnlyNumbers(event, (value) => setAmount(Number(value)));
  }

  function handleSaveItem(item: Item): void {
    // save item on db
  }

  function handleDeleteItem(item: Item): void {
    // delete item from fb
  }

  return (
    <form className={styles.form}>
      <FormHeader
        onSaveItem={() => handleSaveItem(item)}
        onDeleteItem={() => handleDeleteItem(item)}
        disableSave={isFormValid()}
        disableDelete={isFormValid()}
      />
      <div>
        <FormField
          name="name"
          label="Nome"
          placeholder="Nome simplificado"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormField
          name="description"
          label="Descrição"
          placeholder="Uma simples descrição a respeito do item"
          useTextArea
          maxLength={150}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className={styles.spliter}>
          <FormField
            name="price"
            label="Preço"
            placeholder="0,00"
            prefix="R$"
            value={price}
            onChange={handleOnChangePrice}
          />
          <FormField
            name="amount"
            type="number"
            label={props.config?.labels?.amount ?? "Quant. Inicial"}
            placeholder="00"
            prefix="uni"
            value={amount}
            onChange={handleOnChangeAmount}
          />
        </div>
        <TitleTile title="Localização" />
        <div className={styles.spliter}>
          <FormField
            name="hall"
            label="Corredor"
            placeholder="00"
            value={hall}
            onChange={(e) => setHall(e.target.value)}
          />
          <FormField
            name="shelf"
            label="Prateleira"
            placeholder="00"
            value={shelf}
            onChange={(e) => setShelf(e.target.value)}
          />
          <FormField
            name="column"
            label="Coluna"
            placeholder="00"
            value={column}
            onChange={(e) => setColumn(e.target.value)}
          />
        </div>
      </div>

      <div>
        <FormField
          name="category"
          label="Categoria"
          placeholder="Uma simples descrição a respeito do item"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <UploadImageBox />
      </div>
    </form>
  );
}
