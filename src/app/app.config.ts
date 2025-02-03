import { InjectionToken } from '@angular/core';
export interface AppConfig {
  title: string;
}
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config description');