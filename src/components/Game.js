import React from 'react';
import './Game.css';

export default class Game extends React.Component {
    state = {
        error: undefined
    }

    handleGuess = (e) => {
        e.preventDefault();
        
        const guess = e.target.elements.guess.value.trim();
        const error = this.props.handleGuess(guess);
        this.setState(() => ({error}));
        if(!error){
            e.target.elements.guess.value = '';
        }
    }

    render(){
        return (
            <div className="game-form">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleGuess}>
                    <input type="number" placeholder="Enter Your Guess" name="guess"/>
                    <button>Guess</button>
                </form>
            </div>
        )
    }
}

