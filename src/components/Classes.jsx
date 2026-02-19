import './Classes.css'

function Classes() {
  const classes = [
    {
      name: 'Strength Training',
      icon: '💪',
      level: 'All Levels',
      duration: '60 min',
      description: 'Build muscle and increase strength with guided weight training'
    },
    {
      name: 'Yoga & Meditation',
      icon: '🧘‍♀️',
      level: 'Beginner',
      duration: '45 min',
      description: 'Improve flexibility and find inner peace'
    },
    {
      name: 'Cardio Blast',
      icon: '🏃',
      level: 'Intermediate',
      duration: '45 min',
      description: 'High-intensity cardio to burn calories fast'
    },
    {
      name: 'Zumba Dance',
      icon: '💃',
      level: 'All Levels',
      duration: '50 min',
      description: 'Fun dance workout that feels like a party'
    },
    {
      name: 'Spinning',
      icon: '🚴',
      level: 'Advanced',
      duration: '45 min',
      description: 'Indoor cycling for endurance and stamina'
    },
    {
      name: 'Boxing Fitness',
      icon: '🥊',
      level: 'Intermediate',
      duration: '60 min',
      description: 'Learn boxing techniques while getting fit'
    }
  ]

  return (
    <section id="classes" className="classes">
      <div className="section-header">
        <h2>Our Popular Classes</h2>
        <p>Find the perfect class for your fitness level and goals</p>
      </div>
      <div className="classes-grid">
        {classes.map((classItem, index) => (
          <div key={index} className="class-card">
            <div className="class-icon">{classItem.icon}</div>
            <h3>{classItem.name}</h3>
            <div className="class-meta">
              <span className="class-level">{classItem.level}</span>
              <span className="class-duration">⏱️ {classItem.duration}</span>
            </div>
            <p>{classItem.description}</p>
            <button className="btn btn-secondary">Book Class</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Classes
