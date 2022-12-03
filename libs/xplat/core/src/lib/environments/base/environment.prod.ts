import { IEnvironment } from '@plz-work-workspace/xplat/core';
import { deepMerge } from '@plz-work-workspace/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
