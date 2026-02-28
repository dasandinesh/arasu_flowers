import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Home = () => {
  const businessFeatures = [
    {
      id: 1,
      icon: '🌸',
      title: 'Fresh Flowers Daily',
      description: 'We source the freshest flowers daily to ensure premium quality and long-lasting arrangements for every occasion.'
    },
    {
      id: 2,
      icon: '💐',
      title: 'Custom Arrangements',
      description: 'Expert florists create beautiful custom bouquets and arrangements tailored to your specific needs and preferences.'
    },
    {
      id: 3,
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery service across Tenkasi district, ensuring your flowers arrive fresh and on time.'
    },
    {
      id: 4,
      icon: '💝',
      title: 'Special Occasions',
      description: 'Perfect flowers for weddings, birthdays, anniversaries, and all your special moments.'
    },
    {
      id: 5,
      icon: '🌺',
      title: 'Wide Variety',
      description: 'Extensive selection of seasonal flowers including roses, lilies, orchids, and local favorites.'
    },
    {
      id: 6,
      icon: '⭐',
      title: 'Quality Guarantee',
      description: 'We stand behind our quality with a satisfaction guarantee on all our floral arrangements.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Arasu Flowers</h1>
          <p>Your trusted local florist for fresh, beautiful flowers</p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <h2>About Arasu Flowers</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Located in Sivakamipuram, Tenkasi district, Arasu Flowers has been serving the community with beautiful, fresh flowers for all occasions. We take pride in offering the finest floral arrangements with exceptional service.</p>
              <p>Our experienced team understands the importance of every floral moment, whether it's a celebration, sympathy, or simply brightening someone's day. We carefully select each flower to create stunning arrangements that convey your emotions perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Features */}
      <section className="features-section">
        <div className="container">
          <h2>Our Services & Features</h2>
          <div className="features-grid">
            {businessFeatures.map(feature => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Arasu Flowers?</h2>
          <div className="choose-grid">
            <div className="choose-item">
              <h3>🌿 Local & Trusted</h3>
              <p>Serving the Tenkasi community with dedication and care since our establishment.</p>
            </div>
            <div className="choose-item">
              <h3>🎨 Artistic Designs</h3>
              <p>Creative and unique floral arrangements designed by experienced florists.</p>
            </div>
            <div className="choose-item">
              <h3>💚 Fresh Guarantee</h3>
              <p>All our flowers are fresh and guaranteed to last, bringing joy for days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"Beautiful flowers and excellent service! Will definitely order again."</p>
              <p className="customer">- Priya K.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Fresh flowers delivered on time. My wife loved the anniversary bouquet!"</p>
              <p className="customer">- Rahul M.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Amazing quality and reasonable prices. My go-to flower shop!"</p>
              <p className="customer">- Anita S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Brighten Someone's Day?</h2>
            <p>Visit us or call to discuss your floral needs for any occasion</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">Contact Us</Link>
              <Link to="/about" className="cta-button secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;