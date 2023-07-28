export type NetworksType = {
  [key: string]: {
    providerURL: string;
    lpAddressProvider: string;
  };
};

export const NETWORKS: NetworksType = {
  Ethereum: {
    providerURL:
      "https://mainnet.infura.io/v3/b42ca6aa17b7460bbff8de90e888eaf7",
    lpAddressProvider: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
  },
  Polygon: {
    providerURL:
      "https://polygon-mainnet.infura.io/v3/b42ca6aa17b7460bbff8de90e888eaf7",
    lpAddressProvider: "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
  },
};
