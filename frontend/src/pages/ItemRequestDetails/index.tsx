import { useParams } from "react-router-dom";
import { ItemRequestResponse } from "../../@types/responses";
import { useOverlayElement } from "../../hooks/element";
import { useLoadItem } from "../../hooks/common";
import { isObjectEmpty } from "../../utils/common";
import { itemRequestResponseToItemRequest } from "../../utils/converters";

import { Avatar } from "../../components/Avatar";
import { SplitButton } from "../../components/Buttons";
import { AlertDialog } from "../../components/Modals";
import { PageHeader } from "../../components/PageHeader";
import { WarningIcon } from "../../components/Icons";
import { ContentWrapper } from "../../layout";
import { InfoTile } from "./InfoTile";
import { ItemRequestDetailsSection } from "./ItemRequestDetailsSection";

import styles from "./styles.module.scss";

export const ItemRequestDetailsPage = () => {
  const params = useParams();
  const { isVisible, elementRef, onOpenElement, onCloseElement } = useOverlayElement();

  const { item, hasError } = useLoadItem<ItemRequestResponse>({
    url: `/api/items/requests/${params.requestId}`,
    key: "itemRequest",
  });

  if (isObjectEmpty(item)) return <span>WTF</span>;

  const request = itemRequestResponseToItemRequest(item, { dateFormat: "long" });

  return (
    <>
      <PageHeader title="Detalhes da solicitação" />

      <ContentWrapper isLoading={isObjectEmpty(item)} hasError={hasError}>
        <div className={styles.content}>
          <ItemRequestDetailsSection title="Informações" className={styles.info}>
            <ul className={styles.list}>
              <InfoTile title="Código do item" info={request.item?.code} highlightInfo />
              <InfoTile title="Nome do item" info={request.item?.name} />
              <InfoTile title="Motivo da solicitação" info={request.item?.message} />
              <InfoTile title="Data da solicitação" info={request.requestedAtFormatted} />
            </ul>

            <div className={styles.actionContainer}>
              <SplitButton
                leftTitle="Recusar"
                rightTitle="Aceitar"
                leftButtonStyle="danger"
                rightButtonStyle="confirm"
                onClickLeft={onOpenElement}
              />
            </div>
          </ItemRequestDetailsSection>

          <ItemRequestDetailsSection title="Solicitado por" className={styles.user}>
            <ul className={styles.list}>
              <InfoTile title="Nome" info={request.user?.name}>
                <Avatar
                  userName={request.user?.name ?? "asas"}
                  userImage={request.user?.avatar}
                  radius="square"
                />
              </InfoTile>
              <InfoTile title="Código do usuário" info={request.user?.companyCode} />
            </ul>
          </ItemRequestDetailsSection>
        </div>
      </ContentWrapper>

      <AlertDialog
        modalRef={elementRef}
        isOpen={isVisible}
        onCloseModal={onCloseElement}
        icon={<WarningIcon />}
        title="Recusar solicitação"
        description="Ao recusar essa solicitação, a mesma não poderá ser visualizada novamente. Tem certeza que deseja recusá-la?"
        leftTitle="Recusar"
      />
    </>
  );
};
