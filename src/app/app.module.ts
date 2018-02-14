import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AtmMaskInputService} from './services/atm-mask-input.service';
import {CommonModule} from '@angular/common';
import { NgxInputMaskComponent } from './ngx-input-mask/ngx-input-mask.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [AtmMaskInputService],
  declarations: [
    AppComponent,
    NgxInputMaskComponent
  ],
  exports: [ NgxInputMaskComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
