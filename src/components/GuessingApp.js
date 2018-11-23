import React from 'react';

import Header from './Header';
import Game from './Game';
import GameStatus from './GameStatus';
import './GuessingApp.css';

class GuessingApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            guessStatus: 'Make your Guess!',
            numGuesses: 0,
            guessedNums: [],
            correctAnswer: Math.floor(Math.random() * 100) + 1
        }
    };
    
    handleNewGame = () => {
        this.setState(() => {
            return {
                guessStatus: 'Make your Guess!',
                numGuesses: 0,
                guessedNums: [],
                correctAnswer: Math.floor(Math.random() * 100) + 1
            }
        });
    } 

    handleGuess = (guess) => {
        const diff = Math.abs(this.state.correctAnswer - guess);
        console.log(`dif is ${diff}`);
        let myStatus;
        if(diff >=50){
            myStatus = 'ice cold';
        }else if(diff < 50 && diff >=30){
            myStatus = 'cold'
        }else if(diff < 30 && diff >= 10){
            myStatus = 'warm';
        }else if(diff < 10 && diff >= 1) {
            myStatus = 'hot';
        }else{
            myStatus = 'You Won. Click New Game to play again';
        }
        console.log(`correct answer is ${this.state.correctAnswer}`);
        console.log(`guess is ${guess}`);

        this.setState((prevState) => {
            return {
                numGuesses: prevState.numGuesses + 1,
                guessStatus: myStatus,
                guessedNums: prevState.guessedNums.concat(guess)
            }
        });
        console.log(this.state);

    };
    render(){
        return (
        <div className="guessing-game">
            <Header handleNewGame={this.handleNewGame}/>
            <h3 className="status"> {this.state.guessStatus}</h3>
            <Game 
                handleGuess = {this.handleGuess}
            />
            <GameStatus 
                numGuesses={this.state.numGuesses}
                guessedNums={this.state.guessedNums}
            />
        </div>  
    );
    }
}

export default GuessingApp;