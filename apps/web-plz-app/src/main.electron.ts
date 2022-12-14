import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// libs
import { environment } from '@plz-work-workspace/xplat/core';

// app
import { AppElectronModule } from './app/app.electron.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppElectronModule)
  .catch((err) => console.log(err));
