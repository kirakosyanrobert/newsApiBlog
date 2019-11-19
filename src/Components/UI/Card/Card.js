import React, {useState} from 'react';
import propTypes from 'prop-types';
import './Card.scss';

const Card = ({post}) => {
    return (
        <div className="card mb-4">
            <img className="card-img-top"
                src={post.urlToImage}
                alt={post.title}
            />
            <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-text">{post.description}</p>
                <a href="#" className="btn btn-primary">Read More &rarr;</a>
            </div>
            <div className="card-footer text-muted">
                Posted on January 1, 2017 by
                <a href="#"> {post.author}</a>
            </div>
        </div>
    )
}


Card.propTypes = {
    post: propTypes.exact({
        author: propTypes.string,
        content: propTypes.string,
        description: propTypes.string.isRequired,
        publishedAt: propTypes.string,
        source: propTypes.object,
        title: propTypes.string.isRequired,
        url: propTypes.string,
        urlToImage: propTypes.string.isRequired,
    }), 
}

export default Card;

