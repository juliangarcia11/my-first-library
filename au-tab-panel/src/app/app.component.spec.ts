import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AuTabPanelComponent} from "./au-tab-panel/au-tab-panel.component";
import {AuTabComponent} from "./au-tab/au-tab.component";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('AppComponent', () => {
  let component: AppComponent,
    fixture: ComponentFixture<AppComponent>,
    el: DebugElement,
    tabPanel: DebugElement,
    tabs: DebugElement[],
    selectedButton: DebugElement,
    contactEmail: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, AuTabPanelComponent, AuTabComponent
      ],
    }).compileComponents();
  });

  // before each test
  beforeEach(() => {
    // initialize common params
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));

    // run angular change detections
    fixture.detectChanges();

    // after detecting changes to tabPanel, get items
    tabs = tabPanel.queryAll(By.css('.tab'));
    selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected'));
    contactEmail = tabPanel.query(By.css('.contact-email'));
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a tabPanel', () => {
    expect(tabPanel).toBeTruthy();
  });

  it('should have tab', () => {
    expect(tabs).toBeTruthy();
  });

  it('should find only one tab inside the tab container', () => {
    expect(tabs.length).toBe(1);
  });

  it('should find the Contact tab button', () => {
    expect(selectedButton.nativeElement).toBeTruthy();
  });

  it('should find the Contact tab button marked as active', () => {
    expect(selectedButton.nativeElement).toBeTruthy();
    expect(selectedButton.nativeElement.textContent).toBe('Contact');
  });

  it('should display contact email item from Contact tab', () => {
    expect(contactEmail).toBeTruthy();
  });
});
