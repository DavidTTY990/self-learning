import { useState } from "react";
import Player from "./Components/Player.jsx";
import GamePanel from "./Components/GamePanel.jsx";
import GameLog from "./Components/GameLog.jsx";

function derivedActivePlayer(gameTurns) {
  let currentActivePlayer = "X";
      if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentActivePlayer = "O";
  }
  return currentActivePlayer;
}
function App() {
  // Lifting the state up while multiple children components share the same state
  const [gameTurns, setGameTurns] = useState([]);
  // const [currentPlayer, setCurrentPlayer] = useState("X");

  const currentActivePlayer = derivedActivePlayer(gameTurns);

  function handleSwitchTurns(rowIndex, colIndex) {
    // setCurrentPlayer((currentActivePlayer) =>
    //   currentActivePlayer === "X" ? "O" : "X"
    // );
    setGameTurns((prevTurns) => {
      const currentActivePlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentActivePlayer,
        },
        ...prevTurns,
      ];
      console.log(updatedTurns);
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialPlayerName="player 1"
            playerSymbol="X"
            isActive={currentActivePlayer === "X"}
          />
          <Player
            initialPlayerName="player 2"
            playerSymbol="O"
            isActive={currentActivePlayer === "O"}
          />
        </ol>
        <GamePanel onSelectSquare={handleSwitchTurns} turns={gameTurns} />
      </div>
      <GameLog turns={gameTurns} />
    </main>
  );
}

export default App;
