// src/components/RaceTrackPage.js
import {useEffect, useState} from 'react'
import './RaceTrackPage.css'

const RaceTrackPage = ({participants}) => {
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="track-main-container">
      <div className="track-container">
        <div className="race-track">
          <div className="card">
            <h2 className="main-heading1">
              Elapsed Time:
              <div className="timer">
                <br /> {elapsedTime}
              </div>
            </h2>
          </div>
          <p className="track-description">Track length 400m</p>
          {participants.map(participant => (
            <div key={participant.id} className="participant-track">
              <p>{participant.name}'s Track</p>
              <div
                style={{
                  width: `${participant.speed * elapsedTime}px`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RaceTrackPage
