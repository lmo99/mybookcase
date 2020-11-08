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
        <br></br>
     <h2><strong>{title} - {renderAuthors()}</strong></h2>
     <img src= {thumbnail} />
     {/* <h3>{authors.length === 1 ? authors[0] : authors.join(', ')} */}
     <p>{renderAmount()}</p>
     <p>{description}</p>
     <button onClick={() => props.buttonFunction(props.book)}>{props.buttonText}</button>
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

