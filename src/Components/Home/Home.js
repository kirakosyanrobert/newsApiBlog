import React, {Component} from 'react';
import './Home.scss';
import Axios from '../../Axios';
import Loader from '../UI/Loader/Loader';
import Card from '../UI/Card/Card';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true
        }
    }
    componentDidMount () {
        Axios.get(`everything?q=bit`)
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

    render() {
        let {posts, loading} = this.state;
        return (
                <div className="home__main">
                    HomePage
                    {
                        // !loading
                        // ?
                        // posts.map((post, index) => {
                        //     return <Card post={post} key={`post${index}`} />
                        // })
                        // :
                        // <Loader />
                    }
                </div>
        );
    }

}

export default Home;
