import React from 'react';

const Directory = () => {
    return (
        <div className="directory">
            <div className="container">
                <div className="row">
                    <div className="searchbar__wrapper">
                        <div className="searchbar__container">
                        <input 
                        type="search" 
                        className='searchbar'
                        placeholder='Search your favorites!'
                        aria-label='search'
                        />
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Directory;