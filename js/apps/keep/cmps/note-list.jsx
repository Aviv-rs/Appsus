import { NotePreview } from './note-preview.jsx'

export function NoteList({
  notes,
  onDuplicateNote,
  onDeleteNote,
  onToggleTodo,
  onChangeStyle,
  isPinnedNotes,
  onTogglePin,
}) {
  const noteListClass = isPinnedNotes ? 'note-list pinned-notes' : 'note-list'

  if (!notes.length) return <React.Fragment></React.Fragment>

  return (
    <React.Fragment>
      {isPinnedNotes && <div className="pinned-notes-title">Pinned</div>}
      {!isPinnedNotes && <div className="other-notes-title">Others</div>}

      <section className={noteListClass}>
        {notes.map((note, idx) => {
          if (!isPinnedNotes && note.isPinned)
            return <React.Fragment key={idx}></React.Fragment>
          else
            return (
              <NotePreview
                onDuplicateNote={onDuplicateNote}
                onChangeStyle={onChangeStyle}
                onToggleTodo={onToggleTodo}
                onTogglePin={onTogglePin}
                onDeleteNote={onDeleteNote}
                note={note}
                noteIdx={idx}
                key={note.id}
              />
            )
        })}
      </section>
    </React.Fragment>
  )
}
