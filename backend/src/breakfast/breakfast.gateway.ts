import { OnModuleInit } from '@nestjs/common';
import { WebSocketGateway , MessageBody, SubscribeMessage, WebSocketServer } from '@nestjs/websockets';
import {Server} from 'socket.io'

@WebSocketGateway({
    cors:{
        orignin:['http://localhost:3000'],
    }
})
export class BreakfastGateway  implements OnModuleInit{

@WebSocketServer()
server:Server

onModuleInit(){
    this.server.on('connection',(socket)=>{
console.log(socket.id);
console.log('connected ...');
    })
}

  @SubscribeMessage('newBreakfast')
  async handleNewBreakfast(@MessageBody() breakfast: any) {
    console.log(breakfast)
   this.server.emit('receiveBreakfast',{
    content:breakfast
   })
  }
}
