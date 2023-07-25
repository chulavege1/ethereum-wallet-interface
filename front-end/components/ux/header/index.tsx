import React from "react";
import Route_nav from "~UI/route";
import "./header.sass";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useSwitchNetwork, useNetwork } from "wagmi";

const Header = () => {
  const { address, isConnected } = useAccount();
  const { open, close } = useWeb3Modal();
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address,
  });
  const { chains, switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();

  return (
    <header>
      <div className="left">
        {!isConnected && (
          <button onClick={isConnected ? close : open}>
            Connect to a wallet
          </button>
        )}
        <Route_nav />
      </div>

      <div className="right">
        <p>{address && address.slice(0, 3) + "..." + address.slice(-3)}</p>
        {chain && <div>Connected {chain.name}</div>}
        {chains.map((x) => (
          <button
            disabled={!switchNetwork || x.id === chain?.id}
            key={x.id}
            onClick={() => switchNetwork?.(x.id)}
          >
            {x.name}
          </button>
        ))}
        {!isBalanceLoading && balance && (
          <div>
            <p>
              {chain.nativeCurrency.name}: {balance.formatted.slice(0, 6)}
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
