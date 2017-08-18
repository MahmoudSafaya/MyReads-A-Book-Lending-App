import React, { Component } from 'react';

class BookShelf extends Component {

    onBookShelfChange = (e) => {
		e.preventDefault()
		if (this.props.updateBook) {
			//console.log(this.props)
			this.props.updateBook(this.props.book, e.target.value)
		}
    };
  render() {
	 
	const { book } = this.props
	//console.log(book, book.authors)
	if(!book.shelf){
		book.shelf='none'
	}

    return (
	  <li key={book.id}>
		<div className="book">
		  <div className="book-top">
			{book.imageLinks  && ( //Not all books have authors	
				<div className="book-cover" style={{width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}></div>
			)}
			<div className="book-shelf-changer">
			  {book.shelf  && (	
				  <select onChange={this.onBookShelfChange} defaultValue={book.shelf}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				  </select>
			  )}

			</div>				
		  </div>
		  {book.title  && ( //Not all books have authors	
			<div className="book-title">{book.title}</div>
		  )}
		  {book.authors  && ( //Not all books have authors			
			  book.authors.map((author) => (
				<div className="book-authors" key={author}>{author}</div>
		  )))}
		</div>					
	  </li>
	)
  }
}

export default BookShelf
