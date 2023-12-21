// src/App.js
import React, {useState} from 'react'
import './App.css'
import ParticipantEntryPage from './components/ParticipantEntryPage'
import RaceTrackPage from './components/RaceTrackPage'
import ResultsPopup from './components/ResultsPopup'

const App = () => {
  const [participants, setParticipants] = useState([])
  const [currentPage, setCurrentPage] = useState('participantEntry')
  const [showResultsPopup, setShowResultsPopup] = useState(false)

  const handleAddParticipant = newParticipant => {
    if (participants.length < 10) {
      setParticipants([
        ...participants,
        {...newParticipant, distanceCovered: 0},
      ])
    } else {
      alert('Maximum participants reached (10).')
    }
  }

  const startRace = () => {
    setCurrentPage('raceTrack')
  }

  const finishRace = () => {
    setShowResultsPopup(true)
  }

  const resetRace = () => {
    setParticipants([])
    setCurrentPage('participantEntry')
    setShowResultsPopup(false)
  }

  return (
    <div className="App">
      {currentPage === 'participantEntry' && (
        <ParticipantEntryPage
          onAddParticipant={handleAddParticipant}
          onStartRace={startRace}
        />
      )}

      {currentPage === 'raceTrack' && (
        <RaceTrackPage participants={participants} onFinishRace={finishRace} />
      )}

      {showResultsPopup && (
        <ResultsPopup
          participants={participants}
          onClosePopup={() => setShowResultsPopup(false)}
          onRestartRace={resetRace}
        />
      )}
    </div>
  )
}

export default App
