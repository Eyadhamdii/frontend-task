import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedBook: Book;

  constructor() {
    // Assign a value to the selectedBook property
    this.selectedBook = new Book(1, 'Book Title', 'Author Name');
  }
}

class Book {
  // Define the properties of the Book entity
  constructor(
    public id: number,
    public title: string,
    public author: string
    // ... other properties
  ) {}
}