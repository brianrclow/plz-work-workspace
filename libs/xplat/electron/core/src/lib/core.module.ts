import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@plz-work-workspace/xplat/utils';
import { ELECTRON_PROVIDERS, ElectronService } from './services';

@NgModule({
  providers: [...ELECTRON_PROVIDERS],
})
export class PlzWorkWorkspaceElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: PlzWorkWorkspaceElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'PlzWorkWorkspaceElectronCoreModule');
  }
}
