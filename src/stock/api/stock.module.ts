import { Module } from '@nestjs/common';
import { StockGateway } from './gateways/stock.gateway';
import { StockService } from '../core/services/stock/stock.service';
import { IStockServiceProvider } from '../core/primary-ports/stock.service.interface';

@Module({
  providers: [
    StockGateway,
    {
      provide: IStockServiceProvider,
      useClass: StockService,
    },
  ],
})
export class StockModule {}
