import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Jake Morrison',
      role: 'Software Developer',
      text: 'IronCore changed my life! Lost 40 pounds in 5 months. The trainers are incredible and the community is so motivating.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80'
    },
    {
      name: 'Emma Rodriguez',
      role: 'College Student',
      text: 'Best gym I have ever joined! The student pricing is amazing and the 24/7 access fits my crazy schedule perfectly.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager',
      text: 'The personal training sessions are worth every penny. I have gained so much strength and confidence in just 3 months!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="section-header">
        <h2 className="section-title">SUCCESS <span className="highlight">STORIES</span></h2>
        <p className="section-subtitle">Real transformations from real members</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-avatar">
              <img src={testimonial.avatar} alt={testimonial.name} />
            </div>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h4>{testimonial.name}</h4>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
