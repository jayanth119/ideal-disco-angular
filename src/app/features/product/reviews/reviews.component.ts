import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/reviewModel';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  @Input() review: any | Review  ;

  constructor() {}

  formatDate(dateStr: string | undefined) {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString();
    } catch {
      return dateStr;
    }
  }

  ngOnInit(): void {}
}
