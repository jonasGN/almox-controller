import { useParams } from "react-router-dom";
import { OptionButton } from "../../components/Buttons";
import { DeleteIcon, EditIcon } from "../../components/Icons";

import { PageTitle } from "../../components/PageTitle";

import styles from "./styles.module.scss";

export const ItemDetailsPage = (): JSX.Element => {
  const params = useParams();

  return (
    <>
      <div className={styles.headerContainer}>
        <PageTitle title="Detalhes do item" />

        <div className={styles.actionsContainer}>
          <OptionButton icon={<DeleteIcon />} styleType="danger" />
          <OptionButton icon={<EditIcon />} />
        </div>
      </div>

      <div className={styles.contentContainer}></div>
    </>
  );
};
