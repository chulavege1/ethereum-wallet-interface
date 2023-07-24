export async function fetchMultiBalances(
  addresses: string[],
  apiKey: string,
): Promise<any[]> {
  const url = `https://api-goerli.etherscan.io/api?module=account&action=balancemulti&address=${addresses.join(
    ",",
  )}&tag=latest&apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data || data.status !== "1") {
    console.error("Error fetching balances:", data);
    return [];
  }

  return data.result;
}
