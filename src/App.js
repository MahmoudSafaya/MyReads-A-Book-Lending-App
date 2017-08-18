import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  
  updateBook = (book, shelf) => {
    book.shelf = shelf
	console.log(this.state.books)
	if(this.state.books.indexOf(book) < 0){//It means it is a new book in our shelf
		this.state.books.push(book)
	}
    BooksAPI.update(book, shelf).then(
      this.setState((prevState, props) => {
        return {
          books: prevState.books.map((b) => b.id === book.id ? book : b)
        }
      })
    )
  }

  render() {
    return (
      <div className="app">
	    <Route exact path='/' render={() => (
		  <ListBooks
            books={this.state.books}
			updateBook={this.updateBook}
		  />
  		)}/>

		<Route exact path='/search' render={() => (
		  <SearchBooks
            books={this.state.books}
			updateBook={this.updateBook}		
          />
		)}/>
	  </div>
    )
  }

}

export default BooksApp
