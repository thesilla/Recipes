import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter} from '@angular/core';

export class ShoppingListService {


    // informs that ingredients array has changed
    // **NECESSARY BECAUSE SLICE in getIngredients returns a copy of array, not original access
    ingredientsChanged = new EventEmitter<Ingredient[]>();
      
    // array of ingredient objects
    ingredients = [

    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)

    ];


    addIngredient(ing: Ingredient){
    
      this.ingredients.push(ing);
      this.ingredientsChanged.emit(this.ingredients.slice());
    
    }

    // Returns COPY of array, through slice
    // forfiets original access to array 
    getIngredients(){

        return this.ingredients.slice();
    }





}