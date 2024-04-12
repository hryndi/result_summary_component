import { useState, useEffect } from "react";

type dataObj = {
  category: string;
  score: number;
  icon: string;
};

export const useApp = () => {
  const [listData, setListData] = useState<Array<dataObj>>([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("./data/data.json")
        .then((res) => res.json())
        .then((data) => setListData(data))
        .catch((err) => console.error(err));
    }

    fetchData();
  }, []);

  return { listData };
};
