import { NotePreview } from './note-preview.jsx'

export function NoteList({
  notes,
  onDuplicateNote,
  onDeleteNote,
  onToggleTodo,
  onChangeStyle,
  isPinnedNotes,
}) {
  return (
    <section className="note-list ">
      {notes.map((note, idx) => {
        if (!isPinnedNotes && note.isPinned)
          return <ReactFragment></ReactFragment>
        else
          return (
            <NotePreview
              onDuplicateNote={onDuplicateNote}
              onChangeStyle={onChangeStyle}
              onToggleTodo={onToggleTodo}
              onDeleteNote={onDeleteNote}
              note={note}
              noteIdx={idx}
              key={note.id}
            />
          )
      })}
    </section>
  )
}
