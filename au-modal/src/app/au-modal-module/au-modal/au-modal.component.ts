import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent {

  // hold a references to an injectable template
  @Input()
  body: TemplateRef<any> | undefined;
}
