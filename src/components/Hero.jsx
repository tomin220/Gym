import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80" 
          alt="Gym background"
          className="hero-bg-image"
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          UNLEASH YOUR <span className="highlight">INNER STRENGTH</span>
        </h1>
        <p className="hero-subtitle">
          Transform your body, elevate your mind, and conquer your limits at IronCore Fitness
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Start Your Journey</button>
          <button className="btn btn-secondary">Explore Programs</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
