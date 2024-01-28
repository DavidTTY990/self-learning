import { useState } from "react";
import Player from "./Components/Player";
import GamePanel from "./Components/GamePanel";

function App() {
  // Lifting the state up while multiple children components share the same state
  const [currentPlayer, setCurrentPlayer] = useState("X");
  function handleSwitchTurns() {
    setCurrentPlayer((currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");
    console.log(currentPlayer);
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
          handleSwitchTurns={handleSwitchTurns}
          currentActivePlayer={currentPlayer}
        />
      </div>
    </main>
  );
}

export default App;
