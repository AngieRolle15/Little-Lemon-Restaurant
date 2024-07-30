import React from 'react';
import Card from './Card';
import './Card.css';

const SpecialsCard = ({ special }) => {
  return (
    <div className="card-container">
      <Card 
        image={special.image}
        title={special.title}
        description={special.description}
        price={special.price}
      />
    </div>
  );
};

export default SpecialsCard;