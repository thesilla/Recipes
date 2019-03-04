import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseproject';

  showRecipes: boolean = true;
  showShoppingList: boolean;


  onNavigate(s: string){

    if(s == 'recipe'){

      this.showRecipes = true;
      this.showShoppingList = false;

    } else {

      this.showRecipes = false;
      this.showShoppingList = true;

    }
    
  }








}
