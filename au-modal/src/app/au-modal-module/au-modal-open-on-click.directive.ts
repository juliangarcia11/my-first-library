import {ContentChild, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuModalComponent} from "./au-modal/au-modal.component";
import {AuModalService} from "./au-modal.service";

@Directive({
  selector: '[appAuModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements OnInit, OnDestroy {

  @ContentChild(AuModalComponent)
  modal: AuModalComponent | undefined;

  elements: HTMLElement[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private modalService: AuModalService
  ) { }

  /**
   * Actions to perform as soon as initialization of the directive is complete
   */
  ngOnInit() {
    // listen to the modalService's close$ observable, when it fires, clear the view container this directive is attached to
    this.modalService.close$.subscribe(() => this.viewContainer.clear());
  }

  /**
   * Actions to perform on destruction of the directive from the dom
   */
  ngOnDestroy() {
    // clear any event listeners to prevent memory leaks
    this.elements.forEach(el => el.removeEventListener('click', this.clickHandler));
  }

  /**
   * Take the provided els & create event listeners so that when the el is clicked on,
   * the view container this directive is attached to will be embedded into the DOM
   * @param els HTMLElement | HTMLElement[] A single or multiple HTMLElements
   */
  @Input()
  set appAuModalOpenOnClick(els: HTMLElement | HTMLElement[]) {
    // verify els are an array of HTMLElements
    if (Array.isArray(els)) {
      this.elements = els;
    } else {
      this.elements = [els];
    }

    // for each el in the array of elements
    this.elements.forEach(el => {
      // attach a click handler function to an event listener on the el
      el.addEventListener('click', this.clickHandler);
    });
  }

  /**
   * Odd syntax ().bind(this) -- binds the function to the directive's 'this' scope
   *
   * Clear the view container and embed the view created from the provided template
   */
  clickHandler = (() => {
    // clear this view's container
    this.viewContainer.clear();
    // re-embed the view container this directive is attached to
    this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this);
}
