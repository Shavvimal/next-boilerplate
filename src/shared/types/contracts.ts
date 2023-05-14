/* Contract Example
{
    "market_quadra": "binance_coinm@AAVE@USD@perp",
    "market_dropdown": "AAVEUSD Perp",
    "exchange": "binance_coinm",
    "exchange_name": "Binance",
    "symbol": "AAVEUSD_PERP",
    "base": "AAVE",
    "quote": "USD",
    "active": true,
    "inst_type": "perp",
    "delivery": false,
    "linear": false,
    "inverse": true,
    "quanto": false,
    "price_decimals": 2,
    "qty_decimals": 0,
    "tick_size": 0.01,
    "lot_size": 1,
    "contract_size": 1,
    "contract_value": 10,
    "expiry_dt": null,
    "expiry_str": null,
    "expiry_unix": null,
    "strike": null,
    "side": null,
    "call": false,
    "put": false,
    "channel_prefix": "binance_coinm@AAVEUSD_PERP",
    "min_size": 1,
    "risk_type": "Perp COIN"
  },
*/
export interface Contract {
  market_quadra: string;
  market_dropdown: string;
  exchange: string;
  exchange_name: string;
  symbol: string;
  base: string;
  quote: string;
  active: boolean;
  inst_type: string;
  delivery: boolean;
  linear: boolean;
  inverse: boolean;
  quanto: boolean;
  price_decimals: number;
  qty_decimals: number;
  tick_size: number;
  lot_size: number;
  contract_size: number;
  contract_value: number;
  expiry_dt: string;
  expiry_str: string;
  expiry_unix: number;
  strike: number;
  side: string;
  call: boolean;
  put: boolean;
  channel_prefix: string;
  min_size: number;
  risk_type: string;
}
