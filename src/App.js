import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import BookDetails from './BookDetails';
import Library from './Library';
import OpenSearch from './OpenSearch';
import SearchBook from './SearchBook';

import * as BooksAPI from './BooksAPI';
import './App.css';
import './Responsive.css';
import './Animation.css';

class App extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    stack: [],
    searchQuery: [],
    searchStr: '',
    bookDetails: [],
    searchResults: []
  };

  // Update the book stack
  updateStack = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        stack: books
      });
    }).catch(error => console.log(error));
  };

  // Query BooksAPI
  searchResult = (query) => {
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({
            searchQuery: [],
            searchStr: books.error
          });
        } else {
          // sync function of shelf status in 'search' view
          this.syncShelf(books);
          this.setState({
            searchQuery: books
          });
        }
      }).catch(error => console.log(error));
      this.setState(
        {searchStr: query}
      );
    } else {
      this.setState({
        searchQuery: []
      });
      this.setState({
        searchStr: ''
      });
    }
  };

  // Update the book shelf
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      console.log(`Moved "${book.title}" to "${shelf}" ID shelf`);
      this.updateStack();
    }).catch(error => console.log(error));
  };

  // Synchronize the book shelf
  syncShelf = (books) => {
    books.map(book => (
      this.state.stack.filter(
        (b) => b.id === book.id)
      .map(b => book.shelf = b.shelf)
      )
    )
  };

  componentDidMount() {
    this.updateStack();
  };

  // Show book details
  showDetails = (book) => {
    this.setState({
      bookDetails: book 
    });
  };

  // Close book details
  closeDetails = () => {
    this.setState({
      bookDetails: []
    });
  };

  render() {
    const { stack, searchQuery, searchStr, bookDetails } = this.state;

    return (
      <div className="app">
        <Header />

        {bookDetails.length !== 0 && (
          <BookDetails
            book={bookDetails}
            closeDetails={this.closeDetails}
          />
        )}

        <Route path={process.env.PUBLIC_URL + "/"} exact render={() => (
          <main className="list-books">
            <Library
              books={stack}
              updateShelf={this.updateShelf}
              showDetails={this.showDetails}
            />
            <OpenSearch />
          </main>

        )}/>

        <Route path={process.env.PUBLIC_URL + "/search"} render={() => (
          <main>
          <SearchBook
            books={searchQuery}
            selectedBooks={stack}
            query={searchStr}
            updateQuery={this.searchResult}
            updateShelf={this.updateShelf}
            showDetails={this.showDetails}
          />
        </main>
        )}/>

        <Footer />
      </div>
    )
  }
}

export default App
