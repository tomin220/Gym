import './About.css'

function About() {
  const benefits = [
    { 
      icon: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80', 
      title: 'Premium Equipment', 
      description: 'State-of-the-art machines and free weights' 
    },
    { 
      icon: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80', 
      title: 'Expert Trainers', 
      description: 'Certified professionals to guide you' 
    },
    { 
      icon: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', 
      title: 'High Energy', 
      description: 'Motivating atmosphere that pushes limits' 
    },
    { 
      icon: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=400&q=80', 
      title: 'Goal Focused', 
      description: 'Personalized plans for your success' 
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">WELCOME TO <span className="highlight">IRONCORE</span></h2>
          <p className="about-description">
            IronCore Fitness is more than just a gym—it's a community of driven individuals 
            committed to pushing boundaries and achieving greatness. With cutting-edge equipment, 
            expert trainers, and a motivating environment, we provide everything you need to 
            transform your body and mind.
          </p>
          <p className="about-description">
            Whether you're a beginner taking your first step or an experienced athlete looking 
            to level up, IronCore is your ultimate fitness destination.
          </p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-image">
                <img src={benefit.icon} alt={benefit.title} />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
