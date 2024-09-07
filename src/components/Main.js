
import React from 'react';
import SpecialsCard from './SpecialsCard';
import TestimonialsCard from './TestimonialsCard';
import GreekSalad from './images/greeksalad.jpg';
import Bruchetta from './images/bruchetta.svg';
import LemonDessert from './images/lemondessert.jpg';
import Logo from "./Logo";
import person1 from './images/person1.jpg'; 
import person2 from './images/person2.jpg';
import person3 from './images/person3.jpg';
import person4 from './images/person4.png';
import restaurant from './images/restaurant.jpg';
import AdrianandBryan from './images/AdrianandBryan.jpg';
import './Header.css';
import './Main.css';

function Main() {
  const specials = [
    {
      id: 1,
      image: GreekSalad,
      title: 'Greek Salad',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: '$12.99',
    },
    {
      id: 2,
      image: Bruchetta,
      title: 'Bruschetta',
      description: 'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and pepper.',
      price: '$5.99',
    },
    {
      id: 3,
      image: LemonDessert,
      title: 'Lemon Dessert',
      description: "This comes straight from grandma's recipe book. Every last ingredient has been authentic as can be imagined.",
      price: '$5.99',
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      content: 'Amazing food and great service!',
      image: person1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      content: 'The atmosphere was fantastic. Highly recommend!',
      image: person2,
    },
    {
      id: 3,
      name: 'Emily Johnson',
      content: 'Delicious food with a beautiful presentation.',
      image: person3,
    },
    {
      id: 4,
      name: 'Emily Johnson',
      content: 'Delicious food with a beautiful presentation.',
      image: person4,
    },
  ];

  return (
    <main className="main-section">
      <section className="specials-section">
        <div className='special-headings'>
        <h1 id="special-head">This Week's Specials!</h1>
        <button className="menu-button">Online Menu</button>
        </div>
        <div className="specials-container">
          {specials.map((special) => (
            <SpecialsCard key={special.id} special={special} />
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h1 className="test-heading">Testimonials</h1>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <TestimonialsCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className='about-company'>
        <div className="about-logo">
        <Logo color="#333333"/>
        </div>
        <div>
          <p className='about-desc'>The Little Lemon Restaurant is a charming,
             family-owned Mediterranean eatery that brings the vibrant flavors
              of the Mediterranean to the heart of the community.
               owned by two chefs, Adrian and Bryan, 
              Little Lemon offers a unique blend of traditional 
              Mediterranean cuisine with a modern twist.</p>
        </div>
        </div>
        <div className='about-image'>
          <img src={restaurant} alt="Little-Lemmon-restaurant" className='about-img1'/>
          <img src={AdrianandBryan} alt="Restaurant-owners" className='about-img2'/>
        </div>

      </section>
    </main>
  );
}

export default Main;