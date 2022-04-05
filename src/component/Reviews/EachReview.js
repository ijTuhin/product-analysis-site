import React from 'react';
import './Review.css';
const EachReview = ({ review }) => {
    const { name, reviews, ratings } = review;
    return (
        <div className='review-card'>
            <p>Name: {name}</p>
            <p>Review: {reviews}</p>
            <p>Ratings: {ratings} stars</p>
        </div>
    );
};

export default EachReview;