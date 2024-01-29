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
    setGameTurns((prevTurns) => {
      let currentActivePlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentActivePlayer = "O";
      }

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: currentActivePlayer}, ...prevTurns];
      console.log(updatedTurns)
      return updatedTurns;
    })
  }

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
          turns={gameTurns}
        />
      </div>
      <GameLog turns={gameTurns} />
    </main>
  );
}

export default App;
