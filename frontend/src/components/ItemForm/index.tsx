import type { ItemAddForm } from "@Types/form";
import { apiClient } from "@/services/apiClient";
import { convert } from "@/utils/converters";
import { useOverlayElement } from "@/hooks/element";

import { ItemFormBasicInformation } from "./ItemFormBasicInformation";
import { ItemFormController } from "./ItemFormController";
import { ItemFormImage } from "./ItemFormImage";
import { ItemFormLocation } from "./ItemFormLocation";

import styles from "./styles.module.scss";

interface ItemFormProps {}

// TODO: review this component
export const ItemForm = (props: ItemFormProps): JSX.Element => {
  const {} = props;

  const { isVisible, onOpenElement, onCloseElement } = useOverlayElement();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onOpenElement();

    const formData = new FormData(e.target as HTMLFormElement);
    // const entries = Object.fromEntries(formData.entries());

    const itemForm: ItemAddForm = {
      category: formData.get("category")?.toString() ?? "",
      column: formData.get("column")?.toString() ?? "",
      description: formData.get("description")?.toString() ?? "",
      hall: formData.get("hall")?.toString() ?? "",
      image: formData.get("image")?.toString() ?? "",
      name: formData.get("name")?.toString() ?? "",
      price: formData.get("price")?.toString() ?? "",
      quantity: formData.get("quantity")?.toString() ?? "",
      shelf: formData.get("shelf")?.toString() ?? "",
    };

    const item = convert.itemAddFormToItemPost(itemForm);

    console.log("FORM DATA:", item);

    await apiClient.post("api/items", item);

    onCloseElement();
  };

  const handleCancel = () => {
    console.log("CANCELANDO FORMULÁRIO...");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <ItemFormBasicInformation />
        <ItemFormController onCancelForm={handleCancel}>
          <ItemFormLocation />
          <ItemFormImage />
        </ItemFormController>
      </form>
    </>
  );
};
