import { NoteControls } from '../note-controls.jsx'

export function NoteImg({ note, onDeleteNote }) {
  return (
    <div className="note">
      <img className="note-img" src={note.info.url} alt="" />
      <NoteControls />
    </div>
  )
}
