import { NotePreview } from './note-preview.jsx'

export function NoteList({
  notes,
  onDuplicateNote,
  noteIdx,
  onDeleteNote,
  onToggleTodo,
  onChangeStyle,
}) {
  return (
    <section className="note-list ">
      {notes.map((note, idx) => (
        <NotePreview
          onDuplicateNote={onDuplicateNote}
          onChangeStyle={onChangeStyle}
          onToggleTodo={onToggleTodo}
          onDeleteNote={onDeleteNote}
          note={note}
          noteIdx={idx}
          key={note.id}
        />
      ))}
    </section>
  )
}
