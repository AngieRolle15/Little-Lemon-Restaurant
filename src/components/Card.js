import React from 'react';
import './Main.css';

const Card = ({specials}) => {
return(
    <div className="card-container">
{specials.map((special) => (
     <div key={special.id} className="card">
     <img src={special.image} alt={special.title} className="card-image" />
     <div className="card-content">
       <h2 className="card-title">{special.title}</h2>
       <p className="card-description">{special.description}</p>
       <p className="card-price">{special.price}</p>
       </div>
        </div>
      ))}
    </div>
  );
};

export default Card;