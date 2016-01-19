import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES, CanDeactivate, ComponentInstruction} from 'angular2/router';
import {DialogService} from '../../core/services/dialog.service';

import {Crisis} from '../models/crisis';
import {CrisisService} from '../services/crisis.service';

@Component({
    templateUrl: 'app/modules/crisis/templates/crisis-detail.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class CrisisDetailComponent implements OnInit, CanDeactivate {
    crisis: Crisis;
    editName: String;

    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _crisisService:CrisisService,
        private _dialogService:DialogService) {

    }

    cancel() {
        this.editName = this.crisis.name;
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises() {
        this._router.navigate( ['CrisisCenter', {id: this.crisis.id}] );
    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._crisisService.getCrisis(id).then(crisis => {
            if (crisis) {
                this.editName = crisis.name;
                this.crisis = crisis;
            } else {
                this.gotoCrises();
            }
        });
    }

    routerCanDeactivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }

        return this._dialogService.confirm('Discard changes?');
    }
}
