import React from 'react';

const SearchBox = ( {searchChange} ) => {
    return(
        <div className='pa2'>
            <input 
                className='pa2 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Robots'
                onChange={searchChange}
                style={{ minWidth: '222px', width: '60vw', marginInline: 'auto' }}
            />
        </div>
    )
}

export default SearchBox;