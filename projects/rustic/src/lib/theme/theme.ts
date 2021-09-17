import { InjectionToken } from '@angular/core';

export interface Theme {
  name: string;
  properties: any;
}

export const THEMES = new InjectionToken<Theme[]>('THEMES');
export const ACTIVE_THEME = new InjectionToken<string>('ACTIVE_THEME');

export interface ThemeOptions {
  themes: Theme[];
  active?: string;
}
