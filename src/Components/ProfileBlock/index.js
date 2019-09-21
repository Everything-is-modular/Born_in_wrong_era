import React from 'react';
import './style.css';
import hero from './../../assets/hero.png';
import profileBg from './../../assets/profile_bg.jpg';

const ProfileBlock = () => {
    return(
        <div className="profile-block" style={{backgroundImage: `url(${profileBg})`}}>
            <div className="profile-info">
                <div>HELLO, I’M</div>
                <div>MARK PARKER</div>
                <div>A Freelance UI Designer &amp; Web Developer</div>
                <button>View my work</button>
            </div>
            
            <img src={hero} alt="person" className="profile-img" />
        </div>
    );
}

export default ProfileBlock;