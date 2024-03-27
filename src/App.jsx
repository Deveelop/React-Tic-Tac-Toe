import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./components/winning-combinations"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

 const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O'
  }
  return currentPlayer;
 }

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameBoard){
      const {square, player} =  turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row ]
    const secondSquareSymbol = gameBoard[combination[1].row]
    const thirdSquareSymbol = gameBoard[combination[2].row]
  }

  const handleSelectSquare = (rowindex, colindex) => {
  
    setGameTurns( prevTurn => {
    const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurn = [{ square: {row: rowindex, col: colindex}, player: currentPlayer }, ...prevTurn]
    return updatedTurn; 
    });

  }
  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
     
        <Player name='Player 1' symbol='X' isActive={ activePlayer === 'X'}/>
        <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'} />
     
      </ol>
      <GameBoard turns={gameTurns} onSelectPlayer={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
