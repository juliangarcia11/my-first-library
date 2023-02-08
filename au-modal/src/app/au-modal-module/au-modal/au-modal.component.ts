import {Component, Input, TemplateRef} from '@angular/core';
import {AuModalService} from "../au-modal.service";

@Component({
  selector: 'app-au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent {

  constructor(
    private modalService: AuModalService
  ) { }

  // hold a references to an injectable template
  @Input()
  body: TemplateRef<any> | undefined;

  /**
   * Request that the modal service communicate the closure request
   */
  closeModal(): void {
    this.modalService.close();
  }

  /**
   * Prevent any mouse events from continuing up the chain of events
   * @param event MouseEvent Event created by user's mouse
   */
  cancelClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}
