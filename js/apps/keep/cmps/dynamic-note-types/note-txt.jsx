export function NoteTxt({ note, onDeleteNote }) {
  return (
    <div className="note-txt note">
      <p suppressContentEditableWarning="true" contentEditable="true">
        {note.info.txt}
      </p>
      <button onClick={() => onDeleteNote(note.id)}>Delete</button>
    </div>
  )
}
