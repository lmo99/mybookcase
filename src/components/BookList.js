import React from 'react';
import Book from './Book';

const BookList = (props) => {
    return (
        <div>
            {props.books.map(book => <Book key={book.id} book={book} buttonFunction={props.buttonFunction} buttonText={props.buttonText}/>)}
        </div>
    );
};

export default BookList;