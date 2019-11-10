import React, {Component} from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="header__wrapper">
                    <div className="header__logo">
                        <h2>News Blog</h2>
                    </div>
                    <div className="header__navigation">
                        <ul>
                            <li><a href="">GAGAS</a></li>
                            <li><a href="">GAGAS</a></li>
                            <li><a href="">GAGAS</a></li>
                            <li><a href="">GAGAS</a></li>
                            <li><a href="">GAGAS</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;