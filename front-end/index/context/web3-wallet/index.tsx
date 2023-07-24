import { createContext, Dispatch, SetStateAction } from "react";
import { Web3Provider } from "@ethersproject/providers";

interface WalletContextType {
  provider: Web3Provider | null;
  setProvider: Dispatch<SetStateAction<Web3Provider | null>>;
  activeAddress: string | null;
  setActiveAddress: Dispatch<SetStateAction<string | null>>;
  tokens: any[];
  setTokens: Dispatch<SetStateAction<any[]>>;
}

export const Web3_wallet_context = createContext<WalletContextType | undefined>(
  undefined,
);
