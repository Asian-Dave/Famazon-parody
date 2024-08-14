/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// src/main.ts (or equivalent)



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
