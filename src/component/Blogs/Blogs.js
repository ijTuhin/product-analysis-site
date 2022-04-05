import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faBarChart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blog-container'>
            <h1> <FontAwesomeIcon icon={faBarChart}></FontAwesomeIcon> <span style={{ color: "goldenrod" }}>Question</span> <span style={{ color: "rgba(64, 26, 56, 0.7)" }}>Answer</span></h1>
            <h3>What is Context API ?</h3>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. It is primarily used when some data needs to be accessible by many components at different nesting levels. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.. Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree. It means, context API let a a component pass the very nested component of deep level without the help of it's upper level.</p>
            <hr />
            <h3>What is semantic tag?</h3>
            <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way, it also makes it easier to both the browser and the developer to understand the code. Elements such as &lt;header&gt; , &lt;footer&gt; and &lt;article&gt; are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.Dec</p>
        </div>
    );
};

export default Blogs;