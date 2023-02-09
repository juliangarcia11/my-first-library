import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AuMaskModule} from "./au-mask/au-mask.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
