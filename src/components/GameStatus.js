import React from 'react';
import Guesses from './Guesses';
import './GameStatus.css';

const GameStatus = (props) => {
    return (
        <div >
            <div className="guess-num"><h3>Guess # {props.numGuesses}</h3></div>
            <div className='failed-guesses'>
                {
                    props.guessedNums.map((num) => (
                        <Guesses key={num} 
                            guessText={num} />)
                    )
                }
            </div>      
        </div>
    );
}

export default GameStatus;