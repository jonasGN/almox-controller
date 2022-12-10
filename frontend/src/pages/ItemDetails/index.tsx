import type { ItemResponse } from "@Types/responses";
import { useParams } from "@/wrappers/navigation";
import { useOverlayElement } from "@/hooks/element";
import { useFetchData } from "@/hooks/common";
import { convert } from "@/utils/converters";

import { ImageGalery } from "./ImageGalery";
import { InformationSection } from "./InformationSection";
import { OptionButton, SecondaryButton } from "@/components/Buttons";
import { SimpleInformationTile } from "@/components/SimpleInformationTile";
import { Dialog } from "@/components/Modals";
import { PageHeader } from "@/components/PageHeader";
import { ContentHelper } from "@/components/ContentHelper";
import { SplitButtonContainer } from "@/layout";

import styles from "./styles.module.scss";
import { UnavailableChip } from "@/components/UnavailableChip";

export const ItemDetailsPage = (): JSX.Element => {
  const params = useParams();
  const { isVisible, elementRef, onOpenElement, onCloseElement } = useOverlayElement();

  const itemId = params.itemId!;

  const { content, hasError, isLoading } = useFetchData<ItemResponse>(
    `/api/items/${itemId}`
  );

  if (isLoading || hasError) {
    return <ContentHelper isLoading={isLoading} hasError={hasError} />;
  }

  const itemFormatted = convert.itemResponseToItem(content!);

  return (
    <>
      <PageHeader title="Detalhes do item">
        <OptionButton icon="edit" />
        <OptionButton icon="delete" styleType="danger" onClick={onOpenElement} />
      </PageHeader>

      <div className={styles.contentContainer}>
        <ImageGalery image={itemFormatted.image} className={styles.galery} />

        <section className={styles.details}>
          <span className={styles.code}>CÓDIGO: {itemFormatted.code}</span>
          <h2>{itemFormatted.name}</h2>
          <UnavailableChip isUnavailable={!itemFormatted.isAvailable} type="huge" />
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
          </InformationSection>

          <InformationSection title="Localização">
            <SimpleInformationTile title="Corredor" info={itemFormatted.location?.hall} />
            <SimpleInformationTile
              title="Prateleira"
              info={itemFormatted.location?.shelf}
            />
            <SimpleInformationTile title="Coluna" info={itemFormatted.location?.column} />
          </InformationSection>
        </section>
      </div>

      <Dialog
        ref={elementRef}
        isOpen={isVisible}
        onCloseModal={onCloseElement}
        icon="delete"
        title="Excluir item"
        description="Ao confirmar essa operação, o item será excluído da base de dados permanentemente. Tem certeza que deseja continuar?"
      >
        <SplitButtonContainer>
          <SecondaryButton title="Excluir" type="danger" />
          <SecondaryButton title="Cancelar" type="indiferent" />
        </SplitButtonContainer>
      </Dialog>
    </>
  );
};
