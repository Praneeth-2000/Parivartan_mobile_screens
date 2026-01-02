import React, { useState } from 'react';
import styles from './Testimonials.module.css';
import arkaLogoImg from '../../assets/images/arka.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      schoolName: 'arka school',
      rating: 5,
      content: 'Best service providers.Good coordination with clients.They take care of our school Digital marketing.Very best part of them are photo sessions and videos according to school need.We are happy to have such a great working partners with ARKA.'
    },
    // Adding placeholders based on typical design patterns
    {
      id: 2,
      schoolName: 'global academy',
      rating: 5,
      content: 'Excellent support for our digital identity and promotional campaigns. Their team is professional and understands the education sector deeply.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingBlock}>
        <h2 className={styles.heading}>
          testimonials
          <svg className={styles.underlineSvg} width="220" height="30" viewBox="0 0 220 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 20C70 5 150 5 215 20" stroke="#83C341" strokeWidth="6" strokeLinecap="round"/>
          </svg>
        </h2>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.schoolHeader}>
            <div className={styles.arkaLogoImageWrapper}>
              <img src={arkaLogoImg} alt="Arka International School" className={styles.arkaLogoImage} />
            </div>
          </div>
          
          <h3 className={styles.schoolNameSmall}>{testimonials[currentIndex].schoolName}</h3>
          
          <div className={styles.ratingStars}>
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <span key={i} className={styles.star}>★</span>
            ))}
          </div>

          <p className={styles.content}>
            {testimonials[currentIndex].content}
          </p>
        </div>
      </div>

      <div className={styles.navigation}>
        <button className={styles.navButton} onClick={prevTestimonial} aria-label="Previous testimonial">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className={styles.navButton} onClick={nextTestimonial} aria-label="Next testimonial">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
