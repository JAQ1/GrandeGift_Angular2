import { Category } from '../classes/category';

export class Hamper {
    hamperId: number;
    name: string;
    hamperGifts: string[];
    price: number;
    active: boolean;
    photoPath: string;
    categoryId: number;
    category: Category;

    constructor(hamperId: number) {
        this.hamperId = hamperId;
    }
}