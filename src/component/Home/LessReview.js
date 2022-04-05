import React from 'react';
import './Home.css';
const LessReview = ({ review }) => {
    const { name, reviews, ratings } = review;
    return (
        <div className='less-review-card'>
            <p>Name: <span>{name}</span></p>
            <p>Review: {reviews}</p>
            <p>Ratings: {ratings} stars</p>
        </div>
    );
};

export default LessReview;