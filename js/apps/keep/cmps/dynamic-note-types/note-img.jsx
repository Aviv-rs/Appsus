export function NoteImg({ note }) {
  return (
    <div className="note">
      <img src={note.info.url} alt="" />
    </div>
  )
}
