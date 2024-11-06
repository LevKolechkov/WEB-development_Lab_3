import { useState } from "react";
import "./Confirm.scss";

function ConfirmEdit({ show, task, onSave, onCancel }) {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedAbout, setEditedAbout] = useState(task.about);

  if (!show) return null;

  return (
    <div className="overlay">
      <div className="edit">
        <input
          type="text"
          className="edit__mini-input"
          placeholder="Max input"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <textarea
          className="edit__max-input"
          placeholder="Max input"
          value={editedAbout}
          onChange={(e) => setEditedAbout(e.target.value)}
        ></textarea>
        <div className="edit__buttons">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={() => onSave(editedTitle, editedAbout)}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmEdit;
