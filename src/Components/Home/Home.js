import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Axios from '../../Axios';
import Loader from '../UI/Loader/Loader';
import Posts from '../UI/Posts/Posts';


const Home = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = async() => {
        setLoading(true); 
        Axios.get(`/top-headlines?country=${props.country}&category=${props.category}&q=${props.query}`)
        .then(res => {
            setPosts(res.data.articles);
            setLoading(false); 
        })
        .catch(err => {
            setLoading(false); 
        })
    }
    
    useEffect(() => {
        getPosts();
    }, [props.country, props.category, props.query])

    return (
        <React.Fragment>
            {
                !loading
                ?
                <Posts posts={posts} />
                :
                <Loader />
            }
        </React.Fragment>
    );
}

Home.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    query: PropTypes.string
}

const mapStateToProps = state => ({
    country: state.filters.country,
    category: state.filters.category,
    query: state.filters.query
})


export default connect(mapStateToProps)(Home);
