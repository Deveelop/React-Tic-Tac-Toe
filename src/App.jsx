import Player from "./components/Player"
import { PLAYERS } from "./data"

const App = () => {
  return (
    <main>
      <div id="game-container">
      <ol id="players">
      {
        PLAYERS.map( ( playerInfos ) => (
        <Player {...playerInfos}/>
        ))
      }
      </ol>
      </div>
    </main>
  )
}

export default App
