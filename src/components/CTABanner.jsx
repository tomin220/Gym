import { useNavigate } from 'react-router-dom'
import './CTABanner.css'

function CTABanner() {
  const navigate = useNavigate()

  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h2 className="cta-title">READY TO <span className="highlight">TRANSFORM?</span></h2>
        <p className="cta-subtitle">
          Join IronCore Fitness today and start your journey to a stronger, healthier you
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={() => navigate('/membership')}>
            Join Today
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/programs')}>
            Explore Programs
          </button>
        </div>
        <p className="cta-note">🎉 Limited Time: Get 50% off your first month!</p>
      </div>
    </section>
  )
}

export default CTABanner
