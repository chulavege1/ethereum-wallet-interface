export interface CoinType {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  rank: number;
  priceChange: number;
  highPrice: number;
  lowPrice: number;
}

export interface DataType {
  coins: CoinType[];
}
