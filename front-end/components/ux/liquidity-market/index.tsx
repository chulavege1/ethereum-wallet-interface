import React, { useContext, useState } from "react";
import { Pool_data_context } from "~CONTEXT/pool-data";
import "./liquidity_market.sass";

const Liquidity_market: React.FC = () => {
  const { data } = useContext(Pool_data_context);
  const [sortField, setSortField] = useState<keyof Coin>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortedData = [...data.coins].sort((a, b) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];
    let comparison = 0;
    if (fieldA > fieldB) {
      comparison = 1;
    } else if (fieldA < fieldB) {
      comparison = -1;
    }
    return sortDirection === "asc" ? comparison : comparison * -1;
  });

  return (
    <div className="Liquidity_market">
      <div>
        <button onClick={() => setSortField("name")}>Name</button>
        <button onClick={() => setSortField("current_price")}>
          Current Price
        </button>
        <button onClick={() => setSortField("rank")}>Rank</button>
        <button onClick={() => setSortField("priceChange")}>
          Price Change
        </button>
        <button onClick={() => setSortField("highPrice")}>High Price</button>
        <button onClick={() => setSortField("lowPrice")}>Low Price</button>
      </div>
      <div>
        {sortedData.map((coin) => (
          <div key={coin.id}>
            <div>
              <img src={coin.image} alt={coin.name} />
              <h2>{coin.name}</h2>
            </div>

            <div>
              <p>{coin.current_price.toFixed(2)}</p>
            </div>
            <div>
              <p>{coin.rank}</p>
            </div>

            <div>
              <p>{coin.priceChange.toFixed(2)}</p>
            </div>

            <div>
              <p>{coin.highPrice.toFixed(2)}</p>
            </div>

            <div>
              <p>{coin.lowPrice.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Liquidity_market;
