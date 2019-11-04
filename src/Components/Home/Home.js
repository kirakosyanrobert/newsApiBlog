import React, {Component} from 'react';
import './Home.scss';
import Axios from '../../Axios';
import Card from '../UI/Card/Card';
import Search from '../UI/Search/Search';

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
        let {posts, loading} = this.state
        return (
           <div className="row">
                <div className="col-md-8">
                    <h1 className="my-4">
                        Page Heading
                        <small>Secondary Text</small>
                    </h1>
                    {
                        !loading
                        ?
                        posts.map((post, index) => {
                            return <Card post={post} key={`post${index}`} />
                        })
                        :
                        'Loading...'
                    }
                </div>
                <div className="col-md-4">
                    <Search />
                </div>
           </div>
        );
    }

}

export default Home;
