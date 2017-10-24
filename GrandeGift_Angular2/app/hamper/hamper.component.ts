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
        this._hamperService.getAllHampers()
            .subscribe(Response => (this.hampers = Response));

        this._hamperService.getAllCategories()
            .subscribe(Response => (this.categories = Response));
    }

    test() {
        alert(this.categories.length);
    }

    search() {
        if (this.selectedCategory != ""){
            this.hampers = this.hampers.filter(h => h.category.name == this.selectedCategory);
        }
        else {
            this._hamperService.getAllHampers()
                .subscribe(Response => (this.hampers = Response));
        }
    }
}