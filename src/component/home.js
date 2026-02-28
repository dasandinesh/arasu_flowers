import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Rose Bouquet', price: 29.99, image: '../images/pic1.jpg' },
    { id: 2, name: 'Tulip Arrangement', price: 24.99, image: '../images/pic2.jpg' },
    { id: 3, name: 'Orchid Plant', price: 39.99, image: '../images/pic3.jpg' },
    { id: 4, name: 'Sunflower Bundle', price: 19.99, image: '../images/pic4.jpg' },
  ];

  const testimonials = [
    { id: 1, text: "Beautiful flowers and excellent service! Will definitely order again.", customer: "Priya K." },
    { id: 2, text: "Fresh flowers delivered on time. My wife loved the anniversary bouquet!", customer: "Rahul M." },
    { id: 3, text: "Amazing quality and reasonable prices. My go-to flower shop!", customer: "Anita S." },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Arasu Flowers</h1>
          <p>Fresh flowers for every occasion</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">${product.price}</p>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-offers">
        <div className="container">
          <h2>Special Offers</h2>
          <div className="offer-banner">
            <h3>Valentine's Day Special</h3>
            <p>Get 20% off on all rose bouquets</p>
            <Link to="/valentine-sale" className="offer-button">Shop Now</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="customer">- {testimonial.customer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;