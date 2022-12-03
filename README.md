## plz-work-workspace

Steps taken:

1: create workspace
```$ npx create-nx-workspace plz-work-workspace```

2: install nrwl cli and xplat
```$ npm install -g @nrwl/cli```
```$ npm install --save-dev @nstudio/xplat```

3: generate web plz-app 
```$ nx generate app ```
Using @nstudio/xplat:application

4: run web app to check it worked
```$ nx serve web-plz-app```

5: generate nativescript plz-mobile
```$ nx generate app```
Using @nstudio/xplat:application

6: run nativescript app to check it worked
```$ nx run nativescript-plz-mobile:ios```

7: generate electron app
```$ nx generate app```
Using @nstudio/xplat:application

8: run electron app to check it worked
```$ npm run start.electron.plz-electron```

Error:
apps/electron-plz-electron/src/index.ts:1:53 - error TS2307: Cannot find module 'electron' or its corresponding type declarations.
import { app, BrowserWindow, ipcMain, screen } from 'electron';

7: Fix seems to be to install electron as dev dep
```$ npm install --save-dev electron```

8: Rerun electron:
```$ npm run start.electron.plz-electron```

Error:
> plz-work-workspace@0.0.0 serve.electron.plz-electron
> wait-on http-get://localhost:4200/ && electron apps/electron-plz-electron/src --serve

 >  NX   Configuration Error
   The following implicitDependencies specified in project configurations are invalid:
     web-plz-app-e2e
       web-plz-app
ERROR: "serve.electron.plz-electron.target" exited with 1.


