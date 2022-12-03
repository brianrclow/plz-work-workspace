import { NgModule } from '@angular/core';
import { PlzWorkWorkspaceElectronCoreModule } from '@plz-work-workspace/xplat/electron/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, PlzWorkWorkspaceElectronCoreModule],
  bootstrap: [AppComponent],
})
export class AppElectronModule {}
