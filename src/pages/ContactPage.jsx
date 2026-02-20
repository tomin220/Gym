import { useState } from 'react'
import './ContactPage.css'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">
      <div className="page-hero">
        <h1 className="page-title">GET IN <span className="highlight">TOUCH</span></h1>
        <p className="page-subtitle">
          We're here to answer your questions and help you start your fitness journey
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          
          <div className="info-cards-grid">
            <div className="contact-info-card">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>456 Fitness Avenue<br/>Downtown City, ST 12345<br/>United States</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>Main: (555) 987-6543<br/>Support: (555) 987-6544<br/>Mon-Fri: 5 AM - 10 PM</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">✉️</div>
              <h3>Email Us</h3>
              <p>info@ironcorefitness.com<br/>support@ironcorefitness.com<br/>careers@ironcorefitness.com</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">🕐</div>
              <h3>Opening Hours</h3>
              <p>Monday-Friday: 5:00 AM - 11:00 PM<br/>Saturday: 7:00 AM - 9:00 PM<br/>Sunday: 8:00 AM - 8:00 PM</p>
            </div>
          </div>

          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links-large">
              <a href="#" className="social-link">📘 Facebook</a>
              <a href="#" className="social-link">📷 Instagram</a>
              <a href="#" className="social-link">🐦 Twitter</a>
              <a href="#" className="social-link">📺 YouTube</a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form className="contact-form-large" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Your Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="training">Personal Training</option>
                  <option value="classes">Group Classes</option>
                  <option value="facilities">Facilities Tour</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Your Message *</label>
              <textarea
                name="message"
                placeholder="Tell us how we can help you..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          <p>🗺️ Map Location</p>
          <p className="map-note">456 Fitness Avenue, Downtown City</p>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What are your membership options?</h3>
            <p>We offer Basic, Standard, and Premium memberships with flexible monthly or yearly billing. Visit our Membership page for details.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer a free trial?</h3>
            <p>Yes! We offer a 7-day free trial for new members. No credit card required to start.</p>
          </div>
          <div className="faq-item">
            <h3>Can I tour the facility?</h3>
            <p>Absolutely! Schedule a free tour by calling us or filling out the contact form above.</p>
          </div>
          <div className="faq-item">
            <h3>Do you have parking?</h3>
            <p>Yes, we have free parking for all members with over 100 spaces available.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
