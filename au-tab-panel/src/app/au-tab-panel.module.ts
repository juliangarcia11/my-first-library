import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { AuTabComponent } from './au-tab/au-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    AuTabPanelComponent,
    AuTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    AuTabPanelComponent,
    AuTabComponent
  ],
  bootstrap: [AppComponent]
})
export class AuTabPanelModule { }
