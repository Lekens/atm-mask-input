import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AtmMaskInputService} from './services/atm-mask-input.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [AtmMaskInputService],
  declarations: [
    AppComponent
  ],
  exports: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
