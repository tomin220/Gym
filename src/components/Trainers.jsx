import './Trainers.css'

function Trainers() {
  const trainers = [
    {
      name: 'Marcus Steel',
      specialization: 'Strength & Conditioning',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
      experience: '12 years'
    },
    {
      name: 'Sarah Phoenix',
      specialization: 'HIIT & Cardio',
      image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&q=80',
      experience: '8 years'
    },
    {
      name: 'Alex Thunder',
      specialization: 'Personal Training',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
      experience: '10 years'
    },
    {
      name: 'Maya Zen',
      specialization: 'Yoga & Flexibility',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
      experience: '7 years'
    }
  ]

  return (
    <section id="trainers" className="trainers">
      <div className="section-header">
        <h2 className="section-title">MEET OUR <span className="highlight">TRAINERS</span></h2>
        <p className="section-subtitle">Expert coaches dedicated to your transformation</p>
      </div>

      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} className="trainer-photo" />
              <div className="trainer-overlay">
                <button className="btn btn-primary">Book Session</button>
              </div>
            </div>
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p className="trainer-specialization">{trainer.specialization}</p>
              <p className="trainer-experience">{trainer.experience} experience</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trainers
