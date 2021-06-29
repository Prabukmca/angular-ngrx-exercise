import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-collections',
  templateUrl: './book-collections.component.html',
  styleUrls: ['./book-collections.component.scss']
})
export class BookCollectionsComponent implements OnInit {
  @Input() books: Book[] = [];
  @Output() remove = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
