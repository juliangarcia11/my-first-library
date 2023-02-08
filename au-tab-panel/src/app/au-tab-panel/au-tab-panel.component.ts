import {AfterContentInit, Component, ContentChildren, OnInit, QueryList} from '@angular/core';
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

  ngAfterContentInit() {
    console.log('after content init', {
      tabs: this.tabs
    })
  }
}
