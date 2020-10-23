import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';
import data from './models/books.json';
import About from './pages/About';

import 'bootstrap/dist/css/bootstrap.min.css';
// my own CSS has to come after in order to override bootstrap

const App = (props) => {

  const [books, setBooks] = useState(data);
  const [ keyword, setKeyword ] = useState('');

async function findBooks(value) {
 const results = await
fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
pe=books&projection=lite`).then(res => res.json());
 if (!results.error) {
 setBooks(results.items);
 }
}

  // function addBook(title) {
  //   console.log(`The Book ${title} was clicked`);
  //   setBooks(books)
  // }
  function addBook(title) {
    console.log(`The Book ${title} was clicked`);
  }
  

  if (books.length === 0){
    return 'No books found';
  
  }
  return (
    <>
      <BrowserRouter>
        <Route path="/" render={() => (
        <>
          <Header />
          <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
          <BookList books={books} addBook={addBook} />
        </>
        )} />
        
      <Route path="/bookcase" render={() => (
        <>
          <Header />
        </>
      )} />

      <Route path="/about" render={() => (
        <>
          <Header />
          <About />
        </>
      )} />

      </BrowserRouter>
    </>

      // <div>
      //   <BookList books={books} addBook={addBook} />
      //     {/* {books.map(book => <Book key={book.id} book={book}/>)} */}
      // </div>
      // <BookList>
      //   <p>Hello I'm a book</p>
      //   <p>Hello I'm a book</p>
      //   <p>Hello I'm a book</p>
      // </BookList>
  );
}

export default App;
