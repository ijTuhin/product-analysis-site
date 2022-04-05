import React from 'react';
import './Review.css';
const EachReview = ({ review }) => {
    const { name, reviews, ratings } = review;
    return (
        <div className='review-card'>
            <p>Name: <span id='review-user-name'>{name}</span></p>
            <p>Review: <span id='review-txt'>{reviews}</span></p>
            <p>Ratings: {ratings} stars</p>
        </div>
    );
};

export default EachReview;