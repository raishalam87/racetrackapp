// src/components/ParticipantEntryPage.js
import {useState} from 'react'
import {FaArrowRight, FaPlus} from 'react-icons/fa'

import './ParticipantEntryPage.css'

const ParticipantEntryPage = ({onStartRace}) => {
  const [participants, setParticipants] = useState([])
  const [name, setName] = useState('')
  const [speed, setSpeed] = useState('')
  const [startTime, setStartTime] = useState('')

  const handleAddParticipant = () => {
    if (participants.length < 10 && name && speed && startTime) {
      setParticipants([
        ...participants,
        {id: Date.now(), name, speed, startTime},
      ])
      // Clear input fields
      setName('')
      setSpeed('')
      setStartTime('')
    } else {
      alert('Maximum participants reached (10) or incomplete information.')
    }
  }

  return (
    <div className="main-container">
      <div className="form-section">
        <div className="card-form">
          <div>
            <h1 className="main-heading">RUNNER DETAILS</h1>
            <p className="description">*You can add max 10 participants</p>

            <div className="entry-form">
              <label htmlFor="name" className="input-heading">
                Name:
              </label>
              <br />
              <input
                type="text"
                className="input-section"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <br />
              <label htmlFor="speed" className="input-heading">
                Speed:
              </label>
              <br />
              <input
                type="text"
                className="input-section"
                id="speed"
                value={speed}
                onChange={e => setSpeed(e.target.value)}
              />
              <br />
              <label htmlFor="startTime" className="input-heading">
                Start Time:
              </label>
              <br />
              <input
                type="text"
                className="input-section"
                id="startTime"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
              />
              <button
                type="button"
                className="add-btn"
                onClick={handleAddParticipant}
              >
                <FaPlus className="icons1" />
                Add Participant
              </button>
            </div>
          </div>
        </div>
        <div className="card-table">
          <table className="participant-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Speed</th>
                <th>Start Time</th>
              </tr>
            </thead>
            <tbody>
              {participants.map(participant => (
                <tr key={participant.id}>
                  <td>{participant.name}</td>
                  <td>{participant.speed}</td>
                  <td>{participant.startTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="start-btn">
        <button
          className="restart-btn"
          type="button"
          onClick={onStartRace}
          disabled={participants.length === 0}
        >
          Start Race
          <FaArrowRight className="icons" />
        </button>
      </div>
    </div>
  )
}

export default ParticipantEntryPage
