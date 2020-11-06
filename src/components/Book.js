import React from 'react';
import PropTypes from 'prop-types';
const Book = (props) => {
 //  let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: {amount}}} = props.book;
  const info = props.book.volumeInfo;

 const {volumeInfo: {title, authors, description, imageLinks: {thumbnail}}} = props.book;
 
 const renderAmount = () => {
     if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice.amount) {
         return '£' + props.book.saleInfo.listPrice.amount;
     }
     return 'No price available';
 }

 const  renderAuthors = () => {
     if (authors && authors.length === 1) {
         return authors;
     }
     return authors.map(author => author + ', ');
 }

return (
    <div>
        <img src= {thumbnail} />
     <h2>{title} - {renderAuthors()}</h2>
     {/* <h3>{authors.length === 1 ? authors[0] : authors.join(', ')} */}
     <p>{renderAmount()}</p>
     <p>{description}</p>
     {props.button}
     {/* line 30 may be unnecessary or need to figure out why theres not two buttons */}
     <button onClick={() => props.buttonFunction(props.book)}>Add +</button>
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

