import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {


  render() {
	  
		const { books, updateShelf } = this.props
    return (
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map((book) => (
						<Book key={book.id} book={book}	updateShelf={updateShelf} />
					))}
				</ol>
			</div>    
		)
  }
}

export default BookShelf
