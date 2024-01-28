import { useState } from "react";
import Player from "./Components/Player.jsx";
import GamePanel from "./Components/GamePanel.jsx";
import GameLog from "./Components/GameLog.jsx";

function App() {
  // Lifting the state up while multiple children components share the same state
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function handleSwitchTurns(rowIndex, colIndex) {
    setCurrentPlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");
    setGameTurns(prevTurns => {
      let currentPlayer = "X";
      if(prevTurns[0].player.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O"
      }

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns];

      return updatedTurns;
    })
  }
  function onSelectSquare(){}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialPlayerName="player 1"
            playerSymbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            initialPlayerName="player 2"
            playerSymbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        <GamePanel
          onSelectSquare={handleSwitchTurns}
        />
      </div>
      <GameLog />
    </main>
  );
}

export default App;
