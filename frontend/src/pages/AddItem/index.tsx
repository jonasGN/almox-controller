import type { Category } from "@Types/entities";

import { apiClient } from "@/services/apiClient";
import { apiConvert } from "@/utils/converters/api";
import { useNavigate } from "@/wrappers/navigation";
import { formatter } from "@/utils/formatters";

import { ElementSpliter } from "@/layout";
import { PageHeader } from "@/components/PageHeader";
import { ItemForm, FormGroup } from "@/components/ItemForm";
import { SelectionItem } from "@/components/Inputs/MultiSelectionInput";
import {
  ImageInput,
  MultiSelectionInput,
  TextArea,
  TextField,
} from "@/components/Inputs";

import styles from "./styles.module.scss";

const categoryToSelectionItem = (cat: Category): SelectionItem => {
  const itemSubtitle = cat.itemsAmount > 1 ? "itens" : "item";
  const item: SelectionItem = {
    id: cat.id.toString(),
    title: cat.name,
    subtitle: `${formatter.leadingZeroOn(cat.itemsAmount)} ${itemSubtitle}`,
    value: cat.name,
  };
  return item;
};

const categories: SelectionItem[] = [...Array<SelectionItem>(4)].map((_, index) => ({
  id: (index + 1).toString(),
  title: `Categoria ${index + 1}`,
  subtitle: "99 items",
  value: `Categoria valor ${index + 1}`,
}));

export const AddItemPage = (): JSX.Element => {
  const navigate = useNavigate();

  const handleSaveItem = async (formData: FormData) => {
    const item = apiConvert.formDataToItemPost(formData);
    // apiClient.post("/items", item);
    console.log(item);
  };

  const handleCancel = () => {
    // TODO: send user to home when the previous route is not
    // inside the application
    navigate(-1);
  };

  return (
    <>
      <PageHeader title="Novo item" />

      <ItemForm onClickSave={handleSaveItem} onClickCancel={handleCancel}>
        <FormGroup
          sectionId="basic-info"
          title="Informações básicas"
          subtitle="Informações principais do item"
        >
          <TextField
            name="name"
            label="Nome"
            required
            defaultValue="Produto de teste"
            // pattern="^[A-Za-z0-9]{3,40}$"
          />
          <TextArea
            name="description"
            label="Descrição"
            required
            maxLength={150}
            defaultValue="Um simples produto de teste "
          />

          <ElementSpliter>
            <TextField
              name="price"
              label="Preço"
              prefix="R$"
              type="number"
              required
              defaultValue="99"
              // pattern="^[0-9]"
            />
            <TextField
              name="quantity"
              label="Quant. inicial"
              prefix="uni"
              type="number"
              defaultValue="9"
              // pattern="^[0-9]"
            />
          </ElementSpliter>

          <MultiSelectionInput
            name="category"
            label="Categoria"
            required
            items={categories}
            isLoading={false}
          />
        </FormGroup>

        <FormGroup
          sectionId="location"
          title="Localização"
          subtitle="Informe onde o item estará localizado no almoxarifado"
        >
          <ElementSpliter>
            <TextField name="hall" label="Corredor" required defaultValue="CORR02" />
            <TextField name="shelf" label="Prateleira" required defaultValue="PRAT02" />
          </ElementSpliter>

          <ElementSpliter>
            <TextField name="column" label="Coluna" required defaultValue="COLU02" />
          </ElementSpliter>
        </FormGroup>

        <FormGroup
          sectionId="image"
          title="Imagem"
          subtitle="A imagem do item deve ser ajustável a disferentes tamanhos"
        >
          <ImageInput name="image" required />
        </FormGroup>
      </ItemForm>
    </>
  );
};
