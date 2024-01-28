import { useState } from "react";

const initialGamePanel = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GamePanel({onSelectSquare}) {
  // const [gamePanel, setGamePanel] = useState(initialGamePanel);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGamePanel((prevGamePanel) => {
  //     // *strongly recommand *use shallow copy to keep original array immutable.
  //     const updatedGamePanel = [
  //       ...prevGamePanel.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGamePanel[rowIndex][colIndex] = currentActivePlayer;
  //     return updatedGamePanel;
  //   })
  //   handleSwitchTurns();
  // }

  return (
    <ol id="game-board">
      {gamePanel.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare()}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
