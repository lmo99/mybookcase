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

  function addBook(title) {
    console.log(`The Book ${title} was clicked`);
    setBookcaseList(bookcaseList => [...bookcaseList, title]);
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
            <BookList books={books} addBook={addBook} />
           
          </>
        )} />
        
        <Route path="/bookcase" render={() => (
          <>
            <Header bookcaseList={bookcaseList} />
            Bookcase
            {bookcaseList.map(book => (
              <div>
                {book}
              </div>
            ))}
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
