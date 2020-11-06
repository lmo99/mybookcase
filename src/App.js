import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';
import data from './models/books.json';
import About from './pages/About';

import 'bootstrap/dist/css/bootstrap.min.css';
// my own CSS has to come after in order to override bootstrap
import './assets/About.css';

const App = (props) => {

  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState('');
  const [bookcaseList, setBookcaseList] = useState([]);

  async function findBooks(value) {
    const results = await

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
    pe=books&projection=lite`).then(res => res.json());

    if (!results.error) {
      setBooks(results.items);
    }
  }

  function addBook(book) {
    setBookcaseList(bookcaseList => [...bookcaseList, book]);
    const newBooks = books.filter(item => item.id !== book.id)
    setBooks(newBooks);
  }

  function removeBook(book) {
    const newBookcaseList = bookcaseList.filter(item => item.id !== book.id)
    setBookcaseList(newBookcaseList);
    setBooks(books => [...books, book]);
  }

  if (books.length === 0){
    return 'No books found';
  }

  return (
    <>
      <BrowserRouter>
        <Route exact path="/" render={() => (
          <>
            <Header bookcaseList={bookcaseList} />
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
            <BookList books={books} buttonFunction={addBook} buttonText="Add +"/>
           
          </>
        )} />
        
        <Route path="/bookcase" render={() => (
          <>
            <Header bookcaseList={bookcaseList} />
            Bookcase
            <BookList books={bookcaseList} buttonFunction={removeBook} buttonText="Remove -"/>
          </>
        )} />

        <Route path="/about" render={() => (
          <>
            <Header bookcaseList={bookcaseList} />
            <About />
          </>
        )} />

      </BrowserRouter>
    </>
  );
}

export default App;
