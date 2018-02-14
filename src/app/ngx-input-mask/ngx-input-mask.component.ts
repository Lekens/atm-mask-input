import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AtmMaskInputService} from '../services/atm-mask-input.service';

@Component({
  selector: 'app-ngx-input-mask',
  templateUrl: './ngx-input-mask.component.html',
  styleUrls: ['./ngx-input-mask.component.css']
})
export class NgxInputMaskComponent implements OnInit {
@Input() inputClass: string;
@Input() inputId: string;
@Input() inputPlaceholder: string;
@Output() blurEvent: EventEmitter<any> = new EventEmitter();
  constructor(public mask: AtmMaskInputService) { }

  ngOnInit() {
  }
  sendResponse() {
    const obj =  this.mask.getValue();
    this.blurEvent.emit(obj);
  }
}
