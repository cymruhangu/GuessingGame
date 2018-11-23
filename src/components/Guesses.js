import React from 'react';

const Guesses = (props) => {
    return (
        <span>
            {props.guessText +  ' '}
        </span>
    );
}

export default Guesses;