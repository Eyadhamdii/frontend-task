import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedBook: Book;

  constructor() {
    // Assign a value to the selectedBook property using the Book constructor with all properties
    this.selectedBook = new Book(
      1,
      'Book Title',
      'Author Name',
      2022, // Provide publicationYear
      'Description of the book', // Provide description
      'https://example.com/thumbnail.jpg' // Provide thumbnailUrl
    );
  }
}

class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public publicationYear: number,
    public description: string,
    public thumbnailUrl: string
  ) {}
}