import { useEffect, useState } from "react";
import { ItemRequest } from "../../@types/entities";
import { api } from "../../services/api";

import { ItemRequestCard } from "../../components/ItemRequestCard";

import styles from "./styles.module.scss";
import { ItemRequestDetailsCard } from "../../components/ItemRequestDetailsCard";

export default function ItemRequestsPage() {
  const [requests, setRequests] = useState<ItemRequest[]>([]);
  const [requestFocused, setRequestFocused] = useState<ItemRequest>(
    {} as ItemRequest
  );

  useEffect(() => {
    async function fetchItemRequests() {
      const response = await api.get<ItemRequest[]>("/item-requests");
      const data = response.data;

      const formatedData = data.map<ItemRequest>((item) => {
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

    if (requestFocused.id === request?.id) {
      setRequestFocused({} as ItemRequest);
      return;
    }
    setRequestFocused(request!);
  }

  const hasRequestFocused = Object.keys(requestFocused).length !== 0;
  const focusedSectionClass = hasRequestFocused ? styles.shrink : "";

  return (
    <main className={styles.grid}>
      <section className={`${styles.requestsSection} ${focusedSectionClass}`}>
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

      {hasRequestFocused ? (
        <section>
          <ItemRequestDetailsCard itemRequest={requestFocused} />
        </section>
      ) : null}
    </main>
  );
}
