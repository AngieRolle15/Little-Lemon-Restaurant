
import React from 'react';
import './Card.css';

const Card = ({ image, title, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {price && <p className="card-price">{price}</p>}
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
