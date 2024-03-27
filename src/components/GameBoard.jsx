import { useState } from "react";


const GameBoard = ({onSelectPlayer, board}) => {
return <ol id="game-board">
{board.map((row, rowindex) =>(
    <li key={rowindex}>
        <ol>
            {row.map((playerSymbol, colindex) =>( <li key={colindex}><button onClick={() => onSelectPlayer(rowindex, colindex)} disabled={playerSymbol !== null} >{playerSymbol}</button></li> ))}
        </ol>
    </li>
))}
</ol>
}

export default GameBoard;