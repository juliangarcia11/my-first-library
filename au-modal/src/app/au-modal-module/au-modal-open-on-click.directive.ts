import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAuModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective {


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
}
