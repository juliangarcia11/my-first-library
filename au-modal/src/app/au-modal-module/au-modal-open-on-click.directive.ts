import {AfterContentInit, ContentChild, Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuModalComponent} from "./au-modal/au-modal.component";

@Directive({
  selector: '[appAuModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective implements AfterContentInit {

  @ContentChild(AuModalComponent)
  modal: AuModalComponent | undefined;


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    console.log({
      templateRef,
      viewContainer: viewContainer
    })
  }

  @Input()
  set appAuModalOpenOnClick(els: HTMLElement | HTMLElement[]) {
    let elements: HTMLElement[];

    if (Array.isArray(els)) {
      elements = els;
    } else {
      elements = [els];
    }

    elements.forEach(el => {
      el.addEventListener('click', () => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);

        console.log('appAuModalOpenOnClick clicked!', {self: this});

      });
    });
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit',this.modal);
  }
}
