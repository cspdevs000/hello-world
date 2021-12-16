import React, { Component } from 'react';
// import './App.css'
const player =  {
    name: 'Magnificent McMazing',
    team: 'Horses'
}
const payload = [
    {
      name: 'Roundball Player 2',
      team: 'Team 2'
    },
    {
      name: 'Roundball Player 3',
      team: 'Team 3'
    },
    {
      name: 'Roundball Player 4',
      team: 'Team 4'
    },
    {
      name: 'Roundball Player 5',
      team: 'Team 5'
    },
  ]

  
const displayRoundballers = payload.map((player, idx) => {
      return(
            <div key={idx}>
            <h1>Name: {player.name}</h1>
            <p>Team: {player.team}</p>
            </div>
    );
})

class Roundball extends Component {
    render() {
        return (
        <div className="Roundball">
            <h1>Roundball</h1>
            <div>
                <h2>{player.name}</h2>
                <p>{player.team}</p>
                <div>
                    {displayRoundballers}
                </div>
            </div>
        </div>
            )
    }
}

export default Roundball;