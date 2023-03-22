import { useState, useEffect } from "react";

const localCache = [];

export default function useTagsList(product) {
  const [tagsList, setTagsList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!product) {
      setTagsList([]);
    } else if (localCache[product]) {
      setTagsList(localCache[product]);
    } else {
      requestTagsList();
    }

    async function requestTagsList() {
      setTagsList([]);
      setStatus("loading");

      const res = await fetch(`https://api.noroff.dev/api/v1/online-shop`);
      const json = await res.json();
      localCache[product] = json.id || [];
      setTagsList(localCache[product]);
      setStatus("loaded");
    }
  }, [product]);

  return [tagsList, status];
}
