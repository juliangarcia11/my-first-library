import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAuModalOpenOnClick]'
})
export class AuModalOpenOnClickDirective {


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
