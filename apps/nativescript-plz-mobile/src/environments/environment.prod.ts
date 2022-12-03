import { environmentBase } from './environment.base';
import { IEnvironment } from '@plz-work-workspace/xplat/core';
import { environmentProd } from '@plz-work-workspace/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});