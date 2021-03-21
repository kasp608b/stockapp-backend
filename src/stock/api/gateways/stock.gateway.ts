import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { StockService } from '../../core/services/stock/stock.service';
import { Stock } from '../../core/models/stock.model';
import { Inject } from '@nestjs/common';
import {
  IStockService,
  IStockServiceProvider,
} from '../../core/primary-ports/stock.service.interface';
@WebSocketGateway()
export class StockGateway implements OnGatewayConnection {
  constructor(
    @Inject(IStockServiceProvider) private stockService: IStockService,
  ) {}
  @WebSocketServer() server;
  @SubscribeMessage('updateStockPrice')
  handleUpdateStockPrice(
    @MessageBody() stock: Stock,
    @ConnectedSocket() client: Socket,
  ): void {
    const newStock = this.stockService.updateStockPrice(stock);
    if (newStock) {
      console.log('Stuff is happenig');
      this.server.emit('stockPriceUpdated', newStock);
      this.server.emit('allStocks', this.stockService.getStocks());
    }
  }
  handleConnection(client: any, ...args: any[]): any {
    console.log('Client Connect', client.id);
    client.emit('allStocks', this.stockService.getStocks());
  }
}
