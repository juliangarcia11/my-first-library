import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[au-mask]'
})
export class AuMaskDirective implements OnInit {

  @Input('au-mask')
  mask: string = '';

  input: HTMLInputElement;

  constructor(
    el: ElementRef
  ) {
    this.input = el.nativeElement;
  }

  ngOnInit(): void {

  }

}
