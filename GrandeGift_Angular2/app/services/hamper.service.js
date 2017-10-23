"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
let HamperService = class HamperService {
    constructor(_http) {
        this._http = _http;
        this.url = 'http://localhost:4520/api/values/getAll';
    }
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
        ];
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
        ];
    }
};
HamperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HamperService);
exports.HamperService = HamperService;
//# sourceMappingURL=hamper.service.js.map