import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Scoreboard.css';

export default class Player extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        incrementScore: PropTypes.func.isRequired
    }

    handleClick = () => {
        this.props.incrementScore(this.props.id)

    }

    render(){

        const {name, score, id} = this.props
        return(
            <div>
                <li className="player">
                <p className="id">ID: { id } </p>
                <p className="name">NAME: { name } </p>
                <p className="score">SCORE: { score } </p>
                <button onClick={this.handleClick}>+</button>                
                </li>
            </div>
        )
    }
}