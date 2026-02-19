import { useState } from 'react'
import './Schedule.css'

function Schedule() {
  const [selectedDay, setSelectedDay] = useState('Monday')

  const schedule = {
    Monday: [
      { time: '6:00 AM', class: 'Morning Yoga', trainer: 'Sarah Williams' },
      { time: '9:00 AM', class: 'Strength Training', trainer: 'Mike Johnson' },
      { time: '12:00 PM', class: 'Zumba Dance', trainer: 'Emma Davis' },
      { time: '5:00 PM', class: 'CrossFit', trainer: 'David Chen' },
      { time: '7:00 PM', class: 'Spinning', trainer: 'Mike Johnson' }
    ],
    Tuesday: [
      { time: '6:00 AM', class: 'Cardio Blast', trainer: 'David Chen' },
      { time: '9:00 AM', class: 'Pilates', trainer: 'Sarah Williams' },
      { time: '12:00 PM', class: 'Boxing Fitness', trainer: 'Mike Johnson' },
      { time: '5:00 PM', class: 'Yoga Flow', trainer: 'Sarah Williams' },
      { time: '7:00 PM', class: 'HIIT Training', trainer: 'David Chen' }
    ],
    Wednesday: [
      { time: '6:00 AM', class: 'Morning Yoga', trainer: 'Sarah Williams' },
      { time: '9:00 AM', class: 'Strength Training', trainer: 'Mike Johnson' },
      { time: '12:00 PM', class: 'Zumba Dance', trainer: 'Emma Davis' },
      { time: '5:00 PM', class: 'CrossFit', trainer: 'David Chen' },
      { time: '7:00 PM', class: 'Spinning', trainer: 'Mike Johnson' }
    ],
    Thursday: [
      { time: '6:00 AM', class: 'Cardio Blast', trainer: 'David Chen' },
      { time: '9:00 AM', class: 'Pilates', trainer: 'Sarah Williams' },
      { time: '12:00 PM', class: 'Boxing Fitness', trainer: 'Mike Johnson' },
      { time: '5:00 PM', class: 'Yoga Flow', trainer: 'Sarah Williams' },
      { time: '7:00 PM', class: 'HIIT Training', trainer: 'David Chen' }
    ],
    Friday: [
      { time: '6:00 AM', class: 'Morning Yoga', trainer: 'Sarah Williams' },
      { time: '9:00 AM', class: 'Strength Training', trainer: 'Mike Johnson' },
      { time: '12:00 PM', class: 'Zumba Dance', trainer: 'Emma Davis' },
      { time: '5:00 PM', class: 'CrossFit', trainer: 'David Chen' },
      { time: '7:00 PM', class: 'Weekend Warrior', trainer: 'Mike Johnson' }
    ],
    Saturday: [
      { time: '8:00 AM', class: 'Power Yoga', trainer: 'Sarah Williams' },
      { time: '10:00 AM', class: 'Family Fitness', trainer: 'Emma Davis' },
      { time: '12:00 PM', class: 'Bootcamp', trainer: 'David Chen' },
      { time: '3:00 PM', class: 'Aqua Aerobics', trainer: 'Sarah Williams' }
    ],
    Sunday: [
      { time: '8:00 AM', class: 'Meditation & Stretch', trainer: 'Sarah Williams' },
      { time: '10:00 AM', class: 'Light Cardio', trainer: 'Emma Davis' },
      { time: '12:00 PM', class: 'Recovery Yoga', trainer: 'Sarah Williams' }
    ]
  }

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <section id="schedule" className="schedule">
      <div className="section-header">
        <h2>Weekly Class Schedule</h2>
        <p>Plan your week with our diverse class offerings</p>
      </div>

      <div className="days-selector">
        {days.map((day) => (
          <button
            key={day}
            className={`day-btn ${selectedDay === day ? 'active' : ''}`}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="schedule-list">
        {schedule[selectedDay].map((item, index) => (
          <div key={index} className="schedule-item">
            <div className="schedule-time">{item.time}</div>
            <div className="schedule-details">
              <h4>{item.class}</h4>
              <p>with {item.trainer}</p>
            </div>
            <button className="btn btn-primary">Reserve</button>
          </div>
        ))}
      </div>

      <div className="schedule-note">
        <p>⏰ Operating Hours: Monday-Friday 5:00 AM - 11:00 PM | Saturday-Sunday 7:00 AM - 9:00 PM</p>
      </div>
    </section>
  )
}

export default Schedule
