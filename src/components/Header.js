import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({bookcaseList}) => {
    return (
        <div>
            <h1>My Bookcase</h1>
            <Link to="/"> Home </Link>
            <Link to="/bookcase" className="bookLink"> 
                Bookcase ({bookcaseList.length})
            </Link>
            <Link to="/about"> About </Link>
        </div>
    );
}

export default Header