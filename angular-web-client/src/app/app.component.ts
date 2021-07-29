import { Component } from '@angular/core';
import { ChatService} from './services/chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public message = '';

  constructor(
    private chatService: ChatService){ }

  ngOnInit() {
    this.chatService.message$.subscribe(msg => {
      console.log(msg);
    })
  }

  sendMessage() {
    this.chatService.sendMsg(this.message);
  }
}
