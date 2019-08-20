import React, { Component } from 'react';
import Player from "./Player";
import "./Scoreboard.css";


export default class Scoreboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            players: [
                {id:1, name: "Arien", score: 2},
                {id: 2, name: "David", score: 5},
                {id: 3, name:"Mimi", score: 4}
            ]
        }
    }

    render(){
        
        const players_copy = [...this.state.players]
        players_copy.sort((a, b) => b.score - a.score)

        return(
            <div className="scoreboard">
                <h1>Scoreboard</h1>
                    <ul>{players_copy.map(this.renderPlayer)} 
                    </ul>
            </div>
        );
    }

    renderPlayer = player => {
        return(
            <Player
                id={player.id}
                name={player.name}
                score={player.score}
                key={player.id}
                incrementScore={this.incrementScoreOfPlayer}
            />
        );
    }

    incrementScoreOfPlayer = id =>{
        const updatePlayers = this.state.players.map(player => {
            if(player.id === id){
                return{...player, score: player.score + 1};
            }else{
                return player;
            }
        })
    this.setState({ players: updatePlayers })
    }
}


