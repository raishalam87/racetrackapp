// src/components/ResultsPopup.js

import {Link} from 'react-router-dom'

import './ResultsPopup.css'
import ParticipantEntryPage from './ParticipantEntryPage'

const ResultsPopup = ({participants, onClosePopup, onRestartRace}) => (
  <div className="popup">
    <h2>Race Results</h2>
    <ul>
      {participants.map(participant => (
        <li key={participant.id}>
          {participant.name} finished in {participant.distanceCovered} units.
        </li>
      ))}
    </ul>
    <button type="button" onClick={onRestartRace}>
      Restart Race
    </button>
    <Link to="/">
      <ParticipantEntryPage />
      back to Home
    </Link>
  </div>
)

export default ResultsPopup
