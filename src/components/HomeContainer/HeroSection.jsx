import React from 'react';
import './HeroSection.css';
import underlineStroke from '../../assets/Vector76.svg';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="title-line-1">
                        website design <span className="normal-text">that</span>
                        <img src={underlineStroke} alt="" className="underline-svg" />
                    </span>
                    <span className="title-line-2">inspires change</span>
                </h1>

                <button className="cta-button">
                    get free website audit
                </button>

                <a href="#portfolio" className="portfolio-link">
                    view portfolio
                    <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
