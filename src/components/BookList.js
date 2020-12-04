import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Book from './Book';

const BookList = (props) => {
    const bookListLength = props.books.length
    const itemsPerPage = 5
    const numberOfPages = Math.ceil(bookListLength / itemsPerPage)
    const [pageNumber, setPageNumber] = useState(1);
    let pageNumbers = createPageNumbers();

    let slicedBookList = []
    let arrayPosition = 0
    for(let i=0;i<numberOfPages;i++){
        slicedBookList.push(props.books.slice(arrayPosition, (arrayPosition + itemsPerPage)))
        arrayPosition +=itemsPerPage
    }
    function createPageNumbers() {
        let active = pageNumber;
        let items = []
        for(let number =1;number<=numberOfPages; number++){
            items.push(
                <Pagination.Item key={number}active={number===active} onClick={(e) => updatePageNumber(e.target.text)}>
                    {number}
                </Pagination.Item>
            );
        }
        return items
    }

    function updatePageNumber(number){
        if(parseInt(number)){
            setPageNumber(parseInt(number))
            createPageNumbers()
        }
        else{}
    }

    return(
        <div>
            <Pagination>{pageNumbers}</Pagination>
            {slicedBookList[(pageNumber -1)].map(book =><Book key={book.id}
        book={book}buttonFunction={props.buttonFunction}buttonText={props.buttonText}/>)}
        </div>

    );
            };
//     const [pageNumber, setPageNumber] = useState(0);
//     let active = pageNumber+1;
//     let items = [];
//     for (let number = 1; number <= 5; number++) {
//         items.push(
//             <Pagination.Item key={number} active={number === active}>
//                 {number}
//             </Pagination.Item>
//         );
//     }

//     return (
//         <div>
//             <Pagination>{items}</Pagination>
//         {console.log(slicedBookList)}
//             {slicedBookList[0].map(book => <Book key={book.id} book={book} buttonFunction={props.buttonFunction} buttonText={props.buttonText}/>)}
//         </div>
//     );
// };

export default BookList;