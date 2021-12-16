import React, { Component } from 'react';
// import './App.css'
const player =  {
    name: 'Polo McPoloson',
    team: 'The Amazing Horses'
}
const payload = [
    {
      name: 'Polo Player 2',
      team: 'Team 2'
    },
    {
      name: 'Polo Player 3',
      team: 'Team 3'
    },
    {
      name: 'Polo Player 4',
      team: 'Team 4'
    },
    {
      name: 'Polo Player 5',
      team: 'Team 5'
    },
  ]

  
const displayPoloPlayers = payload.map((player, idx) => {
      return(
            <div key={idx}>
            <h1>Name: {player.name}</h1>
            <p>Team: {player.team}</p>
            </div>
    );
})

class Polo extends Component {
    render() {
        return (
        <div className="Polo">
            <h1>Polo</h1>
            <div>
                <h2>{player.name}</h2>
                <p>{player.team}</p>
                <div>
                    {displayPoloPlayers}
                </div>
            </div>
        </div>
            )
    }
}

export default Polo;