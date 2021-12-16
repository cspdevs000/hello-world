import React, { Component } from 'react';
// import './App.css'
const player =  {
    name: 'Foosie McFooseface',
    team: 'Lone Horseys'
}
const payload = [
    {
      name: 'Fooseball Player 2',
      team: 'Team 2'
    },
    {
      name: 'Fooseball Player 3',
      team: 'Team 3'
    },
    {
      name: 'Fooseball Player 4',
      team: 'Team 4'
    },
    {
      name: 'Fooseball Player 5',
      team: 'Team 5'
    },
  ]

  
const displayFoosePlayers = payload.map((player, idx) => {
      return(
            <div key={idx}>
            <h1>Name: {player.name}</h1>
            <p>Team: {player.team}</p>
            </div>
    );
})

class Fooseball extends Component {
    render() {
        return (
        <div className="Fooseball">
            <h1>Fooseball</h1>
            <div>
                <h2>{player.name}</h2>
                <p>{player.team}</p>
                <div>
                    {displayFoosePlayers}
                </div>
            </div>
        </div>
            )
    }
}

export default Fooseball;