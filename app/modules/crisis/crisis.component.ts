import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisListComponent}   from './components/crisis-list.component';
import {CrisisDetailComponent}   from './components/crisis-detail.component';
import {CrisisService}   from './services/crisis.service';

@Component({
    template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers:  [CrisisService]
})
@RouteConfig([
    {path:'/',         name: 'CrisisCenter', component: CrisisListComponent, useAsDefault: true},
    {path:'/:id',      name: 'CrisisDetail', component: CrisisDetailComponent}
])
export class CrisisComponent { }