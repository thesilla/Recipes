import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // array of ingredient objects
  ingredients = [

      new Ingredient('Apples', 5),
      new Ingredient('Tomatos', 10)

  ];


  onIngredientAdded(ing: Ingredient){

    this.ingredients.push(ing);

  }
  constructor() { }

  ngOnInit() {
  }

}
