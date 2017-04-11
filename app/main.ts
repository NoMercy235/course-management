import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

// TODO: call enableProd when in prod mode
platformBrowserDynamic().bootstrapModule(AppModule);
