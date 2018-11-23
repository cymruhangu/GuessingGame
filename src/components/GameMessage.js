import React from 'react';
// import './GameMessage.css';

const GameMessage = (props) => {
    return (
        <div className="guess-status">
            <h3>{props.guessStatus}</h3>
        </div>
    )
}

export default GameMessage;