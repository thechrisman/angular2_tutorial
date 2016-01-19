import {Injectable} from 'angular2/core';
import {CRISIS} from './mock-crisis';

@Injectable()
export class CrisisService {
    getCrises() {
        return Promise.resolve(CRISIS);
    }

    getCrisis(id: String) {
        return Promise.resolve(CRISIS.find(crisis => crisis.id == id));
    }
}