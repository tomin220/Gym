import './CTABanner.css'

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h2 className="cta-title">READY TO <span className="highlight">TRANSFORM?</span></h2>
        <p className="cta-subtitle">
          Join IronCore Fitness today and start your journey to a stronger, healthier you
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Join Today</button>
          <button className="btn btn-secondary">Schedule Tour</button>
        </div>
        <p className="cta-note">🎉 Limited Time: Get 50% off your first month!</p>
      </div>
    </section>
  )
}

export default CTABanner
