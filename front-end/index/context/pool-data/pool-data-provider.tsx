import React, { useState } from "react";
import { Pool_data_context } from "./";
import { DataType } from "./pool-data.types";

export const Pool_data_provider: React.FC = ({ children }) => {
  const initialData: CoinType[] = Array.from({ length: 10 }, (_, i) => ({
    id: `coin${i}`,
    name: `Coin ${i}`,
    symbol: `COIN${i}`,
    image: `https://example.com/coin${i}.jpg`,
    current_price: Math.random() * 10000,
    market_cap: Math.random() * 1000000,
    total_volume: Math.random() * 1000000,
    rank: i + 1,
    priceChange: Math.random() * 100,
    highPrice: Math.random() * 10000,
    lowPrice: Math.random() * 10000,
  }));

  const [data, setData] = useState<DataType>({ coins: initialData });

  const updateData = (updatedData: Partial<DataType>) => {
    setData((prevState) => ({
      ...prevState,
      ...updatedData,
    }));
  };

  return (
    <Pool_data_context.Provider value={{ data, setData, updateData }}>
      {children}
    </Pool_data_context.Provider>
  );
};
