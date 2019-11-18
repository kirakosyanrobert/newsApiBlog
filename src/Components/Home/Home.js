import React, {Component} from 'react';
import './Home.scss';
import {connect} from 'react-redux';
import Axios from '../../Axios';
import Loader from '../UI/Loader/Loader';
import Card from '../UI/Card/Card';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: null
        }
    }

    getPosts = () => {
        this.setState({
            loading: true
        })
        Axios.get(`everything?q=${this.props.query}`)
        .then(res => {
            this.setState({
                posts: res.data.articles,
                loading: false
            })
        })
        .catch(err => {
            this.setState({
                loading: false
            })
        })
    }
    componentDidMount () {
        this.getPosts();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.query !== this.props.query) {
            this.getPosts();
        }
    }

    render() {
        let {posts, loading} = this.state;
        return (
            <div className="home__main">
                {
                    !loading
                    ?
                    posts.map((post, index) => {
                        return <Card post={post} key={`post${index}`} />
                    })
                    :
                    <Loader />
                }
            </div>
        );
    }

}

const mapStateToProps = state => ({
    query: state.search.value
})


export default connect(mapStateToProps)(Home);
