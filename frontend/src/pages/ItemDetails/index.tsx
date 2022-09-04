import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../@types/entities";
import { fetchItemById } from "../../repositories/items";
import { useOverlayElement } from "../../hooks";
import { isObjectEmpty } from "../../utils/helpers";

import { OptionButton } from "../../components/Buttons";
import { DeleteIcon, EditIcon } from "../../components/Icons";
import { SimpleInformationTile } from "../../components/SimpleInformationTile";
import { AlertDialog } from "../../components/Modals";
import { PageHeader } from "../../components/PageHeader";
import { Loading } from "../../components/Loading";
import { ImageGalery } from "./ImageGalery";
import { InformationSection } from "./InformationSection";

import styles from "./styles.module.scss";

export const ItemDetailsPage = (): JSX.Element => {
  const [item, setItem] = useState<Item>({} as Item);

  const params = useParams();

  const { isVisible, elementRef, onOpenElement, onCloseElement } = useOverlayElement();

  useEffect(() => {
    fetchItemById(Number(params.itemId)).then((data) => setItem(data));
  }, []);

  if (isObjectEmpty(item)) return <Loading />;

  return (
    <>
      <PageHeader title="Detalhes do item">
        <OptionButton icon={<DeleteIcon />} styleType="danger" onClick={onOpenElement} />
        <OptionButton icon={<EditIcon />} />
      </PageHeader>

      <div className={styles.contentContainer}>
        <ImageGalery image={""} className={styles.galery} />

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
            <SimpleInformationTile title="Corredor" info={item.location.hall} />
            <SimpleInformationTile title="Prateleira" info={item.location.shelf} />
            <SimpleInformationTile title="Coluna" info={item.location.column} />
          </InformationSection>
        </section>
      </div>

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
