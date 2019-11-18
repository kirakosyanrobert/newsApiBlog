import React, {useState} from 'react';
import './Search.scss';
import {connect} from 'react-redux';
import {searchSubmit} from '../../../redux/actions/searchAction';

const Search = (props) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchSubmit(value);
    }
    return (
        <form className="search__form" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <input type="text"
                    className="form-control"
                    placeholder="What you search ?"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}

const mapStateToProps = state => ({
    value: state.search.value
});

const mapDispatchToProps = dispatch =>  ({
    searchSubmit: (value) => dispatch(searchSubmit(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);