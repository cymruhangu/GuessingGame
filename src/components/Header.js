import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <nav>
                <ul>
                    <li className="modalButton">WHAT?</li>
                    <li className="reset" onClick={props.handleNewGame}>+NEW GAME</li>
                </ul>
                <h1 className="title">HOT or COLD</h1>
            </nav>
    
        </div>
    )
}

export default Header;