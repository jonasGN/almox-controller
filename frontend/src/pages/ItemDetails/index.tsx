import { useParams } from "react-router-dom";
import { ItemResponse } from "../../@types/responses";
import { useOverlayElement } from "../../hooks/element";
import { useFetchData } from "../../hooks/common";
import { isObjectEmpty } from "../../utils/common";
import { itemResponseToItem } from "../../utils/converters";

import { OptionButton } from "../../components/Buttons";
import { DeleteIcon, EditIcon } from "../../components/Icons";
import { SimpleInformationTile } from "../../components/SimpleInformationTile";
import { AlertDialog } from "../../components/Modals";
import { PageHeader } from "../../components/PageHeader";
import { ImageGalery } from "./ImageGalery";
import { InformationSection } from "./InformationSection";
import { ContentWrapper } from "../../layout";

import styles from "./styles.module.scss";

export const ItemDetailsPage = (): JSX.Element => {
  const params = useParams();
  const { isVisible, elementRef, onOpenElement, onCloseElement } = useOverlayElement();

  const { content, hasError } = useFetchData<ItemResponse>({
    url: `/api/items/${params.itemId}`,
    key: "item",
    initialContentValue: {} as ItemResponse,
  });

  const itemFormatted = itemResponseToItem(content);

  return (
    <>
      <PageHeader title="Detalhes do item">
        <OptionButton icon={<DeleteIcon />} styleType="danger" onClick={onOpenElement} />
        <OptionButton icon={<EditIcon />} />
      </PageHeader>

      <ContentWrapper isLoading={isObjectEmpty(content)} hasError={hasError}>
        <div className={styles.contentContainer}>
          <ImageGalery image={""} className={styles.galery} />

          <section className={styles.details}>
            <span>CÓDIGO: {itemFormatted.code}</span>
            <h2>{itemFormatted.name}</h2>
            <p>{itemFormatted.description}</p>

            <SimpleInformationTile
              title="Preço"
              info={itemFormatted.priceFormatted}
              className={styles.price}
            />

            <InformationSection title="Informações">
              <SimpleInformationTile
                title="Quantidade"
                info={itemFormatted.amountFormatted}
              />
              <SimpleInformationTile title="Categoria" info={itemFormatted.category} />
              <SimpleInformationTile
                title="Disponibilidade"
                info={itemFormatted.isAvailable ? "Disponível" : "Indisponível"}
              />
            </InformationSection>

            <InformationSection title="Localização">
              <SimpleInformationTile
                title="Corredor"
                info={itemFormatted.location?.hall}
              />
              <SimpleInformationTile
                title="Prateleira"
                info={itemFormatted.location?.shelf}
              />
              <SimpleInformationTile
                title="Coluna"
                info={itemFormatted.location?.column}
              />
            </InformationSection>
          </section>
        </div>
      </ContentWrapper>

      <AlertDialog
        modalRef={elementRef}
        isOpen={isVisible}
        onCloseModal={onCloseElement}
        icon={<DeleteIcon />}
        title="Excluir item"
        description="Ao confirmar essa operação, o item será excluído da base de dados permanentemente. Tem certeza que deseja continuar?"
        leftTitle="Excluir"
        onClickLeft={() => console.log("EXCLUIR ITEM")}
      />
    </>
  );
};
