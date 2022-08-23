import { useEffect, useState } from "react";
import { ItemsRequests } from "../../@types/entities";
import { fetchItemsRequests } from "../../repositories/itemsRequests";

import { ItemRequestCard } from "../../components/ItemRequestCard";
import { PageHeader } from "../../components/PageHeader";

import styles from "./styles.module.scss";

export const ItemsRequestsPage = (): JSX.Element => {
  const [itemsRequests, setItemsRequests] = useState<ItemsRequests[]>([]);

  useEffect(() => {
    fetchItemsRequests().then((data) => setItemsRequests(data));
  }, []);

  return (
    <>
      <PageHeader title="Solicitações" />

      <div className={styles.content}>
        {itemsRequests.map((item) => (
          <ItemRequestCard key={item.id} itemRequest={item} />
        ))}
      </div>
    </>
  );
};
