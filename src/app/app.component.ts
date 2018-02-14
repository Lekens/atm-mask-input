import {Component, OnInit} from '@angular/core';
import {AtmMaskInputService} from './services/atm-mask-input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  output: any;
  inputClass: string;
  placeholder: string;
  inputId: string;
  constructor(public mask: AtmMaskInputService) {
  }
ngOnInit() {
    this.inputClass = 'form-contril';
    this.inputId = 'amountMask';
    this.placeholder = 'Enter Amount';
}

  /**
   * Listen to event from child component
   * @param e
   */
  getResponse(e) {
    console.log('Response: ', e);
    this.output = e;
  }
}
