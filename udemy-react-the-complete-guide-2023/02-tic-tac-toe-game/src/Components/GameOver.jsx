export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>The Winner is {winner}, congrats!</p>}
      {!winner && <p>It&apos;s a draw</p> }
      <p><button onClick={onRestart}>Rematch</button></p>
    </div>
  );
}
