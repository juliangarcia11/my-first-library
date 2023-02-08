import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-au-tab',
  templateUrl: './au-tab.component.html',
  styleUrls: ['./au-tab.component.scss']
})
export class AuTabComponent {

  // create a referencable item for this tab's title (can be used/shown by other components)
  @Input()
  title: string = '';
}
