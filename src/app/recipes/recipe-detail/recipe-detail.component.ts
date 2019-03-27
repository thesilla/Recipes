import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {DropdownDirective } from 'src\\app\\shared\\dropdown.directive';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipeD') recipe: Recipe;


  addToShoppingList(){

    var recipeIngredients = this.recipe.ingredients;
    
    //loop through ingredients in recipe
    for (var i = 0; i < recipeIngredients.length; i++){
      this.shoppingListService.addIngredient(recipeIngredients[i]);

    }


  }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

}
