import { useState } from "react";

import "../index.css";
export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);

  const [isEditing, setIsEditing] = useState(false);

  function onEdit() {
    setIsEditing((editing) => !editing);

    if(isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  function onChangePlayer(event) {
    setPlayerName(event.target.value);
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {isEditing ? (
            <input type="text" value={playerName} onChange={onChangePlayer} />
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={onEdit}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
