import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Profile(){
    return(
        <section className="profile">
            <img src="./assets/icon.jpg" className="photo-icon" alt="profile-image"/>
            <h3>Shourya</h3>
            <h4>shourya.website.com</h4>
            <div className="social-buttons">
                <button className="twitter-icon"><img src="./assets/twitter-icon.svg"/>twitter</button>
                <button className="github-icon"><img src="./assets/github-icon.svg"/>github</button>
            </div>
        </section>
    )
}