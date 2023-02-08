import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuFaInputComponent} from "./au-fa-input/au-fa-input.component";
import {InputRefDirective} from "./common/input-ref.directive";
import {AuMdInputComponent} from "./au-md-input/au-md-input.component";
import {AppComponent} from "../app.component";



@NgModule({
  declarations: [
    AuFaInputComponent,
    AuMdInputComponent,
    InputRefDirective
  ],
  exports: [
    AuFaInputComponent,
    AuMdInputComponent,
    InputRefDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AuInputModule { }
