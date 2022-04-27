export function NotePreview({ note }) {
  return (
    <div className="note">
      <p>{note.info.txt}</p>
    </div>
  )
}
