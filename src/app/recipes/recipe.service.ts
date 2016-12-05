import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png/revision/latest?cb=20130309213400', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Dummy', 'Dummy', 'http://vignette3.wikia.nocookie.net/scribblenauts/images/7/7a/Doppelganger_Unmasked.png/revision/latest?cb=20140919072026', [
      new Ingredient('French Fries', 3),
      new Ingredient('Beef Meat', 1)
    ])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id: number){
    return this.recipes[id]
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
}
