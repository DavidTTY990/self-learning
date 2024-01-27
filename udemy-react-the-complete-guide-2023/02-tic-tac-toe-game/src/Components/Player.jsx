import { useState } from 'react';

export default function Player({ initialPlayerName, playerSymbol }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedPlayerName, setEditedPlayerName] = useState(initialPlayerName)

  function handleSetIsEditing() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(e) {
    setEditedPlayerName(e.target.value);
  }

  let editablePlayerName = (
    <span className="player-name">{editedPlayerName}</span>
  );

  if(isEditing) {
    editablePlayerName = (
      <input type="text" required value={editedPlayerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleSetIsEditing}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
