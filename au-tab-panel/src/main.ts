import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AuTabPanelModule } from './app/au-tab-panel.module';


platformBrowserDynamic().bootstrapModule(AuTabPanelModule)
  .catch(err => console.error(err));
