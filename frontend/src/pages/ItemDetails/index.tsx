import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../@types/entities";
import { fetchItemById } from "../../repositories/items";
import { ModalProvider, useModal } from "../../contexts/ModalContext";

import { OptionButton } from "../../components/Buttons";
import { DeleteIcon, EditIcon } from "../../components/Icons";
import { PageTitle } from "../../components/PageTitle";
import { SimpleInformationTile } from "../../components/SimpleInformationTile";
import { AlertDialog } from "../../components/Modals";
import { ImageGalery } from "./ImageGalery";
import { InformationSection } from "./InformationSection";

import styles from "./styles.module.scss";

export const ItemDetailsPage = (): JSX.Element => {
  const [item, setItem] = useState<Item>({} as Item);

  const params = useParams();

  const { isOpen, modalRef, onCloseModal, onOpenModal } = useModal();

  useEffect(() => {
    fetchItemById(Number(params.itemId)).then((data) => setItem(data));
  }, []);

  return (
    <>
      <div className={styles.headerContainer}>
        <PageTitle title="Detalhes do item" />

        <div className={styles.actionsContainer}>
          <OptionButton icon={<DeleteIcon />} styleType="danger" onClick={onOpenModal} />
          <OptionButton icon={<EditIcon />} />
        </div>
      </div>

      <div className={styles.contentContainer}>
        <ModalProvider>
          <ImageGalery image={""} className={styles.galery} />
        </ModalProvider>

        <section className={styles.details}>
          <span>CÓDIGO: {item.code}</span>
          <h2>{item.name}</h2>
          <p>{item.description}</p>

          <SimpleInformationTile
            title="Preço"
            info={item.priceFormatted}
            className={styles.price}
          />

          <InformationSection title="Informações">
            <SimpleInformationTile title="Quantidade" info={item.amountFormatted} />
            <SimpleInformationTile title="Categoria" info={item.category} />
            <SimpleInformationTile
              title="Disponibilidade"
              info={item.isAvailable ? "Disponível" : "Indisponível"}
            />
          </InformationSection>

          <InformationSection title="Localização">
            <SimpleInformationTile title="Corredor" info={item.location?.hall} />
            <SimpleInformationTile title="Prateleira" info={item.location?.shelf} />
            <SimpleInformationTile title="Coluna" info={item.location?.column} />
          </InformationSection>
        </section>
      </div>

      <AlertDialog
        modalRef={modalRef}
        title="Excluir item"
        description="Ao confirmar essa operação, o item será excluído da base de dados permanentemente. Tem certeza que deseja continuar?"
        icon={<DeleteIcon />}
        isOpen={isOpen}
        onCloseModal={onCloseModal}
        leftTitle="Excluir"
        rightTitle="Cancelar"
        leftButtonStyle="danger"
        rightButtonStyle="cancel"
        onClickLeft={() => console.log("EXCLUIR ITEM")}
      />
    </>
  );
};
