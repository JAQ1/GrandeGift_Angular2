import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HamperService } from '../services/hamper.service';

import { Hamper } from '../classes/hamper';
import { Category } from '../classes/category';

@Component({
    selector: 'my-hampers',
    templateUrl: 'app/hamper/hamper.component.template.html',
    providers: [HamperService]
})


export class HamperComponent {

    constructor(private _hamperService: HamperService) { };

    title = 'Hampers';

    query: string;
    selectedCategory: string = "";

    hampers: Hamper[] = [];
    categories: Category[] = [];

    ngOnInit() {
        this.hampers = this._hamperService.getAllHampers();
        this.categories = this._hamperService.getAllCategories();

        //this._hamperService.getAllHampers()
        //    .subscribe(Response => (this.hampers = Response));
    }

    search() {
        //if (!this.query) {
        //    this.hampers = this._hamperService.getAllHampers();
        //}
        //else {
        //    this.hampers.find(h => h.name == this.query)
        //}
        this.hampers = this._hamperService.getAllHampers();

        if (this.selectedCategory != ""){
            this.hampers = this.hampers.filter(h => h.category.name == this.selectedCategory);
        }
    }
}