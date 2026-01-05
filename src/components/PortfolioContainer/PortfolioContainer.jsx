import React from 'react';
import PortfolioSection from './PortfolioSection';
import ServicesShowcase from './ServicesShowcase';
import Background from '../HomeContainer/Background';
import './PortfolioContainer.css';

const PortfolioContainer = () => {
    return (
        <div className="portfolio-container" style={{ width: '100%', position: 'relative' }}>
            <Background />
            <div className="portfolio-hero">
                <h1 className="portfolio-hero-title">
                    <span className="title-line-1">
                        website design <span className="normal-text">that</span>
                        <svg className="underline-svg" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5,15 Q80,5 195,12" fill="none" stroke="#5ca32a" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </span>
                    <span className="title-line-2">inspires change</span>
                </h1>
            </div>
            <div id="portfolio-section-container">
                <PortfolioSection />
            </div>
            <div id="services-showcase-container">
                <ServicesShowcase />
            </div>
        </div>
    );
};

export default PortfolioContainer;
