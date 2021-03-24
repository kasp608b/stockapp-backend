import { Injectable } from '@nestjs/common';
import { Stock } from '../../models/stock.model';
import { IStockService } from '../../primary-ports/stock.service.interface';

@Injectable()
export class StockService implements IStockService {
  stocks: Stock[] = [
    {
      id: 'Vystas',
      price: 1188.0,
      init_price: 1188.0,
      desc: 'Great danish company that produces Windmills',
    },
    {
      id: 'Uniti',
      price: 24000.22,
      init_price: 24000.22,
      desc: 'A real-time engine',
    },
    {
      id: 'Mursk',
      price: 25000.21,
      init_price: 25000.21,
      desc: 'A shipping company',
    },
    {
      id: 'Dinske Bonk',
      price: 113.92,
      init_price: 113.92,
      desc: 'A danish bank',
    },
    {
      id: 'Nova Nordysk',
      price: 450.02,
      init_price: 450.02,
      desc: 'A danish pharmaceutical company',
    },
  ];
  getStocks(): Stock[] {
    return this.stocks;
  }

  updateStockPrice(stock: Stock): Stock {
    const newStock = this.stocks.find((s) => s.id == stock.id);
    newStock.price = stock.price;
    const stock1 = this.stocks.find((s) => s.id == newStock.id);
    console.log(stock1.price);
    return stock;
  }
}
