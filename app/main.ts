import { enableProdMode } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

declare const _dev: any;

if (!_dev) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
