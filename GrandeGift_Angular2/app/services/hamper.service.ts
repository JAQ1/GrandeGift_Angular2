import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HamperService {
    hamperUrl = 'http://localhost:4520/api/values/getAllHampers';
    categoryUrl = 'http://localhost:4520/api/values/getAllCategories';

    constructor(private _http: Http) { }

    getAllHampers() {
        return this._http.get(this.hamperUrl)
            .map(Response => Response.json());
    }

    getAllCategories() {
        return this._http.get(this.categoryUrl)
            .map(Response => Response.json());
    }
}