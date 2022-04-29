import { NoteControls } from '../note-controls.jsx'

export function NoteTxt({
  note,
  onDeleteNote,
  onChangeStyle,
  onDuplicateNote,
  onTogglePin,
  noteIdx,
}) {
  function onNoteActive() {
    console.log('active')
  }

  return (
    <div onClick={onNoteActive} style={note.style} className="note-txt note">
      <p
        className="no-outline"
        suppressContentEditableWarning="true"
        contentEditable="true"
        // onInput={ev => console.log(ev.target)}
      >
        {note.info.txt}
      </p>
      <NoteControls
        note={note}
        onChangeStyle={onChangeStyle}
        onDeleteNote={onDeleteNote}
        onDuplicateNote={onDuplicateNote}
        onTogglePin={onTogglePin}
        noteIdx={noteIdx}
      />
    </div>
  )
}
