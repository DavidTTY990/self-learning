import { useState } from "react";
import Player from "./Components/Player.jsx";
import GamePanel from "./Components/GamePanel.jsx";
import GameLog from "./Components/GameLog.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";


function derivedActivePlayer(gameTurns) {
  let currentActivePlayer = "O";
      if (gameTurns.length > 0 && gameTurns[0].player === "O") {
        currentActivePlayer = "X";
  }
  return currentActivePlayer;
}

const initialGamePanel = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];



function App() {
  // Lifting the state up while multiple children components share the same state
  const [gameTurns, setGameTurns] = useState([]);
  // const [currentPlayer, setCurrentPlayer] = useState("X");

  let gamePanel = initialGamePanel;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
  
    gamePanel[row][col] = player;
  }

  let winner = null;

  const currentActivePlayer = derivedActivePlayer(gameTurns);

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gamePanel[combination[0].row][combination[0].column];
    const secondSquareSymbol = gamePanel[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gamePanel[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

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
        {winner ? <p>Player {winner} has won!</p> : null}
        <GamePanel onSelectSquare={handleSwitchTurns} board={gamePanel} />
      </div>
      <GameLog turns={gameTurns} />
    </main>
  );
}

export default App;
