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
                    <h1>The <span style={{ color: "goldenrod" }}>Hook-Up</span> Company</h1>
                    <p>It's not by chance, that for the past 3 years we have consistently been awarded for delivering customer service excellence by Feefo. Our commitment to customer service has been reflected in the quality and efficiency of our work. Recently awarded the 2022 Feefo Platinum Trusted Service Award, our 2700+ live customer reviews set us apart as the leading provider of business IT support.
                        Our market leading Managed IT Support services are accredited by some of the world’s leading IT vendors, such as Microsoft, Cisco, Cisco Meraki and Sophos. We have a specialist internal IT Consultancy and Cyber security consultancy team to enable us deliver a full service managed service offering to improve your business performance. Our flexible range of contracts, give you peace of mind that your IT support business needs are managed efficiently.  Whether operating from the office, remotely, or functioning as a hybrid, we ensure the seamless functioning of your entire workforce
                    </p>
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