import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setEditing] = useState(false);
  const [isName, setName] = useState(name);

  const editHandler = () => {
    setEditing( wasEditing => !wasEditing);
  
  }

  const changeName = (event) => {
   setName(event.target.value);
  }

 

  let playerName = <span className="player-name">{isName}</span>

  if(isEditing){
   playerName = <input type="text" required value={isName} onChange={changeName}/>
  }
  return (
    <li>
    <span className="player">
    {playerName}
    <span className="player-symbol">{symbol}</span>
    </span>
    
    <button onClick={editHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    
 

   </li>
  )
}

export default Player;
