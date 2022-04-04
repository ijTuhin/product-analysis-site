import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className='navbar-container'>
                <CustomLink className='navbar' to="/">Home</CustomLink>
                <CustomLink className='navbar' to="/dashboard">Dashboard</CustomLink>
                <CustomLink className='navbar' to="/review">Reviews</CustomLink>
                <CustomLink className='navbar' to="/blogs">Blogs</CustomLink>
                <CustomLink className='navbar' to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;