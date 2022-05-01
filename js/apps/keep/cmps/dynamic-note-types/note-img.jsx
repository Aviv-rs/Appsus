import { NoteControls } from '../note-controls.jsx'

export function NoteImg({
  note,
  onDeleteNote,
  onChangeStyle,
  onDuplicateNote,
  onTogglePin,
}) {
  return (
    <div style={note.style} className="note note-img">
      <img src={note.info.url} alt="" />
      <NoteControls
        note={note}
        onChangeStyle={onChangeStyle}
        onDeleteNote={onDeleteNote}
        onDuplicateNote={onDuplicateNote}
        onTogglePin={onTogglePin}
      />
      <p className="note-title">{note.info.title}</p>
    </div>
  )
}
