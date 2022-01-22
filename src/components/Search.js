import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
import { debounce } from 'lodash';

class Search extends Component {

  state = {
    searchQuery: '',
		showingBooks: []
  }

 	componentWillMount() {
    this.bookSearch = debounce(this.bookSearch,100);
  }
  
  bookSearch = (query) => {
    if(query) {
      this.setState({ searchQuery : 'searching' })
      BooksAPI.search(query, 20).then((data) => {
        if (data) {
          if(!data.error){
            data = data.map((book) => {
                const bookInShelf = this.props.books.find(b => b.id === book.id);
                if (bookInShelf) {
                    book.shelf = bookInShelf.shelf;
                }
                return book;
            });
            this.setState({ searchQuery : 'full data', showingBooks : data })
          } else {
            this.setState({ searchQuery : 'error', showingBooks : data.error })
          }
        } 
      })
    }else{
	    this.setState({ searchQuery : 'empty data', showingBooks: [] })
	
	}
  }

  render() {
	  
		const { updateShelf} = this.props
    const { searchQuery , showingBooks } = this.state
    return (
			<div className="search-books">
			<div className="search-books-bar">
				<Link className="close-search" to='/'>Close</Link>
				<div className="search-books-input-wrapper">
				<input 
					onChange={(event) => this.bookSearch(event.target.value)}
					type="text" 
					placeholder="Search by title or author"
				/>
				
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{searchQuery === 'searching' &&( 
					<div className="search-book-results-msg">Searching...</div>
				)}
					{searchQuery === 'empty data' &&( 
					<div className="search-book-results-msg"></div>
				)}
					{searchQuery === 'error' && showingBooks === 'empty query' &&( 
					<div className="search-book-results-msg">No results</div>
				)}
				{searchQuery === 'full data' &&(
					showingBooks.map((book) => (
						<Book key={book.id} book={book}	updateShelf={updateShelf} />
					))
				)}
				</ol>
			</div>
			</div>
    )
  }
}

export default Search
