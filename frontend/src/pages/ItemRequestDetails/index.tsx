import type { ItemRequestResponse } from "@Types/responses";
import { useParams } from "@/wrappers/navigation";
import { useOverlayElement } from "@/hooks/element";
import { useFetchData } from "@/hooks/common";
import { convert } from "@/utils/converters";

import { InfoTile } from "./InfoTile";
import { ItemRequestDetailsSection } from "./ItemRequestDetailsSection";
import { Avatar } from "@/components/Avatar";
import { SecondaryButton } from "@/components/Buttons";
import { Dialog } from "@/components/Modals";
import { PageHeader } from "@/components/PageHeader";
import { ContentHelper } from "@/components/ContentHelper";
import { SplitButtonContainer } from "@/layout";

import styles from "./styles.module.scss";

export const ItemRequestDetailsPage = () => {
  const params = useParams();
  const { isVisible, elementRef, onOpenElement, onCloseElement } = useOverlayElement();

  const requestId = params.requestId!;
  const { content, hasError, isLoading } = useFetchData<ItemRequestResponse>(
    `/api/items/requests/${requestId}`
  );

  if (isLoading || hasError) {
    return <ContentHelper isLoading={isLoading} hasError={hasError} />;
  }

  const request = convert.itemRequestResponseToItemRequest(content!, {
    dateFormat: "long",
  });

  return (
    <>
      <PageHeader title="Detalhes da solicitação" />

      <div className={styles.content}>
        <ItemRequestDetailsSection title="Informações" className={styles.info}>
          <ul className={styles.list}>
            <InfoTile title="Código do item" info={request.item?.code} highlightInfo />
            <InfoTile title="Nome do item" info={request.item?.name} />
            <InfoTile title="Motivo da solicitação" info={request.item?.message} />
            <InfoTile title="Data da solicitação" info={request.requestedAtFormatted} />
          </ul>

          <SplitButtonContainer className={styles.actionContainer}>
            <SecondaryButton title="Recusar" type="danger" onClick={onOpenElement} />
            <SecondaryButton title="Aceitar" />
          </SplitButtonContainer>
        </ItemRequestDetailsSection>

        <ItemRequestDetailsSection title="Solicitado por" className={styles.user}>
          <ul className={styles.list}>
            <InfoTile title="Nome" info={request.user?.name}>
              <Avatar
                userName={request.user?.name}
                userImage={request.user?.avatar}
                radius="square"
              />
            </InfoTile>
            <InfoTile title="Código do usuário" info={request.user?.companyCode} />
          </ul>
        </ItemRequestDetailsSection>
      </div>

      <Dialog
        ref={elementRef}
        isOpen={isVisible}
        onCloseModal={onCloseElement}
        icon="warning"
        title="Recusar solicitação"
        description="Ao recusar essa solicitação, a mesma não poderá ser visualizada novamente. Tem certeza que deseja recusá-la?"
      >
        <SplitButtonContainer>
          <SecondaryButton title="Recusar" type="danger" />
          <SecondaryButton title="Cancelar" type="indiferent" />
        </SplitButtonContainer>
      </Dialog>
    </>
  );
};
