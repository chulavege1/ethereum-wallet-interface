import React, { useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import { useBalanceContext } from "~CONTEXT/pool-data";
import "./liquidity_market.sass";

type Balance = {
  name: string;
  balance: string;
};
type SortField = "name" | "balance";
type SortDirection = "asc" | "desc";

const Liquidity_market: React.FC = () => {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();

  const { tokenAddresses, balances } = useBalanceContext();

  const [sortField, setSortField] = useState<SortField>("name");
  const [lastSortField, setLastSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (balances.length > 0) {
      setIsLoading(false);
    }
  }, [balances]);

  const handleSortClick = (field: SortField) => {
    if (lastSortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
      setLastSortField(field);
    }
  };

  const sortedData = [...balances].sort((a: Balance, b: Balance) => {
    const fieldA = a[sortField];
    const fieldB = b[sortField];
    let comparison = 0;
    if (fieldA > fieldB) {
      comparison = 1;
    } else if (fieldA < fieldB) {
      comparison = -1;
    }
    return sortField === "balance" ? comparison * -1 : comparison;
  });

  if (!isConnected) {
    return <div className="isLoadPool">To continue connect your wallet</div>;
  }

  if (isLoading) {
    return (
      <div className="isLoadPool">
        {chain.id === 1 || chain.id === 137
          ? "Loading pool data..."
          : "Connect to polygon or ethereum net"}
      </div>
    );
  }

  return (
    <div className="Liquidity_market">
      <div>
        <button onClick={() => handleSortClick("name")}>Name</button>
        <button></button>
        <button onClick={() => handleSortClick("balance")}>Balance</button>
      </div>
      <div>
        {sortedData.map((balance, index) => (
          <div key={index}>
            <div>
              <h2>{balance.name}</h2>
            </div>
            <div>
              <p style={{ fontSize: "16px" }}>{tokenAddresses[index]}</p>
            </div>
            <div>
              <p>{balance.balance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Liquidity_market;
