import { NoteControls } from '../note-controls.jsx'

export function NoteImg({
  note,
  onDeleteNote,
  onChangeStyle,
  onDuplicateNote,
  noteIdx,
}) {
  return (
    <div style={note.style} className="note note-img">
      <img src={note.info.url} alt="" />
      <NoteControls
        note={note}
        onChangeStyle={onChangeStyle}
        onDeleteNote={onDeleteNote}
        onDuplicateNote={onDuplicateNote}
        noteIdx={noteIdx}
      />
    </div>
  )
}
