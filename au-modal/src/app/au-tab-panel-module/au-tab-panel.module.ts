import {AppComponent} from "../app.component";
import {AuTabPanelComponent} from "./au-tab-panel/au-tab-panel.component";
import {NgModule} from "@angular/core";
import {AuTabComponent} from "./au-tab/au-tab.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AuTabPanelComponent,
    AuTabComponent
  ],
  exports: [
    AuTabPanelComponent,
    AuTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AuTabPanelModule { }
