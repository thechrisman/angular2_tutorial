import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Hero} from '../models/hero';
import {HeroService} from '../services/hero.service';

@Component({
    selector: 'hero-list',
    templateUrl: 'app/modules/heroes/templates/hero-list.component.html',
    styleUrls: ['app/modules/heroes/styles/hero-list.component.css']
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    private selectedId: number;

    constructor(
        private _router: Router,
        private _heroService: HeroService,
        private _routePrams: RouteParams) {
        this.selectedId = +_routePrams.get('id');
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this._router.navigate( ['HeroDetail', { id: hero.id }] );
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}
