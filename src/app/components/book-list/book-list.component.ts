import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: Book[];

  @Output() bookSelected = new EventEmitter<Book>();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  selectBook(book: Book): void {
    this.bookSelected.emit(book);
  }
}