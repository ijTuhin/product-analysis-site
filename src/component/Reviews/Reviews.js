import React, { useEffect, useState } from 'react';
import useReview from '../../hooks/useReview';
import EachReview from './EachReview';
import './Review.css';
const Reviews = () => {
    //Load data
    const [reviews, setReviews] = useReview();

    return (
        <div className='review-container'>
            {
                reviews.map(review => <EachReview
                    key={review.id}
                    review={review}
                ></EachReview>)
            }
        </div>
    );
};

export default Reviews;