import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HamperService {
    url = 'http://localhost:4520/api/values/getAll';

    constructor(private _http: Http) { }

    getAllHampers() {
        return [
            {
                "hamperId": 27065,
                "name": "Baby Hamper",
                "hamperGifts": null,
                "price": 324,
                "active": true,
                "photoPath": null,
                "categoryId": 6003,
                "category": {
                    "categoryId": 6003,
                    "name": "New Born",
                    "description": null,
                    "photoPath": null,
                    "userId": null,
                    "user": null
                }
            },
            {
                "hamperId": 27066,
                "name": "Santa Hamper",
                "hamperGifts": null,
                "price": 0,
                "active": true,
                "photoPath": null,
                "categoryId": 6004,
                "category": {
                    "categoryId": 6004,
                    "name": "Christmas",
                    "description": null,
                    "photoPath": null,
                    "userId": null,
                    "user": null
                }
            },
            {
                "hamperId": 27067,
                "name": "Easter Hamper",
                "hamperGifts": null,
                "price": 123,
                "active": true,
                "photoPath": null,
                "categoryId": 6005,
                "category": {
                    "categoryId": 6005,
                    "name": "Easter",
                    "description": null,
                    "photoPath": null,
                    "userId": null,
                    "user": null
                }
            }
        ]


        //return this._http.get(this.url)
        //    .map(Response => Response.json());
    }

    getAllCategories() {
        return [
            {
                "categoryId": 1,
                "name": "Christmas",
                "description": null,
                "photoPath": null,
                "userId": "db1760d5-8cc3-4ce1-9574-b8f1f48408ac",
                "user": null
            },
            {
                "categoryId": 2,
                "name": "New Years",
                "description": null,
                "photoPath": null,
                "userId": "db1760d5-8cc3-4ce1-9574-b8f1f48408ac",
                "user": null
            },
            {
                "categoryId": 1002,
                "name": "Easter",
                "description": null,
                "photoPath": null,
                "userId": "db1760d5-8cc3-4ce1-9574-b8f1f48408ac",
                "user": null
            },
            {
                "categoryId": 2002,
                "name": "Holiday",
                "description": null,
                "photoPath": null,
                "userId": "db1760d5-8cc3-4ce1-9574-b8f1f48408ac",
                "user": null
            },
            {
                "categoryId": 3002,
                "name": "Fathers Day",
                "description": null,
                "photoPath": null,
                "userId": "db1760d5-8cc3-4ce1-9574-b8f1f48408ac",
                "user": null
            },
            {
                "categoryId": 4002,
                "name": "New Born",
                "description": null,
                "photoPath": null,
                "userId": "db1760d5-8cc3-4ce1-9574-b8f1f48408ac",
                "user": null
            },
            {
                "categoryId": 4003,
                "name": "Christmas",
                "description": null,
                "photoPath": null,
                "userId": null,
                "user": null
            },
            {
                "categoryId": 4004,
                "name": "Christmas",
                "description": null,
                "photoPath": null,
                "userId": null,
                "user": null
            },
            {
                "categoryId": 5003,
                "name": "Christmas",
                "description": null,
                "photoPath": null,
                "userId": null,
                "user": null
            },
            {
                "categoryId": 6003,
                "name": "New Born",
                "description": null,
                "photoPath": null,
                "userId": null,
                "user": null
            },
            {
                "categoryId": 6004,
                "name": "Christmas",
                "description": null,
                "photoPath": null,
                "userId": null,
                "user": null
            },
            {
                "categoryId": 6005,
                "name": "Easter",
                "description": null,
                "photoPath": null,
                "userId": null,
                "user": null
            }
        ]
    }
}