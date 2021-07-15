import React from 'react';

export const Header = ({ setKeyword }) => {

    const handleSearch = () => {
        const search = document.querySelector('input[type="search"]').value;
        setKeyword(search);
    }

    return (
        <div className="header__site-top">
            <div className="header__site-header clearfix">
                <div className="container">
                    <div>
                        <a href="#" className="header__site-brand pull-left"><strong>GIFFY</strong> Free Gifs Searching App</a>
                    </div>
                    <div className="header__auth-items">
                        <a href="#">Login</a>
                        <a href="#">Register</a>
                    </div>
                </div>
            </div> 
            <div className="site-banner">
                <div className="container">
                    <div className="row header__search-gif">
                        <input type="search" placeholder="Search ..." />
                        <button className="button white" onClick={ handleSearch }> Search </button>                        
                    </div>
                </div>
            </div> 
        </div>
    )
}