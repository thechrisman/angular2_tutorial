import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Crisis} from '../models/crisis';
import {CrisisService} from '../services/crisis.service';

@Component({
    templateUrl: 'app/modules/crisis/templates/crisis-list.component.html',
    styleUrls: ['app/modules/crisis/styles/crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
    crises: Crisis[];
    selectedId: number;

    constructor(
        private _router: Router,
        private _crisisService: CrisisService,
        private _routeParams: RouteParams) {
        this.selectedId = +_routeParams.get('id');
    }

    ngOnInit() {
        this.getCrises();
    }

    onSelect(crisis: Crisis) {
        this._router.navigate( ['CrisisDetail', { id: crisis.id }] );
    }

    getCrises() {
        this._crisisService.getCrises().then(crises => this.crises = crises);
    }
}
