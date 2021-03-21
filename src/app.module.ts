import { Module } from '@nestjs/common';
import { StockModule } from './stock/api/stock.module';
import { StockService } from './stock/core/services/stock/stock.service';
import * as Joi from '@hapi/joi';
@Module({
  imports: [StockModule],
  controllers: [],
  providers: [StockService],
})
export class AppModule {}
