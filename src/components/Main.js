import React from 'react';
import Card from './Card';
import './Main.css';
import TestimonialsCard from './TestimonialsCard';

function Main() {
    const specials = [
      {
        id: 1,
        image: 'path/to/image1.jpg',
        title: 'Special 1',
        description: 'Description of Special 1',
        price: '$10.99',
      },
      {
        id: 2,
        image: 'path/to/image2.jpg',
        title: 'Special 2',
        description: 'Description of Special 2',
        price: '$12.99',
      },
    ];
  
    const testimonials = [
      {
        id: 1,
        name: 'John Doe',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 2,
        name: 'Jane Smith',
        content: 'Nulla facilisi. Aenean vel mi eu lectus tristique gravida.',
      },
    ];
  
    return (
      <>
        <main className="main-section">
          <section>
            <div>
              <h1>Specials</h1>
              <Card specials={specials} />
            </div>
          </section>
  
          <section className="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonial-cards">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </section>
  
          <section className="about-section">
            <h1>About</h1>
          </section>
        </main>
      </>
    );
  }
  
  export default Main;