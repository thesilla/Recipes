import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {DropdownDirective } from 'src\\app\\shared\\dropdown.directive';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipeD') recipe: Recipe;


  constructor() { }

  ngOnInit() {
  }

}
