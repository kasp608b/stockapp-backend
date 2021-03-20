import { Injectable } from '@nestjs/common';
import { Stock } from '../../models/stock.model';
import { IStockService } from '../../primary-ports/stock.service.interface';

@Injectable()
export class StockService implements IStockService {
  stocks: Stock[];
  getStocks(): Stock[] {
    return this.stocks;
  }

  updateStockPrice(stockId: string, newPrice: number): Stock {
    const stock = this.stocks.find((s) => s.id == stockId);
    stock.price = newPrice;
    return stock;
  }
}
