import React from 'react';
import './Testimonials.css';

function Testimonials() {
  // You might fetch these from an API or a local data source in the future
  const testimonials = [
    {
      quote: "Projectiva has transformed the way we manage projects. It's intuitive, efficient, and keeps everyone on the same page.",
      author: "Jane Doe",
      role: "Project Manager at XYZ Corp"
    },
    // ... more testimonials
  ];

  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-carousel">
        {/* Implement a carousel or use a library like react-slick */}
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.author}>
            <p className="quote">{testimonial.quote}</p>
            <p className="author">{testimonial.author}</p>
            <p className="role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;