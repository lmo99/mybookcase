import React from 'react';
import PropTypes from 'prop-types';
const Book = (props) => {
 //  let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = props.book;
  const info = props.book.volumeInfo;
//   const description = props.book.volumeInfo.description;
//   const { volumeInfo } = props.book;


//  const { volumeInfo: {title}} = props.book;
 const {volumeInfo: {title, authors, description, imageLinks: {thumbnail}}} = props.book;
 

 const renderAmount = () => {
     if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice.amount) {
         return '£' + props.book.saleInfo.listPrice.amount;
     }
     return 'No price available';
 }

//  function addBook(title) {
//      console.log(`The Book ${title} was clicked`);
//  }
 const  renderAuthors = () => {
     if (authors && authors.length === 1) {
         return authors;
     }
     return authors.map(author => author + ', ');
 }

//  return (
//    <div>
//        <img src= {thumbnail} />
//     <h2>{props.title} - {renderAuthors()}</h2>
//     {/* <h3>{authors.length === 1 ? authors[0] : authors.join(', ')} */}
//     <p>{renderAmount()}</p>
//     <p>{description}</p>
//     <button onClick={() => props.addBook(title)}>Add +</button>
//    </div>
//   );
// }

return (
    <div>
        <img src= {thumbnail} />
     <h2>{title} - {renderAuthors()}</h2>
     {/* <h3>{authors.length === 1 ? authors[0] : authors.join(', ')} */}
     <p>{renderAmount()}</p>
     <p>{description}</p>
     <button onClick={() => props.addBook(title)}>Add +</button>
    </div>
   );
 }

Book.propTypes = {
    book: PropTypes.shape({
        volumeInfo: PropTypes.shape({
            title: PropTypes.string.isRequired
        })
    })
};




 export default Book;

