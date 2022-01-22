import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Home from './components/Home'
import Search from './components/Search'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  async componentDidMount() {
    const books = await BooksAPI.getAll();
      this.setState({ books })
  }
  
  updateShelf = (book, shelf) => {
    book.shelf = shelf
    if(this.state.books.findIndex(({id}) => id === book.id)){
      this.setState((prevState, props) => {
        return{
          books: prevState.books.concat(book)
        }
      })
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
          <Home books={this.state.books} updateShelf={this.updateShelf} />
        )}/>

        <Route exact path='/search' render={() => (
          <Search books={this.state.books} updateShelf={this.updateShelf}	/>
        )}/>
      </div>
    )
  }

}

export default BooksApp
