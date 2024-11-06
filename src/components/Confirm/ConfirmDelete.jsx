import "./Overlay.scss";

function ConfirmDelete({ show, onConfirm, onCancel }) {
  if (!show) return null;

  return (
    <div class="overlay">
      <div class="delete-task">
        <h1>Delete this task?</h1>
        <div class="delete-task__buttons">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
