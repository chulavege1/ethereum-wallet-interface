import React, { useContext } from "react";
import { Web3_wallet_context } from "~CONTEXT/web3-wallet";
import Route_nav from "~UI/route";
import { initWeb3 } from "~APISERVICES/web3-provider";
import "./header.sass";

const Header = () => {
  const { setProvider, activeAddress, setActiveAddress } =
    useContext(Web3_wallet_context)!;

  return (
    <>
      <header>
        <Route_nav />
        {!activeAddress ? (
          <button onClick={() => initWeb3(setProvider, setActiveAddress)}>
            Connect Wallet
          </button>
        ) : (
          <div>
            <p>{activeAddress}</p>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
