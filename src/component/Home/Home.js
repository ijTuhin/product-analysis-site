import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import img from './../../img.jpg';
import './Home.css';
const Home = () => {
    return (
        <div className='home-page'>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className='heading-text'>
                    <h1>Some <span style={{ color: "goldenrod" }}>Project</span> Name</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nisi ipsum, maxime delectus porro quas aut assumenda blanditiis aperiam ad provident mollitia repellat quis harum nobis earum commodi dolorem ratione quos optio voluptatem. Architecto cumque, amet suscipit ab doloribus quae impedit aperiam nisi eum rem sapiente aspernatur! Quasi quis, earum dolorem quos, quibusdam minus consectetur autem, neque voluptatum et nam.</p>
                </div>
                <img src={img} alt="img" />
            </div>
            <div className='review-btn-container'>
                <button className='review-btn'><span>See all reviews</span><FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Home;