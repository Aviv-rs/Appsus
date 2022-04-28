export function NoteTxt({ note, onDeleteNote }) {
  return (
    <div className="note">
      <p>{note.info.txt}</p>
      <button onClick={() => onDeleteNote(note.id)}>Delete</button>
    </div>
  )
}
