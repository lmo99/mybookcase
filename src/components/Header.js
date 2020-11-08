import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({bookcaseList}) => {
    return (
        <div>
            <br></br>
            <h1>BOOKCASE LIBRARY</h1>
            <Link to="/"> Home </Link>
            <Link to="/bookcase" className="bookLink"> 
                Bookcase ({bookcaseList.length})
            </Link>
            <Link to="/about"> About </Link>
        </div>
    );
}

export default Header