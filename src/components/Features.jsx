import './Features.css'

function Features() {
  const features = [
    {
      icon: '🏋️‍♂️',
      title: 'Modern Equipment',
      description: 'State-of-the-art machines and free weights for all fitness levels'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Trainers',
      description: 'Certified professionals to guide your fitness journey'
    },
    {
      icon: '🕐',
      title: '24/7 Access',
      description: 'Work out on your schedule with round-the-clock gym access'
    },
    {
      icon: '🧘',
      title: 'Group Classes',
      description: 'Yoga, Zumba, Spinning, and more group fitness options'
    },
    {
      icon: '🍎',
      title: 'Nutrition Plans',
      description: 'Personalized meal plans to complement your training'
    },
    {
      icon: '🏊',
      title: 'Swimming Pool',
      description: 'Olympic-size pool for swimming and aqua aerobics'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="section-header">
        <h2>Why Choose FitLife Gym?</h2>
        <p>Everything you need to achieve your fitness goals</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
