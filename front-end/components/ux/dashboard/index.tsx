import React, { useEffect, useState, useContext } from "react";
import { ethers } from "ethers";
import { Web3_wallet_context } from "~CONTEXT/web3-wallet";
import { changeNetwork } from "~APISERVICES/metemask-actions/change-network";
import "./Dashboard.sass";

export const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function balanceOf(address) view returns (uint)",
];

const Dashboard = () => {
  // Get provider and activeAddress from Web3_wallet_context
  const { provider, activeAddress } = useContext(Web3_wallet_context)!;
  const [tokenBalances, setTokenBalances] = useState({});

  // On component mount or when provider or activeAddress changes
  useEffect(() => {
    // If an activeAddress is present and the network is Goerli (chainId 5)
    if (activeAddress && +window?.ethereum.chainId === 5) {
      (async () => {
        const balances = {};
        // Loop over all tokens and fetch their balances
        for (const [tokenName, tokenAddress] of Object.entries(
          tokenAddresses,
        )) {
          balances[tokenName] = await getTokenBalance(tokenAddress);
        }
        // Update the state with the fetched token balances
        setTokenBalances(balances);
      })();
    }
  }, [provider, activeAddress]);

  // Function to fetch the balance of a token for the current active address
  async function getTokenBalance(tokenAddress: string) {
    // If no active address or provider is present, return '0'
    if (!activeAddress || !provider) return "0";
    // Create a new contract instance for the token
    const tokenContract = new ethers.Contract(
      tokenAddress,
      ERC20_ABI,
      provider,
    );
    // Fetch the balance of the token
    const balance = await tokenContract.balanceOf(activeAddress);
    // Format the balance to the correct decimal units
    return ethers.formatUnits(balance, await tokenContract.decimals());
  }

  // Object holding the addresses of the tokens
  const tokenAddresses = {
    USDT: "0x2f3A40A3db8a7e3D09B0adfEfbCe4f6F81927557",
    LINK: "0x326c977e6efc84e512bb9c30f76e30c160ed06fb",
    DAI: "0x73967c6a0904aA032C103b4104747E88c566B1A2",
    UNI: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
  };

  return (
    <div className="Dashboard">
      {+window?.ethereum.chainId !== 5 ? (
        <button onClick={changeNetwork}>Switch to Goerli Network</button>
      ) : (
        <div>
          <h2>
            {activeAddress
              ? "User balance"
              : "Please connect to metamask to use dashboard"}
          </h2>
          {activeAddress && (
            <ul>
              {Object.entries(tokenBalances).map(([currency, amount]) => (
                <li key={currency}>
                  <strong>{currency}:</strong> {amount}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
