import React, { useState, useRef } from 'react';
import styles from './MiddleCards.module.css';

// Import logos
import client1Logo from '../assets/logos/Client 1.png';
import client3Logo from '../assets/logos/Client 3.png';
import client4Logo from '../assets/logos/Client 4.png';
import client5Logo from '../assets/logos/Client 5.png';
import client7Logo from '../assets/logos/Client 7.png';
import client8Logo from '../assets/logos/Client 8.png';

// Card 1: Digital Marketing with Client Carousel
export const DigitalMarketingCard = () => {
  const topLogos = [
    { id: 't1', name: 'Client 1', logo: client1Logo },
    { id: 't3', name: 'Client 3', logo: client3Logo },
    { id: 't4', name: 'Client 4', logo: client4Logo },
    { id: 't5', name: 'Client 5', logo: client5Logo },
  ];

  const bottomLogos = [
    { id: 'b1', name: 'Client 7', logo: client7Logo },
    { id: 'b2', name: 'Client 8', logo: client8Logo },
  ];

  // Adjust density to be between 1x and 2x to avoid overlap but minimize gap
  const displayTopLogos = [...topLogos, ...topLogos.slice(0, 4)];
  const displayBottomLogos = [...bottomLogos, ...bottomLogos, ...bottomLogos];

  // Manual Scroll State
  const [scrollProgress, setScrollProgress] = useState(0);
  const isDragging = useRef(false);
  const lastTouchX = useRef(0);

  const handleTouchStart = (e) => {
    isDragging.current = true;
    lastTouchX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    const delta = currentX - lastTouchX.current;
    
    // Sensitivity factor: how much % to move per pixel
    // Moving finger Left (negative delta) -> Should move content Left (increase offset-distance on R->L path)
    // Path goes from Right (0%) to Left (100%).
    // So swipe Left (-delta) should Increase progress.
    setScrollProgress((prev) => prev - delta * 0.15);
    
    lastTouchX.current = currentX;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // Helper to calculate styles based on progress
  const getCardStyle = (index, total) => {
    const spacing = 100 / total;
    let rawPos = (spacing * index + scrollProgress) % 100;
    if (rawPos < 0) rawPos += 100;

    // Calculate scale and opacity to mimic the previous CSS animation
    // 0% -> scale 0.85, opacity 0.6
    // 50% -> scale 1.1, opacity 1
    // 100% -> scale 0.85, opacity 0.6

    let scale = 0.85;
    if (rawPos <= 50) {
      scale = 0.85 + (0.25 * (rawPos / 50));
    } else {
      scale = 1.1 - (0.25 * ((rawPos - 50) / 50));
    }

    let opacity = 0.6;
    if (rawPos < 15) {
      opacity = 0.6 + (rawPos / 15) * 0.2; // 0.6 -> 0.8
    } else if (rawPos < 50) {
      opacity = 0.8 + 0.2 * ((rawPos - 15) / 35); // 0.8 -> 1.0
    } else if (rawPos < 85) {
      opacity = 1 - 0.2 * ((rawPos - 50) / 35); // 1.0 -> 0.8
    } else {
      opacity = 0.8 - 0.2 * ((100 - rawPos) / 15); // 0.8 -> 0.6
    }

    return {
      '--offset-pos': `${rawPos}%`,
      opacity: opacity,
      transform: `scale(${scale})`,
      zIndex: Math.round(opacity * 100),
    };
  };

  return (
    <div className={styles.cardContainer}>
      <p className={styles.accentText}>digital marketing</p>
      
      <div 
        className={styles.carouselContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.carouselTrack}>
          {displayTopLogos.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`${styles.logoCard} ${styles.topCard}`}
              style={getCardStyle(index, displayTopLogos.length)}
            >
              {item.logo ? (
                <img src={item.logo} alt={item.name} className={styles.logoImage} />
              ) : (
                <span className={styles.logoPlaceholder}>{item.name}</span>
              )}
            </div>
          ))}
          {displayBottomLogos.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`${styles.logoCard} ${styles.bottomCard}`}
              style={getCardStyle(index, displayBottomLogos.length)}
            >
              {item.logo ? (
                <img src={item.logo} alt={item.name} className={styles.logoImage} />
              ) : (
                <span className={styles.logoPlaceholder}>{item.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingCard;
