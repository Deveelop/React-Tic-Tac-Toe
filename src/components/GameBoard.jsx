import { useState } from "react";


const GameBoard = ({onSelectPlayer, turns}) => {
return <ol id="game-board">
{turns.map((row, rowindex) =>(
    <li key={rowindex}>
        <ol>
            {row.map((playerSymbol, colindex) =>( <li key={colindex}><button onClick={() => onSelectPlayer(rowindex, colindex)} disabled={playerSymbol !== null} >{playerSymbol}</button></li> ))}
        </ol>
    </li>
))}
</ol>
}

export default GameBoard;