import { Module } from '@nestjs/common';
import { StockModule } from './stock/api/stock.module';
import { StockService } from './stock/core/services/stock/stock.service';

@Module({
  imports: [StockModule],
  controllers: [],
  providers: [StockService],
})
export class AppModule {}
