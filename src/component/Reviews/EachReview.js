import React from 'react';
import './Review.css';
const EachReview = ({ review }) => {
    const { name, reviews, ratings } = review;
    console.log(review);
    return (
        <div className='review-card'>
            <p>Name: {name}</p>
            <p>Review: {reviews}</p>
            <p>Ratings: {ratings}</p>
        </div>
    );
};

export default EachReview;