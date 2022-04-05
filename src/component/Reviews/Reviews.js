import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faBarChart } from '@fortawesome/free-solid-svg-icons'
import useReview from '../../hooks/useReview';
import EachReview from './EachReview';
import './Review.css';
const Reviews = () => {
    //Load data 
    const [reviews, setReviews] = useReview();

    return (
        <div className='reviews'>
            <h2><span style={{ color: "#6b2f66" }}><FontAwesomeIcon icon={faBarChart}></FontAwesomeIcon></span> Customer <span style={{ color: "#87a353" }}>Reviews  <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon></span></h2>
            <div className='review-container'>
                {
                    reviews.map(review => <EachReview
                        key={review.id}
                        review={review}
                    ></EachReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;