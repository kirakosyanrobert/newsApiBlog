import React from 'react';
import './Posts.scss'
import Card from '../UI/Card/Card';


export default ({posts}) => {
    if(!posts.length) {
       return <h1>There Are No Posts Found</h1>
    }
    return  posts.map((post, index) => {
                return <Card post={post} key={`post${index}`} />
            })
}
