import {ContentChild, Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuModalComponent} from "./au-modal/au-modal.component";
import {AuModalService} from "./au-modal.service";

@Directive({
  selector: '[appAuModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit {

  @ContentChild(AuModalComponent)
  modal: AuModalComponent | undefined;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private modalService: AuModalService
  ) { }

  ngOnInit() {
    // listen to the modalService's close$ observable, when it fires, clear the view container this directive is attached to
    this.modalService.close$.subscribe(() => this.viewContainer.clear());
  }

  /**
   * Take the provided els & create event listeners so that when the el is clicked on,
   * the view container this directive is attached to will be embedded into the DOM
   * @param els HTMLElement | HTMLElement[] A single or multiple HTMLElements
   */
  @Input()
  set appAuModalOpenOnClick(els: HTMLElement | HTMLElement[]) {
    let elements: HTMLElement[]; // placeholder

    // verify els are an array of HTMLElements
    if (Array.isArray(els)) {
      elements = els;
    } else {
      elements = [els];
    }

    // for each el in the array of elements
    elements.forEach(el => {
      // add a click event listener
      el.addEventListener('click', () => {
        // clear this view's container
        this.viewContainer.clear();
        // re-embed the view container this directive is attached to
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
    });
  }
}
