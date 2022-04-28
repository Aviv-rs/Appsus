export function NoteImg({ note, onDeleteNote }) {
  return (
    <div className="note">
      <img className="note-img" src={note.info.url} alt="" />
      <button onClick={() => onDeleteNote(note.id)}>Delete</button>
    </div>
  )
}
