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
const hamper_service_1 = require("../services/hamper.service");
let HamperComponent = class HamperComponent {
    constructor(_hamperService) {
        this._hamperService = _hamperService;
        this.title = 'Hampers';
        this.selectedCategory = "";
        this.hampers = [];
        this.categories = [];
    }
    ;
    ngOnInit() {
        this._hamperService.getAllHampers()
            .subscribe(Response => (this.hampers = Response));
        this._hamperService.getAllCategories()
            .subscribe(Response => (this.categories = Response));
    }
    test() {
        alert(this.categories.length);
    }
    search() {
        if (this.selectedCategory != "") {
            this.hampers = this.hampers.filter(h => h.category.name == this.selectedCategory);
        }
        else {
            this._hamperService.getAllHampers()
                .subscribe(Response => (this.hampers = Response));
        }
    }
};
HamperComponent = __decorate([
    core_1.Component({
        selector: 'my-hampers',
        templateUrl: 'app/hamper/hamper.component.template.html',
        providers: [hamper_service_1.HamperService]
    }),
    __metadata("design:paramtypes", [hamper_service_1.HamperService])
], HamperComponent);
exports.HamperComponent = HamperComponent;
//# sourceMappingURL=hamper.component.js.map