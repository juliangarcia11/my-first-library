import { AuModalOpenOnClickDirective } from './au-modal-open-on-click.directive';
import {AuModalComponent} from "./au-modal/au-modal.component";
import {Component, DebugElement, ViewChild} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

@Component({
  template: `
    <app-au-modal *appAuModalOpenOnClick="testerButton"></app-au-modal>
    <button #testerButton id="testerButton"></button>
  `,
})
class WrapperComponent {
  @ViewChild(AuModalComponent, { static: true }) appComponentRef: AuModalComponent | undefined;
}

describe('AuModalOpenOnClickDirective', () => {
  let directives: DebugElement[];
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach( async() => {
    await TestBed.configureTestingModule({
      declarations: [WrapperComponent, AuModalOpenOnClickDirective, AuModalComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);

    // const triggerBtn = fixture.debugElement.query(By.css('#testerButton'));
    // triggerBtn.nativeElement.click();

    fixture.detectChanges();
    directives = fixture.debugElement.queryAll(By.directive(AuModalOpenOnClickDirective));

  })

  it('should show the directive is truthy', () => {
    const triggerBtn = fixture.debugElement.query(By.css('#testerButton'));
    triggerBtn.nativeElement.click();
    fixture.detectChanges();
    console.log('what is a directive', directives);
    expect(directives).toBeTruthy();
  });
});
