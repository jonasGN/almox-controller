import { useEffect, useState } from "react";
import { ItemRequest } from "../../@types/entities";
import { fetchItemRequests } from "../../repositories/itemsRequests";

import { ItemRequestCard } from "../../components/ItemRequestCard";
import { PageHeader } from "../../components/PageHeader";
import { Loading } from "../../components/Loading";

import styles from "./styles.module.scss";

export const ItemsRequestsPage = (): JSX.Element => {
  const [itemsRequests, setItemsRequests] = useState<ItemRequest[]>([]);

  useEffect(() => {
    fetchItemRequests().then((data) => setItemsRequests(data));
  }, []);

  if (itemsRequests.length === 0) return <Loading />;

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
