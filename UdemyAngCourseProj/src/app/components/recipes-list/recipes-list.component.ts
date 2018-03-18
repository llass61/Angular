import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('Beef Ribs', 'Great Rib Recipe',
  'https://www.google.com/search?q=beef+rib+images&rlz=1C1CHBF_enUS717US717&tbm=isch&source=iu&ictx=1&fir=M-5EIT-efHs1KM%253A%252CJo_Mm0n6hPsmFM%252C_&usg=__sc6kiCJhbdLLcmulsUYB6PU4u9c%3D&sa=X&ved=0ahUKEwjHn5OggdTZAhUVwWMKHUuNC0IQ9QEINTAF#imgrc=M-5EIT-efHs1KM:' ),
    new RecipeModel('Chicken', 'Best BBQ Chicken',
  'https://www.google.com/search?q=beef+rib+images&rlz=1C1CHBF_enUS717US717&tbm=isch&source=iu&ictx=1&fir=M-5EIT-efHs1KM%253A%252CJo_Mm0n6hPsmFM%252C_&usg=__sc6kiCJhbdLLcmulsUYB6PU4u9c%3D&sa=X&ved=0ahUKEwjHn5OggdTZAhUVwWMKHUuNC0IQ9QEINTAF#imgrc=M-5EIT-efHs1KM:' )

  ];

  constructor() { }

  ngOnInit() {
  }

}
