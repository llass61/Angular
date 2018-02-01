import { Component, OnInit, Input } from '@angular/core';
//import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input('rating-value') rating = 0;
  @Input() numOfReviews = 0;

  constructor() { }

  onClick(ratingValue)
  {
    this.rating = ratingValue;
  }

  ngOnInit() {
  }

}
