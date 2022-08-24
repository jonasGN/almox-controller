import { useModal } from "../../hooks";

import { Avatar } from "../../components/Avatar";
import { SplitButton } from "../../components/Buttons";
import { AlertDialog } from "../../components/Modals";
import { PageHeader } from "../../components/PageHeader";
import { WarningIcon } from "../../components/Icons";
import { InfoTile } from "./InfoTile";
import { ItemRequestDetailsSection } from "./ItemRequestDetailsSection";

import styles from "./styles.module.scss";

export const ItemRequestDetailsPage = () => {
  const { isOpen, modalRef, onCloseModal, onOpenModal } = useModal();

  return (
    <>
      <PageHeader title="Detalhes da solicitação" />

      <div className={styles.content}>
        <ItemRequestDetailsSection title="Informações" className={styles.info}>
          <ul className={styles.list}>
            <InfoTile title="Código do item" info="8899776622" highlightInfo />
            <InfoTile title="Nome do item" info="Nome do item completo" />
            <InfoTile
              title="Motivação da solicitação"
              info="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <InfoTile title="Data da solicitação" info="10 de agosto de 2022" />
          </ul>

          <div className={styles.actionContainer}>
            <SplitButton
              leftTitle="Recusar"
              rightTitle="Aceitar"
              leftButtonStyle="danger"
              rightButtonStyle="confirm"
              onClickLeft={onOpenModal}
            />
          </div>
        </ItemRequestDetailsSection>

        <ItemRequestDetailsSection title="Solicitado por" className={styles.user}>
          <ul className={styles.list}>
            <InfoTile title="Nome" info="Ana Teixeira">
              <Avatar userName="Ana Teixeira" userImage="" radius="square" />
            </InfoTile>
            <InfoTile title="Código do usuário" info="987654321" />
          </ul>
        </ItemRequestDetailsSection>
      </div>

      <AlertDialog
        ref={modalRef}
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        icon={<WarningIcon />}
        title="Recusar solicitação"
        description="Ao recusar essa solicitação, a mesma não poderá ser visualizada novamente. Tem certeza que deseja recusá-la?"
        leftTitle="Recusar"
      />
    </>
  );
};
