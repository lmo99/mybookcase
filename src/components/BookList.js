import React from 'react';
import Book from './Book';

const BookList = (props) => {
    const bookListLength = props.books.length
    const itemsPerPage = 5
    const numberOfPages = bookListLength / itemsPerPage

    // IN THE PROCESS OF PAGINATING- COMMENTED OUT TO NOT BREAK MY CODE!
    //const slicedBookList = []
    // for(let i = 0; i < numberOfPages; i++) {
    //     slicedBookList.push(props.books.slice(0, itemsPerPage))
    //     props.books.splice(0, itemsPerPage)
    //     console.log(i)
    //     console.log(slicedBookList)
    //     console.log(props.books)
    // }
    

    return (
        <div>
            {props.books.map(book => <Book key={book.id} book={book} buttonFunction={props.buttonFunction} buttonText={props.buttonText}/>)}
        </div>
    );
};

export default BookList;