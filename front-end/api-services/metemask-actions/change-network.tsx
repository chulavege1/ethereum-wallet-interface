export const changeNetwork = async () => {
  const goerliChainId = "0x5";
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: goerliChainId }],
    });
  } catch (error) {
    console.error(error);
    if (error.code === 4902) {
      console.error("This chain does not exist.");
    } else if (error.code === 4001) {
      console.error("User rejected the request.");
    }
  }
};
