import Player from './Components/Player';
import GamePanel from './Components/GamePanel';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialPlayerName="player 1" playerSymbol="X" />
          <Player initialPlayerName="player 2" playerSymbol="O" />
        </ol>
        <GamePanel />
      </div>
    </main>
  );
}

export default App;