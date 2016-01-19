import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisComponent}       from '../crisis/crisis.component';
import {HeroListComponent}     from '../heroes/components/hero-list.component';
import {HeroDetailComponent}   from '../heroes/components/hero-detail.component';
import {DialogService}         from './services/dialog.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/modules/core/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [DialogService]
})
@RouteConfig([
    {path:'/crisis-center/...', name: 'CrisisCenter', component: CrisisComponent, useAsDefault: true},
    {path:'/heroes',        name: 'Heroes',       component: HeroListComponent},
    {path:'/hero/:id',      name: 'HeroDetail',   component: HeroDetailComponent}
])
export class AppComponent {
    public title = 'Tour of Heroes';
}
