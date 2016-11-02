import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400', []),
    new Recipe('Dummy', 'Dummy', 'http://vignette3.wikia.nocookie.net/scribblenauts/images/7/7a/Doppelganger_Unmasked.png/revision/latest?cb=20140919072026', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
