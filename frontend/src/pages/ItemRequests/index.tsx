import { useEffect, useState } from "react";
import { ItemRequest } from "../../@types/entities";
import { api } from "../../services/api";

import { ItemRequestCard } from "../../components/ItemRequestCard";
import { ItemRequestModal } from "../../components/ItemRequestModal";

import styles from "./styles.module.scss";

export function ItemRequestsPage() {
  const [requests, setRequests] = useState<ItemRequest[]>([]);
  const [requestFocused, setRequestFocused] = useState<ItemRequest>(
    {} as ItemRequest
  );

  useEffect(() => {
    async function fetchItemRequests() {
      const response = await api.get("/item-requests");
      const requests = response.data.itemRequests as ItemRequest[];

      const formatedData = requests.map<ItemRequest>((item) => {
        const requestedItem = {
          ...item.requestedItem,
          moment: new Date(item.requestedItem.moment),
        };
        return { ...item, requestedItem };
      });

      setRequests(formatedData);
    }

    fetchItemRequests();
  }, []);

  function handleOnFocusRequestItem(requestId: number) {
    const request = requests.find((item) => item.id === requestId);

    requestFocused.id === request?.id
      ? setRequestFocused({} as ItemRequest)
      : setRequestFocused(request!);
  }

  const hasRequestFocused = Object.keys(requestFocused).length !== 0;

  return (
    <main className={styles.grid}>
      <h1>Solicitações de itens</h1>
      <section className={styles.requestsSection}>
        {requests.map((item) => (
          <ItemRequestCard
            key={item.id}
            item={item}
            isFocused={requestFocused.id === item.id}
            onClick={() => {
              handleOnFocusRequestItem(item.id);
            }}
          />
        ))}
      </section>

      <ItemRequestModal
        isOpen={hasRequestFocused}
        itemRequested={requestFocused}
        onRequestClose={() => setRequestFocused({} as ItemRequest)}
      />
    </main>
  );
}
