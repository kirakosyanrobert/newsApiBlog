import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';


const Posts = ({posts}) => {
    if(!posts.length) {
       return <h1>There Are No Posts Found</h1>
    }
    return  posts.map((post, index) => {
                return <Card post={post} key={`post${index}`} />
            })
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
}

export default Posts;
