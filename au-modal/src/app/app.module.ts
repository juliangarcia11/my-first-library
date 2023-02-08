import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {AuModalModule} from "./au-modal-module/au-modal.module";
import {HttpClientModule} from "@angular/common/http";
import {AuInputModule} from "./au-input-module/au-input.module";
import {AuTabPanelModule} from "./au-tab-panel-module/au-tab-panel.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuModalModule,
    AuInputModule,
    AuTabPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
