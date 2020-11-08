import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Search = (props) => {
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.findBooks(props.keyword);
        };
    
    return (
        <Form onSubmit={handleSubmit}>
            <h1>{props.keyword && 'Searching for keyword: ' + props.keyword }</h1>
            <input 
                type="text" 
                value={props.keyword} 
                onChange={(e) =>{props.setKeyword(e.target.value)}} 
            />
            <Button type="submit">
            Submit
            </Button>
        </Form>
    
    );
};

export default Search;