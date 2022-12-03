import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@plz-work-workspace/xplat/core';
import { AppService } from '@plz-work-workspace/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
