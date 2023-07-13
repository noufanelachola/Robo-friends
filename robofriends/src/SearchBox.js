import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa3 tc'>
            <input 
                type='search' 
                placeholder='Search robo friends' 
                className='bg-light-green pa2  ba3 b--green'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;