
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuModalComponent} from "./au-modal/au-modal.component";
import { AuModalOpenOnClickDirective } from './au-modal-open-on-click.directive';

@NgModule({
  declarations: [
    AuModalComponent,
    AuModalOpenOnClickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuModalComponent,
    AuModalOpenOnClickDirective
  ],
  bootstrap: []
})
export class AuModalModule {









}



