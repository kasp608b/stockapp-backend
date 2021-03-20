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
    @MessageBody() stockId: string,
    @MessageBody() newPrice: number,
    @ConnectedSocket() client: Socket,
  ): void {
    const stock = this.stockService.updateStockPrice(stockId, newPrice);
    if (stock) {
      this.server.emit('stockPriceUpdated', stock);
    }
  }
  handleConnection(client: any, ...args: any[]): any {
    console.log('Client Connect', client.id);
    client.emit('allStocks', this.stockService.getStocks());
  }
}
