import { NoteControls } from '../note-controls.jsx'

export function NoteTxt({
  note,
  onDeleteNote,
  onChangeStyle,
  onDuplicateNote,
  onTogglePin,
}) {
  return (
    <div style={note.style} className="note-txt note">
      <p
        className="no-outline"
        suppressContentEditableWarning="true"
        contentEditable="true"
      >
        {note.info.txt}
      </p>
      <NoteControls
        note={note}
        onChangeStyle={onChangeStyle}
        onDeleteNote={onDeleteNote}
        onDuplicateNote={onDuplicateNote}
        onTogglePin={onTogglePin}
      />
    </div>
  )
}
