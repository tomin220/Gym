import './Programs.css'

function Programs() {
  const programs = [
    {
      title: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80',
      description: 'Build muscle mass and increase power with our comprehensive strength programs',
      features: ['Free Weights', 'Resistance Machines', 'Progressive Overload']
    },
    {
      title: 'Cardio',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&q=80',
      description: 'Boost endurance and burn calories with high-intensity cardio workouts',
      features: ['Treadmills', 'Rowing Machines', 'HIIT Classes']
    },
    {
      title: 'Personal Training',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
      description: 'One-on-one coaching tailored to your specific goals and fitness level',
      features: ['Custom Plans', 'Form Correction', 'Nutrition Guidance']
    },
    {
      title: 'Functional Fitness',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
      description: 'Improve flexibility, balance, and core strength for everyday performance',
      features: ['Yoga Classes', 'Mobility Work', 'Core Training']
    }
  ]

  return (
    <section id="programs" className="programs">
      <div className="section-header">
        <h2 className="section-title">OUR <span className="highlight">PROGRAMS</span></h2>
        <p className="section-subtitle">Choose the perfect program to match your fitness goals</p>
      </div>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <div className="program-image">
              <img src={program.image} alt={program.title} />
            </div>
            <div className="program-content">
              <h3>{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <ul className="program-features">
                {program.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs
