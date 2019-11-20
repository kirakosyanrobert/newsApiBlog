import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {countryAction} from '../../redux/filters/filtersAction';

const Header = (props) => {
        return (
            <header>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/">News API Blog</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a
                                        role="button" 
                                        className={props.country === 'ru' ? 'nav-link isActive' : 'nav-link'}
                                        onClick={() => props.changeCountry('ru')}
                                    >
                                        Russia
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        role="button" 
                                        className={props.country === 'us' ? 'nav-link isActive' : 'nav-link'}
                                        onClick={() => props.changeCountry('us')}
                                    >
                                        USA
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        role="button" 
                                        className={props.country === 'it' ? 'nav-link isActive' : 'nav-link'}
                                        onClick={() => props.changeCountry('it')}
                                    >
                                        Italy
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        )
    }

Header.propTypes = {
    country: PropTypes.string
}

const mapStateToProps = state => ({
    country: state.filters.country
})

const mapDispatchToProps = dispatch => ({
    changeCountry: country => dispatch(countryAction(country))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);