import { IEnvironment } from '@plz-work-workspace/xplat/core';
import { deepMerge } from '@plz-work-workspace/xplat/utils';

export const environmentBase = function (baseWorkspaceEnv: IEnvironment, appEnvironmentCustom: IEnvironment = {}) {
  // base app environment + customizations
  const appEnvironment = deepMerge(
    <IEnvironment>{
      production: baseWorkspaceEnv.production,
      // shared app level customizations here...
    },
    appEnvironmentCustom
  );
  // base workspace environment + target app environment
  return deepMerge(baseWorkspaceEnv, appEnvironment);
};
