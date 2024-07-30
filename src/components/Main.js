
import React from 'react';
import SpecialsCard from './SpecialsCard';
import TestimonialsCard from './TestimonialsCard';
import GreekSalad from './images/greeksalad.jpg';
import Bruchetta from './images/bruchetta.svg';
import LemonDessert from './images/lemondessert.jpg';
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
      name: 'Testimonial 1',
      content: 'Content of the testimonial goes here.',
    },
    {
      id: 2,
      name: 'Testimonial 2',
      content: 'Content of the testimonial goes here.',
    },
    {
      id: 3,
      name: 'Testimonial 3',
      content: 'Content of the testimonial goes here.',
    },
  ];

  return (
    <main className="main-section">
      <section className="specials-section">
        <div className='special-headings'>
        <h1 className="headings">Specials</h1>
        <button className="menu-button">Online Menu</button>
        </div>
        <div className="specials-container">
          {specials.map((special) => (
            <SpecialsCard key={special.id} special={special} />
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h1 className="headings">Testimonials</h1>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <TestimonialsCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="about-section">
        <h1>About</h1>
      </section>
    </main>
  );
}

export default Main;