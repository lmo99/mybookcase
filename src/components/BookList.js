import React from 'react';
import Book from './Book';

const BookList = (props) => {
    return (
        <div>
            {props.books.map(book => <Book key={book.id} book={book} buttonFunction={props.buttonFunction} button={props.addBookButton}/>)}
        </div>
    );
};

export default BookList;