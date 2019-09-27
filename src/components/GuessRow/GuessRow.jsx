import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';
import './GuessRow.css'

const GuessRow = (props) => (
  <div className='GuessRow'>
    <div style={{
      color: props.currentGuess ? 'black' : 'lightgrey',
      fontSize: 20,
      fontWeight: 700,
      margin: '0 10px'
    }}>
      {props.rowIdx + 1}
    </div>
    <div>
      <GuessPegs
        colors={props.colors}
        code={props.guess.code}
        />
    </div>
    <div>
      {
        props.currentGuess ?
        <ScoreButton /> :
        <GuessScore score={props.guess.score} />
      }
    </div>
  </div>
);

export default GuessRow;
