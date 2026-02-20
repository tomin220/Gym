import { useNavigate } from 'react-router-dom'
import './TrainersPage.css'

function TrainersPage() {
  const navigate = useNavigate()

  const trainers = [
    {
      name: 'Marcus Steel',
      specialization: 'Strength & Conditioning',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80',
      experience: '12 years',
      bio: 'Marcus is a certified strength coach with over a decade of experience in powerlifting and bodybuilding. He specializes in helping clients build muscle mass and increase their overall strength through progressive overload training.',
      certifications: ['NSCA-CSCS', 'USA Powerlifting Coach', 'Precision Nutrition Level 1'],
      specialties: ['Powerlifting', 'Hypertrophy Training', 'Olympic Lifting', 'Sports Performance'],
      availability: 'Monday-Friday: 6 AM - 2 PM, Saturday: 8 AM - 12 PM'
    },
    {
      name: 'Sarah Phoenix',
      specialization: 'HIIT & Cardio',
      image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=800&q=80',
      experience: '8 years',
      bio: 'Sarah brings high energy and motivation to every session. Her background in competitive athletics gives her unique insights into cardiovascular training and metabolic conditioning.',
      certifications: ['ACE Certified Personal Trainer', 'TRX Instructor', 'Spinning Certified'],
      specialties: ['HIIT Training', 'Metabolic Conditioning', 'Group Fitness', 'Weight Loss'],
      availability: 'Monday-Friday: 5 AM - 1 PM, Sunday: 9 AM - 1 PM'
    },
    {
      name: 'Alex Thunder',
      specialization: 'Personal Training',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
      experience: '10 years',
      bio: 'Alex takes a holistic approach to fitness, combining strength training, nutrition, and lifestyle coaching. His personalized programs have helped hundreds achieve their fitness goals.',
      certifications: ['NASM-CPT', 'Functional Movement Screen', 'Nutrition Coach'],
      specialties: ['Body Transformation', 'Functional Training', 'Nutrition Planning', 'Lifestyle Coaching'],
      availability: 'Tuesday-Saturday: 12 PM - 8 PM'
    },
    {
      name: 'Maya Zen',
      specialization: 'Yoga & Flexibility',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
      experience: '7 years',
      bio: 'Maya combines traditional yoga practices with modern mobility training. She helps clients improve flexibility, reduce stress, and prevent injuries through mindful movement.',
      certifications: ['RYT-500 Yoga Alliance', 'Mobility Specialist', 'Meditation Instructor'],
      specialties: ['Vinyasa Yoga', 'Yin Yoga', 'Mobility Training', 'Stress Management'],
      availability: 'Monday-Friday: 7 AM - 3 PM, Saturday: 10 AM - 2 PM'
    }
  ]

  return (
    <div className="trainers-page">
      <div className="page-hero">
        <h1 className="page-title">MEET OUR <span className="highlight">TRAINERS</span></h1>
        <p className="page-subtitle">
          Expert coaches dedicated to helping you achieve your fitness goals
        </p>
      </div>

      <div className="trainers-container">
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-detail-card">
            <div className="trainer-detail-image">
              <img src={trainer.image} alt={trainer.name} />
            </div>
            
            <div className="trainer-detail-content">
              <h2>{trainer.name}</h2>
              <p className="trainer-title">{trainer.specialization}</p>
              <p className="trainer-exp">{trainer.experience} of experience</p>
              
              <div className="trainer-bio">
                <h3>About</h3>
                <p>{trainer.bio}</p>
              </div>

              <div className="trainer-info-grid">
                <div className="info-section">
                  <h3>Certifications</h3>
                  <ul className="cert-list">
                    {trainer.certifications.map((cert, idx) => (
                      <li key={idx}>
                        <span className="check-icon">✓</span> {cert}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="info-section">
                  <h3>Specialties</h3>
                  <ul className="specialty-list">
                    {trainer.specialties.map((specialty, idx) => (
                      <li key={idx}>
                        <span className="check-icon">✓</span> {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="availability-section">
                <h3>Availability</h3>
                <p>{trainer.availability}</p>
              </div>

              <button className="btn btn-primary">Book a Session</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to Start Training?</h2>
        <p>Choose a membership plan and get access to our expert trainers</p>
        <button className="btn btn-primary" onClick={() => navigate('/membership')}>
          View Membership Plans
        </button>
      </div>
    </div>
  )
}

export default TrainersPage
