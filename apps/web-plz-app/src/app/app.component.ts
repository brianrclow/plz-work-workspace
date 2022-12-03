import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@plz-work-workspace/xplat/web/features';

@Component({
  selector: 'plz-work-workspace-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
