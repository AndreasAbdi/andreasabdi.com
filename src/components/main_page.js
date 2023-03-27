import React from 'react';
import './index.css';
import Game from './components/board';


class AndreasSymbol extends React.Component {
    render() {
        return (
            <h1 className="andreas-symbol">ANDREAS &nbsp;</h1>
        );
    }
}

class MainPage extends React.Component {

    render() {
        const symbols = Array.from({length: 300}, (i) => (<AndreasSymbol />));

        return (
            <div className="main-page">
                {symbols}
                <Game />
            </div> 
        );
    }
}