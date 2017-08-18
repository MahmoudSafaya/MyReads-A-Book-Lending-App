import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {


  render() {
	  
	const { books, updateBook } = this.props
  	console.log(books)
    return (
	  <div className="bookshelf-books">
	  	<ol className="books-grid">
		  {books.map((book) => (
			<Book 
				key={book.id}
				book={book}
				updateBook={updateBook}
			/>
		  ))}
		</ol>
	  </div>    
	)
  }
}

export default BookShelf
