// WalletProvider.tsx
import React, { useState } from "react";
import { Web3_wallet_context } from ".";

export const WalletProvider: React.FC = ({ children }) => {
  const [provider, setProvider] = useState<Web3Provider | null>(null);
  const [activeAddress, setActiveAddress] = useState<string | null>(null);
  const [tokens, setTokens] = useState<any[]>([]);

  return (
    <Web3_wallet_context.Provider
      value={{
        provider,
        setProvider,
        activeAddress,
        setActiveAddress,
        tokens,
        setTokens,
      }}
    >
      {children}
    </Web3_wallet_context.Provider>
  );
};
