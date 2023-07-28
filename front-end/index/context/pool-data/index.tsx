import React, { createContext, useContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { useAccount, useNetwork } from "wagmi";
import { NETWORKS } from "~CONFIGS/available-networks";

import LENDING_POOL_ADDRESS_PROVIDER from "~ABI/pool_addresses_provider.json";

const LP_ADDRESS_PROVIDER_ABI = LENDING_POOL_ADDRESS_PROVIDER;

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function balanceOf(address) view returns (uint)",
];

interface Balance {
  name: string;
  symbol: string;
  balance: string;
}

interface BalanceContextProps {
  tokenAddresses: string[];
  balances: Balance[];
}

const BalanceContext = createContext<BalanceContextProps>({
  tokenAddresses: [],
  balances: [],
});

export const useBalanceContext = () => useContext(BalanceContext);

export const Pool_data_provider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  console.log("address", address);

  const [tokenAddresses, setTokenAddresses] = useState<string[]>([]);
  const [balances, setBalances] = useState<Balance[]>([]);

  useEffect(() => {
    if (!address) {
      return;
    }

    const currentNetwork = NETWORKS[chain.name as keyof typeof NETWORKS];
    console.log("currentNetwork", currentNetwork);
    if (!currentNetwork) {
      console.error(`Network ${chain.name} not found in networks object`);
      return;
    }

    const provider = new ethers.JsonRpcProvider(currentNetwork.providerURL);
    const lpAddressProviderContract = new ethers.Contract(
      currentNetwork.lpAddressProvider,
      LP_ADDRESS_PROVIDER_ABI,
      provider,
    );

    lpAddressProviderContract.getReservesList().then(async (addresses) => {
      const formattedAddresses: string[] = Array.from(addresses);
      const newBalances: Balance[] = [];

      for (let i = 0; i < formattedAddresses.length; i++) {
        try {
          const tokenAddress = formattedAddresses[i];
          if (!tokenAddress) {
            console.error(
              `Token address at index ${i} is invalid: ${tokenAddress}`,
            );
            continue;
          }

          const tokenContract = new ethers.Contract(
            tokenAddress,
            ERC20_ABI,
            provider,
          );
          const name = await tokenContract.name();
          const symbol = await tokenContract.symbol();
          const balance = await tokenContract.balanceOf(address);

          newBalances.push({
            name: name,
            symbol: symbol,
            balance: ethers.formatUnits(balance, 18),
          });
        } catch (error) {
          console.error(`Failed to get info for token at index ${i}: ${error}`);
        }
      }

      setTokenAddresses(formattedAddresses);
      setBalances(newBalances);
    });
  }, [address, chain]);

  return (
    <BalanceContext.Provider value={{ tokenAddresses, balances }}>
      {children}
    </BalanceContext.Provider>
  );
};
