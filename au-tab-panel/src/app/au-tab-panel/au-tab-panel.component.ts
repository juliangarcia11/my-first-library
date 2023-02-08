import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {AuTabComponent} from "../au-tab/au-tab.component";

@Component({
  selector: 'app-au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['au-tab-panel.component.scss']
})
export class AuTabPanelComponent implements AfterContentInit {

  // retrieve an iterable list of AuTabComponents that have been projected into this panel component
  @ContentChildren(AuTabComponent)
  tabs: QueryList<AuTabComponent> = new QueryList<AuTabComponent>();

  // allow components that use this one to input a custom template to be used in the header section
  @Input()
  headerTemplate: TemplateRef<any> | undefined;

  /**
   * After content children are done loading in, perform an action
   */
  ngAfterContentInit() {
    // find any selected tab
    const selectedTab = this.tabs.find(t => t.selected);

    // if no selected tabs && there is at least one tab
    if (!selectedTab && this.tabs.first) {
      // select the first tab by default
      this.tabs.first.selected = true;
    }
  }

  /**
   * Set the 'selected' parameter to true for the provided AuTabComponent after setting all others to false
   * @param tab AuTabComponent The tab to select
   */
  selectTab(tab: AuTabComponent) {
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
  }

  /**
   * @returns { tabs: QueryList<AuTabComponent> } Context to be utilized by <ng-container>
   */
  get tabsContext(): { tabs: QueryList<AuTabComponent> } {
    return { tabs: this.tabs };
  }
}
