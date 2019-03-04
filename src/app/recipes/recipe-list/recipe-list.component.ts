import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // recipes list
  // array of recipe objects
  recipes: Recipe[] = [
    
    // add sample recipe object to aray
    new Recipe('Shrimp', 'This is some delicious Shrimp!','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg' ),
    new Recipe('Sandwiches', 'MMMM these Sandwiches are good!','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wXqDWPkS0Ms1dPnlpq5LlZHPY6d7J1SC1Igdv2FH-Xh8QJr2wA' )

    
  ]; //we want to fill this array with Recipe objects

  @Output() recipeObjectEvent = new EventEmitter<Recipe>();


  // continue passing recipe up the chain
  public onRecipeDetail(r: Recipe){
  
    this.recipeObjectEvent.emit(r);
 
  

  }
  

  constructor() { }

  ngOnInit() {
  }

}
