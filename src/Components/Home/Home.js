import React, {useState, useEffect} from 'react';
import './Home.scss';
import {connect} from 'react-redux';
import Axios from '../../Axios';
import Loader from '../UI/Loader/Loader';
import Posts from '../Posts/Posts';


const Home = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = async() => {
        setLoading(true); 
        Axios.get(`?country=${props.country}&category=${props.category}&q=${props.query}`)
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

const mapStateToProps = state => ({
    country: state.filters.country,
    category: state.filters.category,
    query: state.filters.query
})


export default connect(mapStateToProps)(Home);
