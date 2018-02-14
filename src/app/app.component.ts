import { Component } from '@angular/core';
import {AtmMaskInputService} from './services/atm-mask-input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  output: any;
  constructor(public mask: AtmMaskInputService) {
  }

  /**
   * Get Output
   */
  getOutput() {
   const obj =  this.mask.getValue();
   console.log('Object: ', obj);
   this.output = obj;
  }
}
