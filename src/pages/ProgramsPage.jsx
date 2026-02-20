import { useNavigate } from 'react-router-dom'
import './ProgramsPage.css'

function ProgramsPage() {
  const navigate = useNavigate()

  const programs = [
    {
      title: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
      description: 'Build muscle mass and increase power with our comprehensive strength programs',
      fullDescription: 'Our strength training program is designed to help you build lean muscle mass, increase overall strength, and improve your physical performance. Whether you are a beginner or an experienced lifter, our certified trainers will create a personalized program tailored to your goals.',
      features: [
        'Free Weights & Barbells',
        'Resistance Machines',
        'Progressive Overload Training',
        'Compound Movement Focus',
        'Personalized Workout Plans',
        'Form & Technique Coaching'
      ],
      schedule: [
        'Monday, Wednesday, Friday: 6:00 AM - 9:00 PM',
        'Tuesday, Thursday: 5:00 AM - 10:00 PM',
        'Saturday: 8:00 AM - 6:00 PM',
        'Sunday: 9:00 AM - 4:00 PM'
      ],
      pricing: 'Included in Standard & Premium memberships'
    },
    {
      title: 'Cardio Training',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80',
      description: 'Boost endurance and burn calories with high-intensity cardio workouts',
      fullDescription: 'Our cardio program combines various training methods to maximize fat burning, improve cardiovascular health, and boost your endurance. From steady-state cardio to high-intensity interval training (HIIT), we have everything you need.',
      features: [
        'Treadmills & Running Tracks',
        'Rowing Machines',
        'HIIT Classes',
        'Spin/Cycling Classes',
        'Stair Climbers',
        'Heart Rate Monitoring'
      ],
      schedule: [
        'Daily HIIT Classes: 6:00 AM, 12:00 PM, 6:00 PM',
        'Spin Classes: 7:00 AM, 5:30 PM',
        'Open Cardio Area: 24/7 Access',
        'Weekend Boot Camps: Saturday 9:00 AM'
      ],
      pricing: 'Included in all membership tiers'
    },
    {
      title: 'Personal Training',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      description: 'One-on-one coaching tailored to your specific goals and fitness level',
      fullDescription: 'Get personalized attention from our certified personal trainers who will design custom workout plans, provide nutritional guidance, and keep you accountable throughout your fitness journey. Perfect for those who want dedicated support and faster results.',
      features: [
        'Custom Workout Plans',
        'One-on-One Sessions',
        'Form Correction & Safety',
        'Nutrition Guidance',
        'Progress Tracking',
        'Goal Setting & Accountability',
        'Flexible Scheduling'
      ],
      schedule: [
        'Available 7 days a week',
        'Morning slots: 5:00 AM - 11:00 AM',
        'Afternoon slots: 12:00 PM - 4:00 PM',
        'Evening slots: 5:00 PM - 9:00 PM',
        'Book in advance for preferred times'
      ],
      pricing: 'Standard: 2 sessions/month | Premium: 8 sessions/month'
    },
    {
      title: 'Functional Fitness',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      description: 'Improve flexibility, balance, and core strength for everyday performance',
      fullDescription: 'Functional fitness focuses on exercises that train your muscles to work together and prepare them for daily tasks. Our program includes yoga, mobility work, and core training to improve your overall quality of life and prevent injuries.',
      features: [
        'Yoga Classes (All Levels)',
        'Mobility & Flexibility Work',
        'Core Strengthening',
        'Balance Training',
        'Injury Prevention',
        'Recovery & Stretching Sessions'
      ],
      schedule: [
        'Morning Yoga: Monday-Friday 6:30 AM',
        'Lunch Flow: Tuesday, Thursday 12:30 PM',
        'Evening Yoga: Monday, Wednesday, Friday 7:00 PM',
        'Weekend Workshops: Saturday 10:00 AM'
      ],
      pricing: 'Included in Standard & Premium memberships'
    }
  ]

  return (
    <div className="programs-page">
      <div className="page-hero">
        <h1 className="page-title">OUR <span className="highlight">PROGRAMS</span></h1>
        <p className="page-subtitle">
          Comprehensive fitness programs designed to help you achieve your goals
        </p>
      </div>

      <div className="programs-container">
        {programs.map((program, index) => (
          <div key={index} className="program-detail-card">
            <div className="program-detail-image">
              <img src={program.image} alt={program.title} />
            </div>
            
            <div className="program-detail-content">
              <h2>{program.title}</h2>
              <p className="program-intro">{program.description}</p>
              <p className="program-full-desc">{program.fullDescription}</p>

              <div className="program-info-grid">
                <div className="info-section">
                  <h3>What's Included</h3>
                  <ul className="feature-list">
                    {program.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="check-icon">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="info-section">
                  <h3>Schedule</h3>
                  <ul className="schedule-list">
                    {program.schedule.map((time, idx) => (
                      <li key={idx}>
                        <span className="time-icon">🕐</span> {time}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pricing-info">
                    <h3>Pricing</h3>
                    <p>{program.pricing}</p>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary" onClick={() => navigate('/membership')}>
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Choose a membership plan and get access to all our programs</p>
        <button className="btn btn-primary" onClick={() => navigate('/membership')}>
          View Membership Plans
        </button>
      </div>
    </div>
  )
}

export default ProgramsPage
