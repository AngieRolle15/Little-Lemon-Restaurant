import React from 'react';
import './Card.css';
import { FaStar } from 'react-icons/fa'; 

const TestimonialsCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <div className="testimonial-header">
        <img src={testimonial.image} alt={testimonial.name} className="person-image" />
        <span className="person-name">{testimonial.name}</span>
      </div>
      <p className="testimonial-description">{testimonial.content}</p>
    </div>
  );
};

export default TestimonialsCard;