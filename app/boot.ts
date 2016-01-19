import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './modules/core/app.component'
import {HeroService} from './modules/heroes/services/hero.service';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HeroService
]);