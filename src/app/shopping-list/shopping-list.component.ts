import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

    // get copy of current array, save to ingredients
    this.ingredients = this.shoppingListService.getIngredients();

    //subscribe to event in service which indicates array has been changed
    this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {

      this.ingredients = ingredients;

    })
    
  }

}
