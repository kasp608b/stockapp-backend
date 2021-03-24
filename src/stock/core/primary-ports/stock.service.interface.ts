import { Stock } from '../models/stock.model';

export const IStockServiceProvider = 'IStockServiceProvider';
export interface IStockService {
  getStocks(): Stock[];

  updateStockPrice(stock: Stock): Stock;
  //øf
}
