import React from 'react';
import Book from './Book';

const BookList = (props) => {
    return (
        <div>
            {/* {props.children} */}
            {props.books.map(book => <Book key={book.id} book={book} addBook={props.addBook} />)}
        </div>
    );
};

export default BookList;