import React from "react";
import "../component/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
          <p>Let’s connect and build something beautiful 🌸</p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <div className="contact-container">
       
        {/* LEFT SIDE - CONTACT INFO */}
        <div className="contact-info">
  <h2 className="contact-title">Get in Touch</h2>

  <div className="contact-item">
    <h4>📍 Address</h4>
    <p>
      No. 6, Arumuga Nadar street, <br />
Sivakamipuram. <br />
Alangulam Tk, <br />
Tenkasi district - 627808.
    </p>
  </div>

  <div className="contact-item">
    <h4>📞 Phone</h4>
    <p>+91 9443380524</p>
<p>📞 <a href="tel:+919150680524">+91 9150680524</a></p>

  </div>

  <div className="contact-item">
    <h4>✉️ Email</h4>
    <p>thillai.arasu@yahoo.com</p>
  </div>

  <div className="contact-item">
    <h4>⏰ Working Hours</h4>
    <p>Mon – Sat : 6AM – 9PM</p>
    <p>Sunday : 10AM – 6PM</p>
  </div>
</div>

        
       

      </div>

      {/* GOOGLE MAP SECTION */}
      <div className="contact-map-section">
        <iframe
          src="https://www.google.com/maps?q=8.8948702,77.3995223&z=17&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Arasu Flowers Location"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;
