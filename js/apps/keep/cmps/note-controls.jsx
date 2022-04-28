export function NoteControls({ onDeleteNote, note }) {
  return (
    <div className="note-controls">
      <button
        className="clean-btn btn-delete"
        onClick={() => onDeleteNote(note.id)}
      >
        <img src="assets\img\delete.png" alt="" />
      </button>
    </div>
  )
}
