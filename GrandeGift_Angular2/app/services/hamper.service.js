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
        this.hamperUrl = 'http://localhost:4520/api/values/getAllHampers';
        this.categoryUrl = 'http://localhost:4520/api/values/getAllCategories';
    }
    getAllHampers() {
        return this._http.get(this.hamperUrl)
            .map(Response => Response.json());
    }
    getAllCategories() {
        return this._http.get(this.categoryUrl)
            .map(Response => Response.json());
    }
};
HamperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HamperService);
exports.HamperService = HamperService;
//# sourceMappingURL=hamper.service.js.map