import React from 'react'
import bgi from '../assets/bck.jpeg'

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const timeSlots = Array.from({ length: 15 }, (_, i) => {
  const hour = 8 + i
  const start = hour.toString().padStart(2, '0') + ':00'
  const endHour = hour + 1
  const end = endHour.toString().padStart(2, '0') + ':00'
  return `${start}–${end}`
})


const sessions = [
  { session: 'Strength Training', trainer: 'John' },
  { session: 'Cardio Blast', trainer: 'Mary' },
  { session: 'Yoga Flow', trainer: 'Alice' },
  { session: 'HIIT Workout', trainer: 'Bob' },
  { session: 'Boxing Basics', trainer: 'Dave' },
  { session: 'Zumba Dance', trainer: 'Lina' },
  { session: 'Pilates Core', trainer: 'Nina' },
  { session: 'CrossFit Basics', trainer: 'Mark' },
  { session: 'Stretch & Mobility', trainer: 'Sara' },
  { session: 'Functional Training', trainer: 'Tom' },
  { session: 'Spin Class', trainer: 'Liam' },
  { session: 'Body Pump', trainer: 'Eva' },
  { session: 'Dance Fitness', trainer: 'Zoe' },
  { session: 'Recovery & Yoga', trainer: 'Mia' },
  { session: 'Evening Cardio', trainer: 'Alex' },
]

const schedule = {}
days.forEach(day => {
  schedule[day] = timeSlots.map((slot, i) => {
    
    const s = sessions[(i + days.indexOf(day)) % sessions.length]
    return {
      slot,
      session: s.session,
      trainer: s.trainer,
    }
  })
})

const FeaturedClasses = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-20 mt-8 md:mt-16 lg:mt-24"
      style={{ backgroundImage: `url(${bgi})` }}
    >
      <div className="bg-orange-300 bg-opacity-60 px-4 py-8 md:px-16 md:py-16 text-white">
        <h1 className="text-2xl md:text-xl font-bold text-center">
          Featured Classes Schedule
        </h1>
        <p className="mt-4 text-lg md:text-xl text-center max-w-2xl mx-auto">
          Check out our weekly timetable — classes available daily from 8:00 AM to 10:00 PM. We offer a variety of sessions to help you reach your fitness goals.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full table-auto bg-gray-300 bg-opacity-20 border border-white/40">
            <thead>
              <tr className="bg-gray-400 bg-opacity-30">
                <th className="px-2 py-1 border border-white/40">Time</th>
                {days.map(day => (
                  <th key={day} className="px-2 py-1 border border-white/40">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slot, idx) => (
                <tr key={slot} className="odd:bg-white/10 even:bg-white/20">
                  <td className="px-2 py-1 border border-white/40 font-semibold">{slot}</td>
                  {days.map(day => {
                    const item = schedule[day][idx]
                    return (
                      <td key={day + slot} className="px-2 py-1 border border-white/40 text-sm">
                        <div className='text-black'>{item.session}</div>
                        <div className="italic text-green-600">{item.trainer}</div>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default FeaturedClasses
