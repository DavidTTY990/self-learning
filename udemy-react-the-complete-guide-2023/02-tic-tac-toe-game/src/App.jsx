import Player from './Components/Player'

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player player="player 1" symbol="X"/>
          <Player player="player 2" symbol="O"/>
        </ol>
      </div>
      LOG
    </main>
  );
}

export default App;
