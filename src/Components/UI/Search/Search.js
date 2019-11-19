import React, {useState} from 'react';
import './Search.scss';
import {connect} from 'react-redux';
import {queryAction} from '../../../redux/filters/filtersAction';

const Search = (props) => {
    const [value, setValue] = useState(props.query);
    return (
        <div className="card my-4">
            <h5 className="card-header">Search</h5>
            <div className="card-body">
            <div className="input-group">
                <input type="text"
                    className="form-control"
                    placeholder="Search for..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <span className="input-group-btn">
                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => props.changeQuery(value)}
                     >
                         Go!
                    </button>
                </span>
            </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => ({
    query: state.filters.query
});

const mapDispatchToProps = dispatch =>  ({
    changeQuery: (query) => dispatch(queryAction(query))
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);