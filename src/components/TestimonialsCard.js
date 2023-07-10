import React from "react";

const TestimonialsCard = ({ testimonial }) => {
return (
    <div className="testimonial-card">
    <h3 className="testimonial-name">{testimonial.name}</h3>
    <img src={testimonial.image} alt={testimonial.name} className="testimonial-image"/>
      <p className="testimonial-content">{testimonial.content}</p>
    </div>
)
}
export default TestimonialsCard