import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor() {}

  pageFlipped: any;

  ngOnInit(): void {
    this.pageFlipped = false;
  }

  flipPage() {
    this.pageFlipped = !this.pageFlipped;
    console.log(this.pageFlipped);
  }
}
