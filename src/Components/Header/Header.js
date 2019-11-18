import React from 'react';
import './Header.scss';

const Header = () => {
        return (
            <header>
                <nav className="header__wrapper">
                    <div className="header__logo">
                        <h2>Logo</h2>
                    </div>
                    <div className="header__navigation">
                        <ul>
                            <li><a href="#">GAGAS</a></li>
                            <li><a href="#">GAGAS</a></li>
                            <li><a href="#">GAGAS</a></li>
                            <li><a href="#">GAGAS</a></li>
                            <li><a href="#">GAGAS</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }

export default Header;