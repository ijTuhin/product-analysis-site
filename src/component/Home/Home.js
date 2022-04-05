import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import img from './../../img.jpg';
import './Home.css';
import useReview from '../../hooks/useReview';
import { useNavigate } from 'react-router-dom';
import LessReview from './LessReview';
const Home = () => {
    const [reviews, setReviews] = useReview();
    const navigate = useNavigate();
    return (
        <div className='home-page'>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "70px" }}>
                <div className='heading-text'>
                    <h1>Some <span style={{ color: "goldenrod" }}>Project</span> Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nisi ipsum, maxime delectus porro quas aut assumenda blanditiis aperiam ad provident mollitia repellat quis harum nobis earum commodi dolorem ratione quos optio voluptatem. Architecto cumque, amet suscipit ab doloribus quae impedit aperiam nisi eum rem sapiente aspernatur! Quasi quis, earum dolorem quos, quibusdam minus consectetur autem, neque voluptatum et nam.</p>
                </div>
                <img src={img} alt="img" />
            </div>
            <h1 style={{ textAlign: "center" }}>What our customers say?</h1>
            <div className='less-review-container'>
                {
                    reviews.slice(0, 3).map(review => <LessReview
                        key={review.id}
                        review={review}
                    ></LessReview>)
                }
            </div>
            <div className='review-btn-container'>
                <button onClick={() => navigate('/review')} className='review-btn'><span>See all reviews</span><FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Home;