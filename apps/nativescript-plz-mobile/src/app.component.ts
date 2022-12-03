import { Component } from '@angular/core';
import { AppService } from '@plz-work-workspace/xplat/nativescript/core';
import { AppBaseComponent } from '@plz-work-workspace/xplat/nativescript/features';

@Component({
  selector: 'plz-work-workspace-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
