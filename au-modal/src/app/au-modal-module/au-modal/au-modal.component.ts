import {Component, HostListener, Input, OnInit, TemplateRef} from '@angular/core';
import {AuModalService} from "../au-modal.service";
import {EventManager} from "@angular/platform-browser";

@Component({
  selector: 'app-au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent {

  constructor(
    private modalService: AuModalService,
    private eventManager: EventManager
  ) { }

  // hold a references to an injectable template
  @Input()
  body: TemplateRef<any> | undefined;

  // allow references to customizable behavior flags
  @Input()
  hideOnEsc: boolean = true;

  // allow references to customizable behavior flags
  @Input()
  hideOnClickOutside: boolean = true;

  // listen for an event on the host,
  // in this case: the upwards motion of the escape key when the user is focused anywhere on the window
  @HostListener('window:keyup.esc', ['$event'])
  keyEsc(event: KeyboardEvent): void {
    if (this.hideOnEsc)
      this.closeModal();
  }

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

  /**
   * Closes the modal on a click outside the modal, iif the hideOnClickOutside flag is set to true
   */
  onClickOutsideModal() {
    if (this.hideOnClickOutside)
      this.closeModal();
  }
}
