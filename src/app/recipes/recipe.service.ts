import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable() 
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
      // recipes list
  // array of recipe objects
  private recipes: Recipe[] = [
    
    // add sample recipe object to aray
    new Recipe('Shrimp',
     'This is some delicious Shrimp!',
     'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
     [new Ingredient("Shrimp",10), new Ingredient("Bacon",21)] ),
    new Recipe('Sandwiches',
     'MMMM these Sandwiches are good!',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wXqDWPkS0Ms1dPnlpq5LlZHPY6d7J1SC1Igdv2FH-Xh8QJr2wA',
     [new Ingredient("Ham", 12), new Ingredient("Cheese", 9) ] )

    
  ]; //we want to fill this array with Recipe objects

  getRecipes(){

    // returns a copy of recipes, NOT ORIGINAL REFERENCE TO SERVICE ARRAY
    return this.recipes.slice();

  }

    
}