import React from 'react';
import './../Reviews/Review.css';
const LessReview = ({ review }) => {
    const { name, reviews, ratings } = review;
    return (
        <div className='review-card'>
            <p>Name: {name}</p>
            <p>Review: {reviews}</p>
            <p>Ratings: {ratings} stars</p>
        </div>
    );
};

export default LessReview;