import { NoteControls } from '../note-controls.jsx'

export function NoteTxt({ note, onDeleteNote }) {
  return (
    <div className="note-txt note">
      <p
        className="no-outline"
        suppressContentEditableWarning="true"
        contentEditable="true"
      >
        {note.info.txt}
      </p>
      <NoteControls />
    </div>
  )
}
