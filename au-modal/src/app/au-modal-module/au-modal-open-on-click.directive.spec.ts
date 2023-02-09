import { AuModalOpenOnClickDirective } from './au-modal-open-on-click.directive';
import {AuModalComponent} from "./au-modal/au-modal.component";
import {Component, DebugElement, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

@Component({
  template: `
    <app-au-modal *appAuModalOpenOnClick="testerButton" id="testerModal"></app-au-modal>
    <button #testerButton id="testerButton"></button>
  `,
})
class WrapperComponent {
  @ViewChild(AuModalComponent, { static: true }) appComponentRef: AuModalComponent | undefined;
}

describe('AuModalOpenOnClickDirective', () => {
  let component: WrapperComponent,
      fixture: ComponentFixture<WrapperComponent>,
      el: DebugElement,
      modal: DebugElement;

  beforeEach( async() => {
    await TestBed.configureTestingModule({
      declarations: [WrapperComponent, AuModalOpenOnClickDirective, AuModalComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    modal = el.query(By.css('#testModal'));

    fixture.detectChanges();
  })

  // each 'it' is a test
  it('should create the WrapperComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should not add the modal to the page by default', () => {
    expect(modal).toBeFalsy();
  });

  it('should open the modal when the test button is clicked', () => {
    fixture.debugElement.nativeElement.querySelector('#testerButton').click();
    fixture.detectChanges();

    const openedModal = fixture.debugElement.nativeElement.querySelector('#testerModal');
    expect(openedModal).toBeTruthy();
  })
});
