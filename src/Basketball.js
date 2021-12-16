import React, { Component } from 'react';
// import './App.css'
const player = {
    name: 'Steph Curry',
    team: "Not sure if I'm being honest"
}
const bbPayload = [
    {
      name: 'Todd',
      team: 'Team 2'
    },
    {
      name: 'Jeff',
      team: 'Team 3'
    },
    {
      name: 'Guy Guyson',
      team: 'Team 4'
    },
    {
      name: 'Matey McMaterson',
      team: 'Team 5'
    },
  ]

  
const displayPlayers = bbPayload.map((player, idx) => {
      return(
            <div key={idx}>
            <h1>Name: {player.name}</h1>
            <p>Team: {player.team}</p>
            </div>
    );
})

class Basketball extends Component {
    render() {
        return (
        <div className="Basketball">
            <h1>Basketball</h1>
            <div>
                <h2>{player.name}</h2>
                <p>{player.team}</p>
                <div>
                    {displayPlayers}
                </div>
            </div>
        </div>
            )
    }
}

export default Basketball;