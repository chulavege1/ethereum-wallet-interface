import React from "react";
import Route_nav from "~UI/route";
import "./header.sass";
import {
  useAccount,
  useBalance,
  useSwitchNetwork,
  useNetwork,
  useConnect,
  useDisconnect,
} from "wagmi";
import { Connector } from "@wagmi/core";

const Header = () => {
  const { address } = useAccount();
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address,
  });
  const { chains, switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect({});

  const handleConnect = (connector: Connector) => {
    connect({ connector });
  };

  return (
    <header>
      <div className="left">
        {!address &&
          connectors.map((connector) => (
            <button key={connector.id} onClick={() => handleConnect(connector)}>
              {connector.name}
              {isLoading &&
                pendingConnector?.id === connector.id &&
                " (connecting)"}
            </button>
          ))}
        <Route_nav />
        {address && (
          <button onClick={() => disconnect()} disabled={isLoading}>
            Disconnect
          </button>
        )}
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
      {error && <div>{error.message}</div>}
      {isLoading && <div>Connecting...</div>}
    </header>
  );
};

export default Header;
