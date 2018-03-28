import { Component, Input } from '@angular/core';
import { Message } from './message.model';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent {
    @Input() message: Message;
}