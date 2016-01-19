import {Component} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {Hero} from '../models/hero';
import {HeroService} from '../services/hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/modules/heroes/templates/hero-detail.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeroDetailComponent {
    public hero: Hero;

    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _heroService:HeroService) {

    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._heroService.getHero(id).then(hero => this.hero = hero);
    }
}
