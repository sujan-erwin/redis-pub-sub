import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebSocketService } from '../web-socket/web-socket.service';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  message$: Subject<any>;
  // Our constructor calls our wsService connect method
  constructor(
    private webSocketService: WebSocketService) {
    this.message$ = <Subject<any>>this.webSocketService
      .connect()
      .pipe(map((response: any): any => {
        return response;
      }));
   }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.message$.next(msg);
  }
}
