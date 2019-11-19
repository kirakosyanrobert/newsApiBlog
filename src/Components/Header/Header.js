import React from 'react';
import './Header.scss';
import {connect} from 'react-redux';
import {countryAction} from '../../redux/filters/filtersAction';

const Header = (props) => {
        return (
            <header>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">News API Blog</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" role="button" href="#" onClick={() => props.changeCountry('ru')}>Russia</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" role="button" href="#" onClick={() => props.changeCountry('jp')}>Japan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" role="button" href="#" onClick={() => props.changeCountry('it')}>Italy</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        )
    }

const mapStateToProps = state => ({
    country: state.filters.country
})

const mapDispatchToProps = dispatch => ({
    changeCountry: country => dispatch(countryAction(country))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);