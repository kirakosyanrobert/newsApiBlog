import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Axios from '../../../Axios';

const Widget = (props) =>  {
    const [sources, setSource] = useState([]);
    const getSource = async () => {
        try {
            const res = await Axios.get(`/sources?country=${props.country}`);
            setSource(res.data.sources.splice(0, 5));
        } catch (err) {
            console.log(err.message);
        }
       
    }

    useEffect(() => {
        getSource();
    }, [props.country])

    return (
        <div className="card my-4">
            <h5 className="card-header">Side Widget</h5>
            <div className="card-body">
                <div className="list-group">
                    {sources.length 
                        ?
                            sources.map((source, index) => {
                                return (
                                        <a key={source.id + index} target="_blank"  href={source.url} 
                                            className="list-group-item list-group-item-action"
                                        >
                                            <p className="mb-1">{source.description}</p>
                                            <span className="badge badge-primary">
                                                {source.category}
                                            </span>
                                        </a>
                                        ) 
                            })
                        :
                            null
                    }
                </div>
            </div>
        </div>
    )
}

Widget.prototypes = {
    country: PropTypes.string
}

const mapStateToProps = state => ({
    country: state.filters.country,
})
export default connect(mapStateToProps)(Widget);