import React from 'react';
import '../component/about.css';


const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1>About Arasu Flowers</h1>
          <p>Spreading joy through nature's beauty since 2010</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container story">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, Arasu Flowers began as a small family-owned shop.
              Today, we are one of the most trusted flower brands in Chennai.
            </p>
            <p>
              We work directly with local growers to ensure the freshest,
              highest-quality flowers for every occasion.
            </p>
          </div>
          <div className="story-image">
            <img src="/images/about-shop.jpg" alt="Flower Shop" />
          </div>
        </div>
      </section>

{/* Values */}
<section className="values-section">
  <div className="container">
    <h2 className="values-title">Our Values</h2>

    <div className="values-grid">

      <div className="value-card">
        <div className="value-icon">🌸</div>
        <h3>Quality</h3>
        <p>Only the freshest premium flowers.</p>
      </div>

      <div className="value-card">
        <div className="value-icon">💐</div>
        <h3>Creativity</h3>
        <p>Unique and stunning floral designs.</p>
      </div>

      <div className="value-card">
        <div className="value-icon">🌿</div>
        <h3>Sustainability</h3>
        <p>Eco-friendly and locally sourced flowers.</p>
      </div>

    </div>
  </div>
</section>
      <section className="why-section">
  <div className="container">
    <h2 className="why-title">Why Choose Arasu Flowers?</h2>

    <div className="why-grid">

      <div className="why-card">
        <div className="why-icon">🚚</div>
        <h3>Same Day Delivery</h3>
        <p>Fast and reliable delivery service across the city.</p>
      </div>

      <div className="why-card">
        <div className="why-icon">🌹</div>
        <h3>100% Fresh Flowers</h3>
        <p>Directly sourced from trusted local growers.</p>
      </div>

      <div className="why-card">
        <div className="why-icon">🎨</div>
        <h3>Custom Designs</h3>
        <p>Creative floral arrangements for every occasion.</p>
      </div>

      <div className="why-card">
        <div className="why-icon">💰</div>
        <h3>Affordable Pricing</h3>
        <p>Premium quality flowers at budget-friendly prices.</p>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Make Every Moment Special 🌸</h2>
         
        </div>
      </section>

    </div>
  );
};

export default About;
