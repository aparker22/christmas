import React from 'react';
import styles from './home.css'
import Header from '../../header/header';
import family from '../photos/family.jpg'

const Home = () => {
    return (
        <div className="home-container">
            <Header/>
            <div className="header-content">
                <h1 className="header-text">Merry Christmas Mimi and Granddaddy!</h1>
                <h3 className="header-text">We Love you!</h3>
                <img src={family} alt="family" className="header-img" />
            </div>
        </div>)
};

export default Home;