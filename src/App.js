import React from 'react';
import Title from './components/Title';
import Scoreboard from './components/Scoreboard';
import "./App.css";

function App() {

    return (
      <main>
      <Title content="SCORE-BOARD" />    {/* USE CONTENT!! && see info at https://github.com/Reinoptland/score-bored*/}
      <Scoreboard />
      </main>
    );
}

export default App;
