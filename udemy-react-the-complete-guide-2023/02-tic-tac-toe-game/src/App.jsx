import { useState } from "react";
import Player from "./Components/Player.jsx";
import GamePanel from "./Components/GamePanel.jsx";
import GameLog from "./Components/GameLog.jsx";
import GameOver from "./Components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const PLAYERS = { X: "player1", O: "player2" };

const INITIAL_GAME_PANEL = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentActivePlayer = "O";
  if (gameTurns.length > 0 && gameTurns[0].player === "O") {
    currentActivePlayer = "X";
  }
  return currentActivePlayer;
}

function derivedWinner(gamePanel, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gamePanel[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gamePanel[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gamePanel[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function derivedGamePanel(gameTurns) {
  let gamePanel = [...INITIAL_GAME_PANEL.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gamePanel[row][col] = player;
  }
  return gamePanel;
}

function App() {
  // Lifting the state up while multiple children components share the same state
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);
  // const [currentPlayer, setCurrentPlayer] = useState("X");

  const currentActivePlayer = derivedActivePlayer(gameTurns);
  const gamePanel = derivedGamePanel(gameTurns);
  const winner = derivedWinner(gamePanel, players);
  const isDraw = gameTurns.length === 9 && !winner;

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

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayerName) => {
      return {
        ...prevPlayerName,
        [symbol]: newName,
      };
    });
  }

  function handleRestartGame() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialPlayerName={players.X}
            playerSymbol="X"
            isActive={currentActivePlayer === "X"}
            handlePlayerNameChange={handlePlayerNameChange}
          />
          <Player
            initialPlayerName={players.O}
            playerSymbol="O"
            isActive={currentActivePlayer === "O"}
            handlePlayerNameChange={handlePlayerNameChange}
          />
        </ol>
        <GamePanel onSelectSquare={handleSwitchTurns} board={gamePanel} />
      </div>
      {(winner || isDraw) && (
        <GameOver
          winner={winner}
          onRestart={handleRestartGame}
        />
      )}
      <GameLog turns={gameTurns} />
    </main>
  );
}

export default App;
