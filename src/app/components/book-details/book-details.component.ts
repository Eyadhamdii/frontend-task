import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input() book!: Book;
}